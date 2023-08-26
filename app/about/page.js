import React from 'react'
import Image from 'next/image'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import CallToAction from '@/components/CallToAction'

import about from '@/app/assets/about/desktop/image-about-hero.jpg'
import aboutT from '@/app/assets/about/tablet/image-about-hero.jpg'
import talent from '@/app/assets/about/desktop/image-world-class-talent.jpg'
import talentT from '@/app/assets/about/tablet/image-world-class-talent.jpg'
import canada from "@/app/assets/shared/desktop/illustration-canada.svg"
import australia from "@/app/assets/shared/desktop/illustration-australia.svg"
import uk from "@/app/assets/shared/desktop/illustration-united-kingdom.svg"
import deal from "@/app/assets/about/desktop/image-real-deal.jpg"
import dealT from "@/app/assets/about/tablet/image-real-deal.jpg"

import LocationItem from '@/components/LocationItem'

export default function Home() {
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
      <main className='md:mx-16  lg:max-w-[1111px] lg:mx-auto'>
        <Header />
          <section className='m-0'>
            <div className='md:overflow-hidden md:rounded-2xl lg:flex lg:flex-row-reverse md:mb-[120px] lg:min-h-[480px]'>
              <div className='overflow-hidden h-80 lg:h-auto basis-5/12'>
                <Image className='object-cover w-full md:hidden lg:block lg:h-full' src={about} alt='about' />
                <Image className='object-cover w-full hidden md:block lg:hidden' src={aboutT} alt='about' />
              </div>
              <div className=' bg-peach text-white py-20 md:pt-12 px-7 text-center lg:text-left basis-7/12  lg:px-28 lg:pr-20 lg:py-20 lg:flex lg:flex-col lg:justify-center'>
                <h1 className='md:text-5xl lg:mb-8'>About Us</h1>
                <p className='text-[15px] md:px-7 lg:px-0'>
                Founded in 2010, we are a creative agency that produces lasting results for
                our clients. We've partnered with many startups, corporations, and nonprofits alike to craft designs
                that make real impact. We're always looking forward to creating brands, products, and
                digital experiences that connect with our clients' audiences.
                </p>
              </div>
            </div>


            <div className='md:overflow-hidden md:rounded-2xl lg:flex md:mb-[120px] lg:min-h-[640px]'>
              <div className='overflow-hidden h-80 lg:h-auto basis-5/12'>
                <Image className='object-cover w-full md:hidden lg:block lg:h-full' src={talent} alt='World class talent' />
                <Image className='object-cover w-full hidden md:block lg:hidden' src={talentT} alt='World class talent' />
              </div>
              <div className='bg-peachlight py-20 md:pt-12 px-7 text-center lg:text-left basis-7/12  lg:px-28 lg:pr-20 lg:py-20 lg:flex lg:flex-col lg:justify-center'>
                <h1 className='text-peach md:text-[40px]'> World-class talent</h1>
                <p className='text-[15px] md:px-7 lg:px-0'>
                We are a crew of strategists, problem-solvers, and technologists. Every
                design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are
                constantly updating our skills in a myriad of platforms.
                <br />
                <br />
            
                Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as
                important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always
                been impressed with our high-quality outcomes that encapsulates their brand's story and mission.
            
                </p>
              </div>
            </div>


          </section>

          <section className='mb-14 lg:max-w-[1111px] lg:mx-auto'>
            <div className='lg:flex lg:mb-[120px]'>
              {locations.map((location, index) => (
                <LocationItem key={index} img={location.img} txt={location.txt} />
                ))}            
            </div>
            <div className='md:overflow-hidden md:rounded-2xl lg:flex lg:flex-row-reverse md:mb-[120px] lg:min-h-[480px]'>
              <div className='overflow-hidden h-80 lg:h-auto basis-5/12'>
                <Image className='object-cover w-full md:hidden lg:block lg:h-full' src={deal} alt='World class talent' />
                <Image className='object-cover w-full hidden md:block lg:hidden' src={dealT} alt='World class talent' />
              </div>
              <div className='bg-peachlight py-20 px-7 text-center lg:text-left basis-7/12  lg:px-28 lg:pr-20 lg:py-20 lg:flex lg:flex-col lg:justify-center'>
                <h1 className='text-peach md:text-[40px]'> The real deal</h1>
                <p className='text-[15px] md:px-7 lg:px-0'>
                As strategic partners in our clients' businesses, we are ready to take on
                any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring
                a fresh perspective to every opportunity. We make design and technology more accessible and give you tools
                to measure success.

                
                <br />
                <br />
                We are visual storytellers in appealing and captivating ways. By combining business and marketing
                strategies, we inspire audiences to take action and drive real results.
            
                </p>
              </div>
            </div>
          </section>
          <div className='px-8 md:px-0 -mb-24'>
            <CallToAction />
          </div>
      </main>
      <Footer />
      </>
    )
  }