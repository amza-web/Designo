'use client'
import React, { useState } from 'react'
import img from '@/app/assets/shared/desktop/logo-dark.png'
import Image from 'next/image'
import Link from 'next/link'

import harmburger from "@/app/assets/shared/mobile/icon-hamburger.svg"

import close from "@/app/assets/shared/mobile/icon-close.svg"

const Navigation = () => {  
    const [isOpen, setisOpen] = useState(false)
    function toggleMenu(e){
        setisOpen(!isOpen)
        document.querySelector(".menu-mob").classList.toggle("translate-x-[0]");       

    }
  return (
    <>
    <div className='container md:py-16 flex justify-between py-9 items-center px-6 lg:px-0'>
        <div>
            <Link className={isOpen ? "z-30 fixed" : "" } href="/"><Image className='max-h-6 lg:w-48' src={img} alt="Logo  " /></Link>
        </div> 
        <button className={isOpen ? "z-30 fixed right-6 top-9 md:hidden lg:hidden": "z-20 md:hidden lg:hidden top-9" } onClick={toggleMenu}>
            
            
            <Image className={isOpen ? "" : "hidden" } src={close} alt='Close Button' />
            
            <Image className={isOpen ? "hidden" : "" } src={harmburger} alt='Menu Button' />
            
            
        </button>
        <nav className=' text-sm hidden md:block lg:block'>
            <ul className='flex gap-10 uppercase leading-3.5 tracking-2'>
                <li><Link href="/about">Our Company</Link></li>
                <li><Link href="/locations">Locations</Link></li>
                <li><Link href="/contact">Contact</Link></li>    
            </ul>
        </nav>
    </div>
    <nav className='menu-mob lg:hidden h-screen fixed top-0 w-full bg-white z-20 p-10 flex items-center -translate-x-[120%] transition-transform duration-300'>
        <ul className='flex flex-col gap-5 text-lg w-full'>
            <li><Link className='inline-block w-full' href="/about">Our Company</Link></li>
            <li><Link className='inline-block w-full' href="/locations">Locations</Link></li>
            <li><Link className='inline-block w-full' href="/contact">Contact</Link></li>    
        </ul>
    </nav>
    </>
  )
}

export default Navigation