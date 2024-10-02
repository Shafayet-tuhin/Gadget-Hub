import React, { useEffect } from 'react'
import contactcover from '../../../assets/shop/contact.jpg'
import Cover from './../../Shared/Cover/Cover';
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { IoTimeSharp } from "react-icons/io5";
import ContactFrom from '../Contact Form/ContactFrom';
import { Helmet } from 'react-helmet-async';

const Contact = () => {

    useEffect(() => { 
        window.scrollTo({top: 0, behavior: 'instant'})
      }, [])
    return (
        <div>
            <Helmet>
        <title>Contact Us</title>
      </Helmet>

            <Cover img={contactcover} title="CONTACT US" para="" />

            <ContactFrom/>


        </div>
    )
}

export default Contact