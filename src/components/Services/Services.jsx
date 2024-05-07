import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/car')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])
    return (
        <div>
            <h3 className="text-center text-3xl font-semibold">Our Craft Items</h3>
            
          <div className="bouncing-fading-div">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  px-10 gap-5">

{
    services.map(service=>
        <div key={service._id}>
<div className='card w-full dark:text-black h-[450px] bg-base-100 shadow-xl lg:mb-0 md:mb-0 mb-3'>
<figure>
<img className='h-60 w-3/4 mt-10 rounded-lg' src={service.img} alt="Shoes" />

</figure>
<div className="px-12 space-y-4 pt-3">
<h2 className="card-title">{service.title}</h2>

<p className=''>Price : {service.price}</p>






</div>
<div className='text-right mx-4 my-3'>
<Link to={`/bookings/${service._id}`}><button className='btn text-white bg-blue-950 mr-3'>Booking Now!</button></Link>

</div>
</div>

</div>
    )
}
</div>
            
          </div>
       
            
          
            
          </div>
       
            

            
        
    );
};

export default Services;