import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assects/avatar1.jpg'
import AVTR2 from '../../assects/avatar2.jpg'
import AVTR3 from '../../assects/avatar3.jpg'
import AVTR4 from '../../assects/avatar4.jpg'
import { useSelector } from 'react-redux'

import { Navigation, Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
  {
    avatar: AVTR1,
    name: 'Nana Tata',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptate quos hic natus dolore sit voluptatum esse numquam ab, repellat et aliquid laborum, nam aperiam. Officiis ex quibusdam eveniet ipsam!'
   }
  ,
  {
    avatar: AVTR2,
    name: 'Shata Wale',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptate quos hic natus dolore sit voluptatum esse numquam ab, repellat et aliquid laborum, nam aperiam. Officiis ex quibusdam eveniet ipsam!'
  },
  {
    avatar: AVTR3,
    name: 'Alexsandr Wade',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptate quos hic natus dolore sit voluptatum esse numquam ab, repellat et aliquid laborum, nam aperiam. Officiis ex quibusdam eveniet ipsam!'
  },
  {
    avatar: AVTR4,
    name: 'Anna Cris',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptate quos hic natus dolore sit voluptatum esse numquam ab, repellat et aliquid laborum, nam aperiam. Officiis ex quibusdam eveniet ipsam!'
  }, 
]


const Testimonials = () => {


  // const count = useSelector((state) => state.counter.value)

  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[Navigation, Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="AVTR1" />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials