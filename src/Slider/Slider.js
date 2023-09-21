import React from 'react'
import './slider.css'
import img1 from '../images/1.webp'
import img2 from '../images/2.png'
import img3 from '../images/3.jpg'
import img4 from '../images/4.png'
import img5 from '../images/5.png'
import img6 from '../images/6.png'
import { Swiper, SwiperSlide } from 'swiper/react';

const Slider = () => {
    const slider1=()=>{
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
    }
   
  return (
  <section>
 
    <div className='swiper mySwiper  container '>
        <div className=' swiper-wrapper content'>
            <div className='swiper-slide card'>
                <div className='card-content'>
                    <div className='image'>
                        <img src={img1}></img>
                    </div>
                    <div className='media-icon'>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-github"></i>
                    </div>
                    <div className='name-profession'>
                        <span className='name'>Naveen singh ruatela</span>
                        <span className='profession'>Full-Stack- Developer</span>
                    </div>
                    <div className='rating'>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>

                    </div>
                    <div className='button'>
                    <button className='about-me'>About Me</button>
                    <button className='hire-me'>Hire me</button>
                    </div>
                </div>

            </div>
        </div>
      
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-pagination"></div>
  
    </section>)
}

export default Slider
