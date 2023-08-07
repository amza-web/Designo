import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ProjectInd from './ProjectInd'

import arrow from "@/app/assets/shared/desktop/icon-right-arrow.svg"
import lgWeb from "@/app/assets/home/desktop/image-web-design-large.jpg"
import web from "@/app/assets/home/mobile/image-web-design.jpg"
import lgApp from "@/app/assets/home/desktop/image-app-design.jpg"
import app from "@/app/assets/home/mobile/image-app-design.jpg"
import lgGraphic from "@/app/assets/home/desktop/image-graphic-design.jpg"
import graphic from "@/app/assets/home/mobile/image-graphic-design.jpg"


const Projects = () => {
    const detailsList = [
        {
            title: 'Web Design',
            web: web,
            lgWeb: lgWeb,
            link: '/web-design'
        },
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
    <section className='container grid-a text-white text-center lg:px-0 mx-auto md:max-w-[25.5rem] lg:max-w-[1111px]'>
        {detailsList.map((details, index) => {
            return (
                <ProjectInd key={index} details={details} />
            )
        }
        )}
    </section>
  )
}

export default Projects