import Navigation from '@/components/Navigation'
import ProjectItem from '@/components/ProjectItem'
import ProjectInd from '@/components/ProjectInd'
import React from 'react'
import Image from 'next/image'

import change from "@/app/assets/graphic-design/desktop/image-change.jpg"
import boxed from "@/app/assets/graphic-design/desktop/image-boxed-water.jpg"
import science from "@/app/assets/graphic-design/desktop/image-science.jpg"

import bgPattern from "@/app/assets/shared/desktop/bg-pattern-call-to-action.svg"
import web from "@/app/assets/home/mobile/image-web-design.jpg"
import lgWeb from "@/app/assets/home/desktop/image-web-design-large.jpg"
import app from "@/app/assets/home/mobile/image-app-design.jpg"
import lgApp from "@/app/assets/home/desktop/image-app-design.jpg"
import CallToAction from '@/components/CallToAction'
import Footer from '@/components/Footer'

const GraphicDesign = () => {
    const projects = [
        {
            title: "Change",
            desc: "A picture of a book with the title 'Change' on it",
            img: change
        },
        {
            title: "Boxed Water",
            desc: "A picture of a box of water",
            img: boxed
        },
        {
            title: "Science!",
            desc: "A picture of a book with the title 'Science!' on it",
            img: science
        }


    ]
    const detailsList = [
        {
            title: 'WebDesign',
            web: web,
            lgWeb: lgWeb,
            link: '/web-design'
        },
        {
            title: 'App Design',
            web: app,
            lgWeb: lgApp,
            link: '/app-design'
        }
    ]
  return (
    <>
    <main className='md:mx-16'> 
        <Navigation />
        <header className='container bg-peach text-center text-white px-10 md:py-16 py-[105px] overflow-hidden relative md:rounded-2xl'>
            <h1 className='md:text-5xl '>Web Design</h1>
            <p className='text-[15px] mx-auto'>
                We build websites that serve as powerful marketing tools <br className='hidden md:inline' />and bring memorable brand experiences.  
            </p>
            <Image className='w-[876px] h-[584px] hidden absolute right-0 top-[-170px] rotate-180 -scale-x-100- md:block' src={bgPattern} alt='Background Pattern' />
        </header>
        <section className='flex my-24 max-w-[1111px] mx-auto'>
            <ul className='inline-flex flex-col gap-10 mx-auto max-w-[330px] md:max-w-none text-center lg:grid lg:grid-cols-3'>
                {projects.map((project, index) => {
                    return (
                        <ProjectItem key={index} project={project} />
                    )
                })}
            </ul>
        </section>
        <section className='max-w-[330px] md:max-w-none lg:max-w-[1111px] mx-auto flex flex-col gap-8 -mb-24 lg:-mb-20'>
            <div className='flex flex-col lg:flex-row lg:gap-8 '>
                {detailsList.map((details, index) => {
                    return (
                        <ProjectInd key={index} details={details} />
                    )
                }
                )}
            </div>
            <div className='pt-20'>
                <CallToAction />
            </div>
        </section>
    </main>
    <Footer />
    </>
  )
}

export default GraphicDesign