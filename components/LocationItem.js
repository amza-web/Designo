'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import bg from "@/app/assets/shared/desktop/bg-pattern-small-circle.svg"

const LocationItem = ({img, txt}) => {
    const router = useRouter() 
  return (
    <div className='flex flex-col items-center mb-12 lg:basis-1/3'>
        <div className='relative mb-10'>
            <Image className='absolute' src={bg} alt='bg'/>
            <Image src={img} alt='bg'/>

        </div>
        <h3 className='uppercase text-xl tracking-[5px] mb-8 font-medium'>{txt}</h3>
        <button className='inline-block btn h-min mt-0 bg-peach text-white font-medium' onClick={()=>{router.push("/locations")}}>See Location</button>
    </div>
  )
}

export default LocationItem