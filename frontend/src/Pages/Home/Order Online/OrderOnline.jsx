import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination  } from 'swiper/modules';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import slide6 from '../../../assets/home/slide6.jpg'
import chefservice from '../../../assets/home/chef-service.jpg'


const OrderOnline = () => {
    return (
        <div className='mt-[4.94rem] mb-[5.75rem]'>

            <div className='flex flex-col items-center gap-4 mb-12'>
                <p className='text-[#D99904] italic text-xl font-normal'>---Open from 10am to 8pm--</p>
                <hr className='w-[22rem]' />
                <p className='text-[#151515] font-normal text-[2.5rem] font-abc'>Item Preview</p>
                <hr className='w-[22rem]' />
            </div>

            <Swiper
                slidesPerView={2.3}
                spaceBetween={15}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper mb-24"
                breakpoints={{
                    640: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}
            >
                <SwiperSlide>
                    <img src={slide6} alt="" />
                    <h3 className='text-center lg:text-4xl text-2xl font-bold uppercase  text-white'>Salad</h3>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className='text-center lg:text-4xl text-2xl font-bold uppercase  text-white'>Pizza</h3>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className='text-center lg:text-4xl text-2xl font-bold uppercase  text-white'>Soup</h3>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className='text-center lg:text-4xl text-2xl font-bold uppercase  text-white'>Cake</h3>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className='text-center lg:text-4xl text-2xl font-bold uppercase  text-white'>Salad</h3>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className='text-center lg:text-4xl text-2xl font-bold uppercase  text-white'>Pizza</h3>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className='text-center lg:text-4xl text-2xl font-bold uppercase  text-white'>Soup</h3>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className='text-center lg:text-4xl text-2xl font-bold uppercase  text-white'>Cake</h3>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h3 className='text-center lg:text-4xl text-2xl font-bold uppercase  text-white'>Salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide6} alt="" />
                    <h3 className='text-center lg:text-4xl text-2xl font-bold uppercase  text-white'>Salad</h3>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className='text-center lg:text-4xl text-2xl font-bold uppercase  text-white'>Pizza</h3>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className='text-center lg:text-4xl text-2xl font-bold uppercase  text-white'>Soup</h3>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className='text-center lg:text-4xl text-2xl font-bold uppercase  text-white'>Cake</h3>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h3 className='text-center lg:text-4xl text-2xl font-bold uppercase  text-white'>Salad</h3>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className='text-center lg:text-4xl text-2xl font-bold uppercase  text-white'>Pizza</h3>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className='text-center lg:text-4xl text-2xl font-bold uppercase  text-white'>Soup</h3>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className='text-center lg:text-4xl text-2xl font-bold uppercase  text-white'>Cake</h3>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className='text-center lg:text-4xl text-2xl font-bold uppercase  text-white'>Salad</h3>
                </SwiperSlide>


            </Swiper>




            <div className='bg-[url("./assets/home/tech.jpg")] py-8 px-8 lg:px-28 lg:py-[7.45rem] text-center bg-cover'>
                <div className='lg:px-[10.44rem] lg:py-[6.2rem] bg-white rounded-xl font-normal'>
                    <p className='text-[#151515] font-abc text-lg lg:text-[2.8125rem] lg:mb-4'>Gadget-Hub</p>
                    <p className='text-xs lg:text-base font-normal leading-7'>
                    Gadget Hub is your one-stop shop for the latest and most innovative tech gadgets. Offering a wide range of high-quality electronics, from smartphones and smart home devices to wearables and accessories, Gadget Hub aims to meet the needs of tech enthusiasts and casual buyers alike. </p>
                </div>
            </div>

        </div>
    )
}

export default OrderOnline