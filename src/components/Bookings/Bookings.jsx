import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from 'sweetalert2'


const Bookings = () => {
    const booking=useLoaderData();
    const {user}=useContext(AuthContext);
    console.log(booking);
    const handleConfirm=e=>{
        e.preventDefault();
        const form=e.target;
        const title=form.title.value;
        const price=form.price.value;
        const date=form.date.value;
        const email=form.email.value;
        const order={
            title:title,
            price:price,
            date:date,
            email:email,
            service_id:booking._id,
            img:booking.img,
        }
        console.log(order);
        fetch('http://localhost:5000/bookings',{   
            method: "POST",
            headers: {
                   "Content-Type": "application/json",
            },
            body: JSON.stringify(order),
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
              Swal.fire({
                  title: 'Succeess!',
                  text: 'Successfully Updated',
                  icon: 'success',
                  confirmButtonText: 'Cool'
                })
            }
            console.log(data);
              
             
             
          })
    }
    return (
        <div className="my-10">
            <h2 className="text-center text-3xl font-semibold">Bookings data come here</h2>
            <form onSubmit={handleConfirm}>
                <div className="grid grid-cols-2 gap-5 px-32 py-5">
                    <input type="text" defaultValue={booking.title} className="bg-gray-100 py-2 rounded" name="title"/>
                    <input type="text" defaultValue={'$ '+ booking.price} className="bg-gray-100 py-2 rounded" name="price"/>
                    <input type="date" className="bg-gray-100 py-2 rounded" name="date"/>
                    <input type="email" defaultValue={user.email} className="bg-gray-100 py-2 rounded" name="email"/>
                    <input type="submit" className="bg-orange-600 text-white py-2 rounded cursor-pointer col-span-2" value="Confirm Order" />
                
                </div>
            </form>
            
        </div>
    );
};

export default Bookings;