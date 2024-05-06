import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import './styles.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import img1 from "../../../assets/images/banner/1.jpg"
import img2 from "../../../assets/images/banner/2.jpg"
import img3 from "../../../assets/images/banner/3.jpg"
import img4 from "../../../assets/images/banner/4.jpg"
import img5 from "../../../assets/images/banner/5.jpg"
import img6 from "../../../assets/images/banner/6.jpg"

const Bannar = () => {
  return (
    < div >
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div c>
        <img className='max-h-[700px] w-[90%]' src={img1} />
       <div className='relative text-red-500 -top-[500px] left-12 gpa-2'>
       v<h1 className='text-orange-400 font-bold font-mono text-5xl'>Affordable Price For <br /> Car Servicing</h1>
        <p className='text-orange-400 font-bold font-mono text-2xl' >There are many variations of passages of  available, <br />but the majority have suffered alteration in some form</p>
        <button className='btn btn-outline btn-warning mr-2'>Discover More</button>
        <button className='btn btn-primary btn-warning'>Latest project</button>
       </div>
        </div>

      </SwiperSlide>
      <SwiperSlide>
        <div>
        <img className='max-h-[700px] w-[90%]' src={img2} />
        <div className='relative text-red-500 -top-[500px] left-12  gpa-2'>
        <h1 className='text-orange-400 font-bold font-mono text-5xl'>Affordable Price For <br /> Car Servicing</h1>
        <p className='text-orange-400 font-bold font-mono text-2xl' >There are many variations of passages of  available, <br />but the majority have suffered alteration in some form</p>
        <button className='btn btn-outline btn-warning mr-2'>Discover More</button>
        <button className='btn btn-primary btn-warning'>Latest project</button>
       </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
        <img className='max-h-[700px] w-[90%]' src={img3} />
        <div className='relative text-red-500 -top-[500px] left-12  gpa-2'>
        <h1 className='text-orange-400 font-bold font-mono text-5xl'>Affordable Price For <br /> Car Servicing</h1>
        <p className='text-orange-400 font-bold font-mono text-2xl' >There are many variations of passages of  available, <br />but the majority have suffered alteration in some form</p>
        <button className='btn btn-outline btn-warning mr-2'>Discover More</button>
        <button className='btn btn-primary btn-warning'>Latest project</button>
       </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img className='max-h-[700px] w-[90%]' src={img4} />
      <div className='relative text-red-500 -top-[500px] left-12  gpa-2'>
      <h1 className='text-orange-400 font-bold font-mono text-5xl'>Affordable Price For <br /> Car Servicing</h1>
        <p className='text-orange-400 font-bold font-mono text-2xl' >There are many variations of passages of  available, <br />but the majority have suffered alteration in some form</p>
        <button className='btn btn-outline btn-warning mr-2'>Discover More</button>
        <button className='btn btn-primary btn-warning'>Latest project</button>
       </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
        <img  className='max-h-[700px] w-[90%]' src={img5} />
        <div className='relative text-red-500 -top-[500px] left-12  gpa-2'>
       <h1 className='text-orange-400 font-bold font-mono text-5xl'>Affordable Price For <br /> Car Servicing</h1>
        <p className='text-orange-400 font-bold font-mono text-2xl' >There are many variations of passages of  available, <br />but the majority have suffered alteration in some form</p>
        <button className='btn btn-outline btn-warning mr-2'>Discover More</button>
        <button className='btn btn-primary btn-warning'>Latest project</button>
       </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
        <img className='max-h-[700px] w-[90%]' src={img6} />
        <div className='relative text-red-500 -top-[500px] left-12  gpa-2'>
        <h1 className='text-orange-400 font-bold font-mono text-5xl'>Affordable Price For <br /> Car Servicing</h1>
        <p className='text-orange-400 font-bold font-mono text-2xl' >There are many variations of passages of  available, <br />but the majority have suffered alteration in some form</p>
        <button className='btn btn-outline btn-warning mr-2'>Discover More</button>
        <button className='btn btn-primary btn-warning'>Latest project</button>
       </div>
        </div>
      </SwiperSlide>
      
    </Swiper>
    </ div>
  )
}

export default Bannar
