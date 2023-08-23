import Navigation from '@/components/Navigation'
import ProjectItem from '@/components/ProjectItem'
import ProjectInd from '@/components/ProjectInd'
import React from 'react'
import Image from 'next/image'

import express from "@/app/assets/web-design/desktop/image-express.jpg"
import transfer from "@/app/assets/web-design/desktop/image-transfer.jpg"
import photon from "@/app/assets/web-design/desktop/image-photon.jpg"
import builder from "@/app/assets/web-design/desktop/image-builder.jpg"
import blogr from "@/app/assets/web-design/desktop/image-blogr.jpg"
import camp from "@/app/assets/web-design/desktop/image-camp.jpg"

import bgPattern from "@/app/assets/shared/desktop/bg-pattern-call-to-action.svg"
import app from "@/app/assets/home/mobile/image-app-design.jpg"
import lgApp from "@/app/assets/home/desktop/image-app-design.jpg"
import graphic from "@/app/assets/home/mobile/image-graphic-design.jpg"
import lgGraphic from "@/app/assets/home/desktop/image-graphic-design.jpg"
import CallToAction from '@/components/CallToAction'
import Footer from '@/components/Footer'

const WebDesign = () => {
    const projects = [
        {
            title: 'Express',
            desc: 'A multi-carrier shipping website for ecommerce businesses',
            img: express
        },
        {
            title: 'Transfer',
            desc: 'Site for low-cost money transfers and sending money within seconds',
            img: transfer
        },
        {
            title: 'Photon',
            desc: 'A state-of-the-art music player with high-resolution audio and DSP effects',
            img: photon
        },
        {
            title: 'Builder',
            desc: 'Connects users with local contractors based on their location',
            img: builder
        },
        {
            title: 'Blogr',
            desc: 'Blogr is a platform for creating an online blog or publication',
            img: blogr
        },
        {
            title: 'Camp',
            desc: 'Get expert training in coding, data, design, and digital marketing',
            img: camp
        }


    ]
    const detailsList = [
        {
            title: 'App Design',
            web: app,
            lgWeb: lgApp,
            link: '/app-design'
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

export default WebDesign