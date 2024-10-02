import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import Cover from './../../Shared/Cover/Cover';
import menucover from '../../../assets/home/tech.jpg'
import laptop from '../../../assets/menu/laptop.jpg'
import phone from '../../../assets/menu/phone.jpg'
import mouse from '../../../assets/menu/mouse.jpg'
import keyboard from '../../../assets/menu/keyboard.jpg'
import useMenu from '../../../hooks/useMenu';
import MenuCatagory from './../Menu Catagory/MenuCatagory';

const Menu = () => {

  const [menu] = useMenu();

  const laptops = menu.filter(item => item.category === 'laptop')
  const mobiles = menu.filter(item => item.category === 'mobile')
  const mouses = menu.filter(item => item.category === 'mouse')
  const keyboard = menu.filter(item => item.category === 'keyboard')
  const popular = menu.filter(item => item.category === 'popular')

  useEffect(() => { 
    window.scrollTo({top: 0, behavior: 'instant'})
  }, [])



  return (
    <div>
      <Helmet>
        <title>Menu page</title>
      </Helmet>

      <Cover img={menucover} title="OUR Products" para="" />

      <div className='flex flex-col items-center gap-4 mb-12'>
        <p className='text-[#D99904] italic text-xl font-normal'>---Don't miss---</p>
        <hr className='w-[22rem]' />
        <p className='text-[#151515] font-normal text-[2.5rem] font-abc'>Latest Products</p>
        <hr className='w-[23rem]' />
      </div>

      <MenuCatagory items={popular} />

      <Cover img={laptop} title="Laptop" para="" />
      <MenuCatagory items={laptops} />

      <Cover img={phone} title="Phone" para="" />
      <MenuCatagory items={mobiles} />

      <Cover img={keyboard} title="Keyboard" para="" />
      <MenuCatagory items={keyboard} />

      <Cover img={mouse} title="Mouse" para="" />
      <MenuCatagory items={mouses} />


    </div>
  )
}

export default Menu