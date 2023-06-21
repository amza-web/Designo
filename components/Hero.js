import React from 'react'
import img1 from "@/app/assets/home/desktop/image-hero-phone.png"
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='container lg:relative lg:flex bg-peach lg:px-24 lg:py-36 text-center text-white h-834 lg:h-auto overflow-hidden '>
        <div className='max-w-xl p-10 pt-px -mb-28 relative z-10'>
            <h1 className='mt-20 '>Award-winning custom designs and digital branding solutions</h1>
            <p>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
            <button className='mt-10 btn text-15  font-medium'>Learn more</button>
        </div>
        <div className='w-full z-0'>
            <picture className=" w-full flex justify-center">
                <Image className='pt-32 scale-s-2 lg:-top-8 lg:-right-24' src={img1} alt="A mockup design" />
            </picture>
        </div>
    </div>
  )
}

export default Hero