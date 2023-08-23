import React from 'react'
import Link from 'next/link'

const CallToAction = () => {
  return (
    <div className='relative z-10 bg-peach text-white text-center flex justify-center items-center px-[27px] md:px-6 py-16 lg:py-[72px] lg:px-24 rounded-[15px]'>
        <div className='lg:flex lg:justify-between lg:w-full lg:items-center'>
            <div className='lg:text-left md:max-w-md'>
              <h1 className='md:text-[40px] lg:max-w-[270px]'>Let's talk about your project</h1>
              <p> Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
            </div>
            <Link className='inline-block btn mt-8 h-min lg:mt-0' href="/contact">Get in touch</Link>
        </div>
    </div>
  )
}

export default CallToAction