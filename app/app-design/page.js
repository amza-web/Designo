import Navigation from '@/components/Navigation'
import ProjectItem from '@/components/ProjectItem'
import ProjectInd from '@/components/ProjectInd'
import React from 'react'
import Image from 'next/image'

import airfilter from "@/app/assets/app-design/desktop/image-airfilter.jpg"
import eyecam from "@/app/assets/app-design/desktop/image-eyecam.jpg"
import faceit from "@/app/assets/app-design/desktop/image-faceit.jpg"
import todo from "@/app/assets/app-design/desktop/image-todo.jpg"
import loopstudios from "@/app/assets/app-design/desktop/image-loopstudios.jpg"

import bgPattern from "@/app/assets/shared/desktop/bg-pattern-call-to-action.svg"
import web from "@/app/assets/home/mobile/image-web-design.jpg"
import lgWeb from "@/app/assets/home/desktop/image-web-design-large.jpg"
import graphic from "@/app/assets/home/mobile/image-graphic-design.jpg"
import lgGraphic from "@/app/assets/home/desktop/image-graphic-design.jpg"
import CallToAction from '@/components/CallToAction'
import Footer from '@/components/Footer'

const AppDesign = () => {
    const projects = [
        {
            title: 'Airfilter',
            desc: 'Solving the problem of poor indoor air quality by filtering the air',
            img: airfilter
        },
        {
            title: 'Eyecam',
            desc: 'Product that lets you edit your favorite photos and videos at any time',
            img: eyecam
        },
        {
            title: 'Faceit',
            desc: 'Get to meet your favorite internet superstar with the faceit app',
            img: faceit
        },
        {
            title: 'Todo',
            desc: 'A todo app that features cloud sync with light and dark mode',
            img: todo
        },
        {
            title: 'Loopstudios',
            desc: 'A VR experience app made for Loopstudios',
            img: loopstudios
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
            title: 'Graphic Design',
            web: graphic,
            lgWeb: lgGraphic,
            link: '/graphic-design'
        }
    ]
  return (
    <>
    <main className='md:mx-16'> 
        <Navigation />
        <header className='container bg-peach text-center text-white px-10 md:py-16 py-[105px] overflow-hidden relative md:rounded-2xl'>
            <h1 className='md:text-5xl '>App Design</h1>
            <p className='text-[15px] mx-auto'>
                Our mobile designs bring intuitive digital solutions <br className='hidden md:inline' />  to your customers right at their fingertips.  
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

export default AppDesign