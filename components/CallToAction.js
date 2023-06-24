import React from 'react'
import Link from 'next/link'

const CallToAction = () => {
  return (
    <div className='relative z-10 bg-peach text-white text-center flex justify-center items-center px-[27px] md:px-6 py-16 rounded-[15px]'>
        <div>
            <h1>Let&apos;'s talk about your project</h1>
            <p> Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
            <Link className='inline-block btn mt-8' href="#">Get in touch</Link>
        </div>
    </div>
  )
}

export default CallToAction