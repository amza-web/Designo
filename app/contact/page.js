import Footer from '@/components/Footer'
import Header from '@/components/Header'
import LocationItem from '@/components/LocationItem'


import canada from "@/app/assets/shared/desktop/illustration-canada.svg"
import australia from "@/app/assets/shared/desktop/illustration-australia.svg"
import uk from "@/app/assets/shared/desktop/illustration-united-kingdom.svg"

import React from 'react'
import ContactForm from '@/components/ContactForm'


export default function page () {
    const locations = [
        {
          txt: "Canada",
          img: canada
        },
        {
          txt: "Australia",
          img: australia
        },
        {
          txt: "United Kingdom",
          img: uk
        }
      ]
    return (
        <>
            <main className='md:mx-16 lg:max-w-[1111px] lg:mx-auto'>
                <Header />
                <section className='mt-0 bg-peach px-10 py-[4.5rem] md:px-[58px] md:py-[71px] lg:py-14 lg:px-20 md:rounded-2xl lg:flex lg:items-center lg:gap-16'>
                    <div className='text-center md:text-left text-white lg:basis-1/2'>
                        <h1 className='text-[32px] mb-8 md:text-5xl'>Contact Us</h1>
                        <p>
                            Ready to take it to the next level? Let's talk about your project or idea and find out how we can help your
                            business grow. If you are looking for unique digital experiences that's relatable to your users, drop us a
                            line.
                        </p>
                    </div>
                    <ContactForm />
                </section>
                <section className='lg:flex'>
                    {locations.map((location, index) => (
                        <LocationItem key={index} img={location.img} txt={location.txt} />
                    ))}
                </section>
            </main>
            <Footer />
        
        </>
    )
}
