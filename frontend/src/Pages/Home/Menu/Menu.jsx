import React, { useEffect, useState } from 'react'
import SingleMenuItem from '../../Shared/Menu Item/SingleMenuItem';
import useMenu from './../../../hooks/useMenu';
import { Link } from 'react-router-dom';

const Menu = () => {

    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === 'popular')


    return (
        <div className='mb-32'>
            <div className='flex flex-col items-center gap-4 mb-12'>
                <p className='text-[#D99904] italic text-xl font-normal'>---Check it out---</p>
                <hr className='w-[22rem]' />
                <p className='text-[#151515] font-normal text-[2.5rem] font-abc'>Our Product List</p>
                <hr className='w-[23rem]' />
            </div>

            <div className='grid lg:grid-cols-2 grid-cols-1 gap-6' >
                {
                    popular.map((item, ind) => {
                        return <SingleMenuItem key={ind} item={item} />
                    })
                }
            </div>

            <div className='flex justify-center mt-12'>
                <Link to='/menu'>  <button style={{ borderRadius: "0.5rem", borderBottom: "3px solid #1F2937" }} className='btn btn-ghost hover:bg-black text-xl font-medium text-[#1F2937] hover:text-orange-400'> View Full  List</button></Link>
            </div>


            {/* Call Us Now */}

            <div className='mt-20'>
                <p className='text-center py-14 lg:px-[21rem] lg:py-24 bg-black text-orange-500 rounded-2xl font-semibold lg:text-5xl text-2xl'>Call Us: +880-01821853280</p>
            </div>

            {/* Chef recomendations */}

            <div className='mt-20'>
                <div className='flex flex-col items-center gap-4 mb-12'>
                    <p className='text-[#D99904] italic text-xl font-normal'> ---A glimps of our--- </p>
                    <hr className='lg:w-[22rem] w-full' />
                    <p className='text-[#151515] font-normal text-3xl lg:text-[2.5rem] font-abc'>Top Selling Products</p>
                    <hr className='lg:w-[22rem] w-full' />
                </div>


                <div className='flex flex-col lg:flex-row justify-center gap-8 lg:gap-24' >



                    <div className="card card-compact bg-base-100 w-96 shadow-xl">
                        <div className="card-body">
                            <h2 className="text-center font-semibold text-3xl font-abc text-orange-500">MSI Thin A15</h2>
                            <h2 className="text-center font-semibold text-base text-gray-600"> Ryzen 5 7535HS RTX 2050 4GB GDDR6 Graphics 16GB RAM 15.6" Gaming Laptop</h2>
                        </div>
                        <figure><img className='w-[20rem]' src="https://www.startech.com.bd/image/cache/catalog/laptop/msi/thin-15-b13ve/thin-15-b13vethin-15-b13ve-01-500x500.webp" alt="Shoes" /></figure>
                    </div>
                    <div className="card card-compact bg-base-100 w-96 shadow-xl">
                        <div className="card-body">
                            <h2 className="text-center font-semibold text-3xl font-abc text-orange-500">
                            Fantech Helios Go</h2>
                            <h2 className="text-center font-semibold text-base text-gray-600"> 
                            XD5 USB Type-C Wireless RGB Gaming Mouse Space Edition</h2>
                        </div>
                        <figure><img className='w-[20rem]' src="https://www.startech.com.bd/image/cache/catalog/mouse/fantech/xd5/xd5-space-edition-02-500x500.jpg" alt="Shoes" /></figure>
                    </div>
                    <div className="card card-compact bg-base-100 w-96 shadow-xl">
                        <div className="card-body">
                            <h2 className="text-center font-semibold text-3xl font-abc text-orange-500">Apple MacBook Pro</h2>
                            <h2 className="text-center font-semibold text-base text-gray-600">M3 Pro Chip Liquid Retina Display 18GB RAM 512GB SSD Space Black</h2>
                        </div>
                        <figure><img className='w-[20rem]' src="https://www.startech.com.bd/image/cache/catalog/laptop/apple/macbook-pro-16-inch-m3-pro-black/macbook-pro-16-inch-m3-pro-black-01-500x500.webp" alt="Shoes" /></figure>
                    </div>

                </div>


            </div>


        </div>
    )
}

export default Menu