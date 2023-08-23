import React from 'react'
import Image from 'next/image'

import img1 from "@/app/assets/home/desktop/illustration-passionate.svg"
import img2 from "@/app/assets/home/desktop/illustration-resourceful.svg"
import img3 from "@/app/assets/home/desktop/illustration-friendly.svg"
import imgBg from "@/app/assets/shared/desktop/bg-pattern-small-circle.svg"
import CallToAction from './CallToAction'


const Skills = () => {
  return (
    <section className='container flex flex-col relative text-center md:text-left lg:text-center -mb-24 lg:-mb-20 md:max-w-[1111px]'>
        <div className='lg:flex lg:gap-8'>
            <div className='mb-11 md:flex md:gap-9 lg:block'>
                <div className='flex justify-center items-center mb-[43px] basis-1/3'>
                    <Image className='absolute z-0' src={imgBg} alt='Passionate'/>
                    <Image className='z-10 relative' src={img1} alt='Passionate'/>
                </div>
                <div className='basis-2/3'>
                    <h3 className='text-xl leading-[26px] tracking-[5px] uppercase font-medium mb-8'>Passionate</h3>
                    <p>Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.</p>
                </div>
            </div>
            <div className='mb-11 md:flex md:gap-9 lg:block'>
                <div className='flex justify-center items-center mb-[43px] basis-1/3'>
                    <Image className='absolute z-0' src={imgBg} alt='Resourceful'/>
                    <Image className='z-10 relative' src={img2} alt='Resourceful'/>
                </div>
                <div className='basis-2/3'>
                    <h3 className='text-xl leading-[26px] tracking-[5px] uppercase font-medium mb-8'>Resourceful</h3>
                    <p>Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients' needs.</p>
                </div>
            </div>
            <div className='mb-11 md:flex md:gap-9 lg:block'>
                <div className='flex justify-center items-center mb-[43px] basis-1/3'>
                    <Image className='absolute z-0' src={imgBg} alt='Friendly'/>
                    <Image className='z-10 relative' src={img3} alt='Friendly'/>
                </div>
                <div className='basis-2/3'>
                    <h3 className='text-xl leading-[26px] tracking-[5px] uppercase font-medium mb-8'>Friendly</h3>
                    <p>We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.</p>
                </div>
            </div>
        </div>
        <CallToAction />
    </section>
  )
}

export default Skills