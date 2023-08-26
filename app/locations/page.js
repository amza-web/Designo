import React from 'react'
import Image from 'next/image'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import LocationInd from '@/components/LocationInd'
import CallToAction from '@/components/CallToAction'



export default function Locations() {
  const locations = [
    {
      map: <iframe className='h-full w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.199372456166!2d-79.39711432319676!3d43.644020153023696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.   1!3m3!1m2!1s0x882b34d9a0737d9f%3A0xbc1ae74f23fabf4e!2sWellington%20St%20W%2C%20Toronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sng!4v1692235138271!5m2!1sen!2sng" width="600"    allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> ,
      country: "Canada",
      locationTxt: "Designo Central Office",
      address: "3886 Wellington Street Toronto, Ontario M9C 3J5",
      number: "+1 253-863-8967",
      email: "contact@designo.co",
      extraC: "lg:flex-row-reverse"

    },
    {
      map: <iframe className='h-full w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.7582378233155!2d149.7856649766324!3d-30.32939384455096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ba73450a680702d%3A0x44a309bd6607346e!2s19%20Balonne%20St%2C%20Narrabri%20NSW%202390%2C%20Australia!5e0!3m2!1sen!2sng!4v1692235905165!5m2!1sen!2sng" width="600"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> ,
      country: "Australia",
      locationTxt: "Designo AU Office",
      address: "19 Balonne Street New South Wales 2447",
      number: "(02) 6720 9092",
      email: "contact@designo.au",
      extraC: ""
    },
    {
      map: <iframe className='h-full w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4942.107614390691!2d-3.8670497501957533!3d51.73205118226902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e5867a4c5658f%3A0xf837c949fc975d7b!2sRhyd-y-fro%2C%20Pontardawe%2C%20Swansea%2C%20UK!5e0!3m2!1sen!2sng!4v1692236006715!5m2!1sen!2sng" width="600"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> ,
      country: "United Kingdom",
      locationTxt: "Designo UK Office",
      address: "13 Colorado Way Rhyd-y-fro SA8 9GA",
      number: "078 3115 1400",
      email: "contact@designo.uk",
      extraC: "lg:flex-row-reverse"
    }
  ]
  return (
    <>
        <main className='md:mx-16'>
        <Header />
          <section className="mt-0 container">
            {locations.map((location, index) => {
              return (
                <LocationInd key={index} {...location} />
              )
            })}
          </section>
          <div className='px-5 -mb-24 lg:max-w-[1111px] mx-auto'>
            <CallToAction />
          </div>
        </main>
        <Footer />
    </>
  )
}
