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
    <main>
        <Navigation />
        <header className='container bg-peach text-center text-white px-10 py-[105px]'>
            <h1 className=' '>Web Design</h1>
            <p className='text-[15px]'>
                We build websites that serve as powerful marketing tools and bring memorable brand experiences.  
            </p>
        </header>
        <section className='flex my-24'>
            <ul className='inline-flex flex-col gap-10 mx-auto max-w-[330px] text-center'>
                {projects.map((project, index) => {
                    return (
                        <ProjectItem key={index} project={project} />
                    )
                })}
            </ul>
        </section>
        <section className='max-w-[330px] mx-auto flex flex-col gap-8 -mb-24 lg:-mb-20 '>
            {detailsList.map((details, index) => {
                return (
                    <ProjectInd key={index} details={details} />
                )
            }
            )}
            <div className='pt-20'>
                <CallToAction />
            </div>
        </section>
        <Footer />
    </main>
    
  )
}

export default WebDesign