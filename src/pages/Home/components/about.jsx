import React from 'react'
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
const About = () => {
  return (
    <div className="hero h-auto bg-base-200">
    <div className="hero-content flex-col lg:flex-row">
      <div className='lg:w-1/2 relative shadow-sm'>
      <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
      <img src={parts} className="absolute w-1/2 rounded-lg shadow-2xl right-6 bottom-[2px] border-8 border-white" />
      </div>
      <div className='lg:w-1/2'>
        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
        <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
        <button className="btn btn-primary btn-warning">Get More Info</button>
      </div>
    </div>
  </div>
  )
}

export default About
