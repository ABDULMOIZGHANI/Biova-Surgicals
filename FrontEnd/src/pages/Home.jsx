import React from 'react'
import MainSection from '../components/MainSection'
import BrandSection from '../components/BrandSection'
import FeaturedProducts from '../components/FeaturedProducts'
import Testimonials from '../components/Testimonials'
import ShopWithConfidence from '../components/ShopWithConfidence'

const Home = () => {
    return (
        <main>
            <MainSection />
            <BrandSection />
            <FeaturedProducts />
            <Testimonials />
            <ShopWithConfidence />
        </main>
    )
}

export default Home
