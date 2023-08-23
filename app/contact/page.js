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
                <section>

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
