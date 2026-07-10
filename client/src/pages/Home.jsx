import React from 'react'
import MainBanner from '../components/MainBanner'
import Navbar from '../components/Navbar'
import Categories from '../components/Categories'
import BestSeller from '../components/BestSeller'
import BottomBanner from '../components/BottomBanner'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import Testimonial from '../components/Testimunal'
import NewProducts from '../components/NewProducts'

const Home = () => {
  return (
    <div className='mt-10 '>
        
      <MainBanner />
      <Categories/>
      <BestSeller/>
      <NewProducts/>
      <BottomBanner/>
      <Testimonial />
      <NewsLetter/>
      
    </div>
  )
}

export default Home
