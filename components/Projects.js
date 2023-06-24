import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import arrow from "@/app/assets/shared/desktop/icon-right-arrow.svg"
import lgWeb from "@/app/assets/home/desktop/image-web-design-large.jpg"
import web from "@/app/assets/home/mobile/image-web-design.jpg"
import lgApp from "@/app/assets/home/desktop/image-app-design.jpg"
import app from "@/app/assets/home/mobile/image-app-design.jpg"
import lgGraphic from "@/app/assets/home/desktop/image-graphic-design.jpg"
import graphic from "@/app/assets/home/mobile/image-graphic-design.jpg"


const Projects = () => {
  return (
    <section className='container grid-a text-white text-center lg:px-0 mx-auto md:max-w-[25.5rem]'>
        <div className='flex justify-center items-center grid-web relative  group rounded-[15px] overflow-hidden'>
            <div className='bg-black absolute w-full h-full bg-opacity-50 transition-colors duration-500 group-hover:bg-peach group-hover:bg-opacity-50'></div>
            
            <Image className='w-full hidden lg:block' src={lgWeb} alt='Web'/> 
            <Image className='w-full lg:hidden' src={web} alt='Web' />
            
            <div className='absolute uppercase'>
                <h2 className='text-[28px] leading-9 mb-7 lg:text-[40px] tracking-[1.4px] lg:tracking-[2px]'>Web Design</h2>
                <Link className='inline-flex justify-center items-center gap-4  tracking-[5px] text-[15px] font-medium' href={"#"}>View Projects <Image height={10} src={arrow} /></Link>
            </div>

        </div>
        <div className='flex justify-center items-center grid-app relative group rounded-[15px] overflow-hidden'>
            <div className='bg-black absolute w-full h-full bg-opacity-50 transition-colors duration-500 group-hover:bg-peach group-hover:bg-opacity-50'></div>
            
            <Image className='w-full hidden lg:block' src={lgApp} alt='App' />
            <Image className='w-full lg:hidden' src={app} alt='App' />
            
            <div className='absolute uppercase'>
                <h2 className='text-[28px] leading-9 mb-7 lg:text-[40px] tracking-[1.4px] lg:tracking-[2px]'>App Design</h2>
                <Link className='inline-flex justify-center items-center gap-4  tracking-[5px] text-[15px] font-medium' href={"#"}>View Projects <Image height={10} src={arrow} /></Link>
            </div>

        </div>
        <div className='flex justify-center items-center grid-graphic relative group rounded-[15px] overflow-hidden'>
            <div className='bg-black absolute w-full h-full bg-opacity-50 transition-colors duration-500 group-hover:bg-peach group-hover:bg-opacity-50'></div>
            
            <Image className='w-full hidden lg:block'  src={lgGraphic} alt='Graphic' />
            <Image className='w-full lg:hidden' src={graphic} alt='Graphic' />
            
            <div className='absolute uppercase'>
                <h2 className='text-[28px] leading-9 mb-7 lg:text-[40px] tracking-[1.4px] lg:tracking-[2px]'>Graphic Design</h2>
                <Link className='inline-flex justify-center items-center gap-4  tracking-[5px] text-[15px] font-medium' href={"#"}>View Projects <Image height={10} src={arrow} /></Link>
            </div>

        </div>

    </section>
  )
}

export default Projects