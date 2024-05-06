import React from 'react'
import { FaArrowRight } from "react-icons/fa";
const ServiseCard = ({service}) => {
    console.log(service)
  return (
    
        <div className="card card-compact w-96 bg-base-100 shadow-xl mb-2 border-2 p-2 border-gray-500">
    <figure><img src={service.img} alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title">{service.title}</h2>
      <p>{service.description}</p>
      <div className="card-actions justify-end">
        <p className='text-2xl text-orange-400'><span>price: </span>{service.price}</p>
        <button className="btn btn-primary"><FaArrowRight></FaArrowRight></button>
      </div>
    
  </div>
    </div>
  )
}

export default ServiseCard
