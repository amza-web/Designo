'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


import arrow from "@/app/assets/shared/desktop/icon-right-arrow.svg"

const ProjectInd = ({details}) => {
  const router = useRouter()
  return (
    <div onClick={() => router.push(details.link)} className='text-white flex justify-center items-center text-center grid-web relative  group rounded-[15px] overflow-hidden md:h-52 lg:h-72'>
        <div className='bg-black absolute w-full h-full bg-opacity-50 transition-colors duration-500 group-hover:bg-peach group-hover:bg-opacity-50'></div>
        
        <Image className='w-full hidden md:block' src={details.lgWeb} alt='Web'/> 
        <Image className='w-full md:hidden' src={details.web} alt='Web' />
        
        <div className='absolute uppercase'>
            <h2 className='text-[28px] leading-9 mb-7 md:text-[40px] tracking-[1.4px] md:tracking-[2px]'>{details.title}</h2>
            <Link className='inline-flex justify-center items-center gap-4  tracking-[5px] text-[15px] font-medium' href={details.link}>View Projects <Image height={10} src={arrow} alt='arrow' /></Link>
        </div>

    </div>
  )
}

export default ProjectInd