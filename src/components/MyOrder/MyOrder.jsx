import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

import Swal from 'sweetalert2'
import useAxiosSecure from "../../hooks/useAxiosSecure";


const MyOrder = () => {
    const {user}=useContext(AuthContext);
    const axiosSecure=useAxiosSecure();
    const [bookings,setBookings]=useState([]);
    // const url=`http://localhost:5000/bookings?email=${user.email}`;
    const url=`/bookings?email=${user.email}`;
   
    
    
    useEffect(()=>{
      // fetch(url,{credentials:"include"})
      // .then(res=>res.json())
      // .then(data=>setBookings(data))
      axiosSecure.get(url)
      .then(res=>{
        setBookings(res.data)
      })
    },[url,axiosSecure])
    const handleDelete=id=>{
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/bookings/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                  // eslint-disable-next-line react/prop-types
                  const remaining=bookings.filter(craft=>craft._id!==id);
                setBookings(remaining);
                
            }
            
        })
              
            }
          });

    }
    const handleConfirm=id=>{
        fetch(`http://localhost:5000/bookings/${id}`,{
          method: 'PATCH',
          headers:{
            'content-type':'application/json'
          } ,
          body:JSON.stringify({status:'confirm'})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                // update state
                const remaining=bookings.filter(booking=>booking._id!==id);
                const updated=bookings.find(booking=>booking._id===id);
                updated.status='confirm';
                const newBookings=[updated,...remaining];
                setBookings(newBookings);
            }
        })
    }
    return (
        <div>
            <h2 className="text-2xl font-semibold">All Art & craft items : {bookings.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      
      
      {
        bookings.map(booking=>
            <tr key={booking._id}>
        <th className="cursor-pointer" onClick={()=>handleDelete(booking._id)}>X</th>
        <td><img className="h-24 w-32 rounded" src={booking.img} alt="" /></td>
        <td>{booking.title}</td>
        <td>{booking.price}</td>
        <td>{booking.date}</td>
        <td>
            {
                booking.status==='confirm'?
                <span className="text-blue-800">Confirmed</span>
                :
                <button onClick={()=>handleConfirm(booking._id)} className='btn text-white bg-blue-950 mr-3'>Confirm</button>

            }
        
        </td>
        
      </tr>
        )
      }
      
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default MyOrder;