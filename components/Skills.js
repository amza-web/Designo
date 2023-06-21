import React from 'react'
import Image from 'next/image'

import img1 from "@/app/assets/home/desktop/illustration-passionate.svg"
import img2 from "@/app/assets/home/desktop/illustration-resourceful.svg"
import img3 from "@/app/assets/home/desktop/illustration-friendly.svg"
import imgBg from "@/app/assets/shared/desktop/bg-pattern-small-circle.svg"
import CallToAction from './CallToAction'


const Skills = () => {
  return (
    <section className='container flex flex-col relative text-center'>
        <div className='mb-11'>
            <div className='flex justify-center items-center mb-[43px]'>
                <Image className='absolute z-0' src={imgBg} />
                <Image className='z-10 relative' src={img1} />
            </div>
            <div>
                <h3 className='text-xl leading-[26px] tracking-[5px] uppercase font-medium mb-8'>Passionate</h3>
                <p>Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.</p>
            </div>
        </div>
        <div className='mb-11'>
            <div className='flex justify-center items-center mb-[43px]'>
                <Image className='absolute z-0' src={imgBg} />
                <Image className='z-10 relative' src={img2} />
            </div>
            <div>
                <h3 className='text-xl leading-[26px] tracking-[5px] uppercase font-medium mb-8'>Passionate</h3>
                <p>Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.</p>
            </div>
        </div>
        <div className='mb-11'>
            <div className='flex justify-center items-center mb-[43px]'>
                <Image className='absolute z-0' src={imgBg} />
                <Image className='z-10 relative' src={img3} />
            </div>
            <div>
                <h3 className='text-xl leading-[26px] tracking-[5px] uppercase font-medium mb-8'>Passionate</h3>
                <p>Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.</p>
            </div>
        </div>
        <CallToAction />
    </section>
  )
}

export default Skills