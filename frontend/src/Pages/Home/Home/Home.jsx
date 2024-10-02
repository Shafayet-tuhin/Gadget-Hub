import React, { useEffect } from 'react'
import Banner from '../Banner/Banner'
import OrderOnline from './../Order Online/OrderOnline';
import Menu from './../Menu/Menu';
import { Helmet } from 'react-helmet-async';
import FAQ from '../Faq/Faq';

const Home = () => {

  useEffect(() => { 
    window.scrollTo({top: 0, behavior: 'instant'})
  }, [])

  return (
    <div>

      <Helmet>
        <title>Home page</title>
      </Helmet>

      <Banner />
      <OrderOnline />
      <Menu />
      <FAQ />
    </div>
  )
}

export default Home