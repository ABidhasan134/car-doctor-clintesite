import React, { useEffect, useState } from 'react'
import ServiseCard from './serviseCard';

const Servises = () => {
    const [servises, setServices]=useState([]);

    useEffect(()=>{
        fetch("./services.json")
        .then(res=>res.json())
        .then((data)=>{
            setServices(data);
            // console.log(data)
        })
    },[])
  return (
    <div>
      <div className='grid justify-center text-center gap-2 text-2xl'>
        <h1 className='text-5xl font-semibold text-orange-400'>Our Service Area</h1>
        <p>the majority have suffered alteration in some form,<br /> by injected humour, or randomised words which don't look even slightly believable. </p>
      </div>
      <div className='grid grid-cols-3'>
        {
            servises.map((item)=>{
                return <ServiseCard key={item._id} service={item}></ServiseCard>}
            )
        }
      </div>
    </div>
  )
}

export default Servises
