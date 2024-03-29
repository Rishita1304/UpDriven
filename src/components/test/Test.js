import React from 'react'
import './test.css'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination , Navigation, HashNavigation} from "swiper";
import { Datas } from './Datas';

const Test = () => {
  return (
    <div className='testimonial containers sectionn'>
    <h2 className='test_title'>Our Client says</h2>
    <span className='test_subtitle'>Testimonials</span>   
    <Swiper className='test_container'
    loop={true}
    pagination={{
      clickable: true,
    }}
    breakpoints={{
      576: {
        slidesPerView: 2,
        spaceBetween: 28,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
    }}
    spaceBetween={30}
    hashNavigation={{
      watchState: true,
    }}
    navigation={true}
    modules={[Pagination, Navigation, HashNavigation]}
    >
        {Datas.map(({id, image, title, description})=>{
            return(
                <SwiperSlide className='test_card' key={id}>
                    <img src={image} alt='' className='test_img' />
                    <h3 className='test_name'>{title}</h3>
                    <p className='test_desc'>{description}</p>
                </SwiperSlide>
            )
        })}
        </Swiper>   
</div>
  )
}

export default Test
