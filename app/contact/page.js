import Footer from '@/components/Footer'
import Header from '@/components/Header'
import LocationItem from '@/components/LocationItem'


import canada from "@/app/assets/shared/desktop/illustration-canada.svg"
import australia from "@/app/assets/shared/desktop/illustration-australia.svg"
import uk from "@/app/assets/shared/desktop/illustration-united-kingdom.svg"

import React from 'react'


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
            <main>
                <Header />
                <section className='mt-0 bg-peach px-8 py-[4.5rem]'>
                    <div className='text-center text-white'>
                        <h1 className='text-[32px] mb-8'>Contact Us</h1>
                        <p>
                            Ready to take it to the next level? Let's talk about your project or idea and find out how we can help your
                            business grow. If you are looking for unique digital experiences that's relatable to your users, drop us a
                            line.
                        </p>
                    </div>
                    <form className='contact-form mt-10' action="POST">
                        <div className='mb-14'>
                            <input type="text" name="name" id='name' placeholder='Name'/>
                        </div>
                        <div className='mb-14'>
                            <input type="email" name="email" id="email" placeholder='Email Address' />
                        </div>
                        <div className='mb-14'>
                            <input type="text" name="phone" id="phone" placeholder='Phone' />
                        </div>
                        <div>
                            <textarea name="message" id="message" rows="10" placeholder='Your Message'></textarea>
                        </div>

                        <button type="submit">Submit</button>
                    </form>
                </section>
                <section>
                    {locations.map((location, index) => (
                        <LocationItem key={index} img={location.img} txt={location.txt} />
                    ))}
                </section>
            </main>
            <Footer />
        
        </>
    )
}
