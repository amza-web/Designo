import React from 'react'
import Image from 'next/image'

import img1 from "@/app/assets/home/desktop/image-hero-phone.png"
import bg from "@/app/assets/home/desktop/bg-pattern-hero-home.svg" 

const Hero = () => {
  return (
    <div className='container relative lg:flex bg-peach lg:px-24 lg:py-36 text-center lg:text-left text-white h-[834px] lg:h-max overflow-hidden lg:rounded-2xl'>
        <div className='max-w-[25rem] lg:max-w-none mx-auto p-10 lg:p-0 pt-px -mb-28 lg:mb-0 relative z-10'>
            <h1 className='mt-20 lg:mt-0 lg:mb-9'>Award-winning custom designs and digital branding solutions</h1>
            <p className='lg:max-w-[445px]'>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
            <button className='mt-10 btn text-15  font-medium'>Learn more</button>
        </div>
        <div className='w-full z-0'>
            <picture className=" w-full flex justify-center">
                <Image className='pt-32 scale-s-2 lg:absolute lg:-top-8 lg:pt-0 lg:-right-20' src={img1} alt="A mockup design" />
            </picture>
        </div>
        <Image className='absolute left-[465px] top-0 z-0  ' src={bg} alt='circle-bg'/>
    </div>
  )
}

export default Hero