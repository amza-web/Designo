import React from 'react'
import Image from 'next/image'

const ProjectItem = ({project}) => {
  return (
    <li className='rounded-2xl bg-[#fdf3f0] hover:bg-peach mx-auto overflow-hidden group transition-colors duration-300 md:flex md:h-[310px] w-full lg:block lg:h-auto'>
        <div className='overflow-hidden basis-1/2'>
            <Image className='w-full h-full' src={project.img} />
        </div>
        <div className='p-8 group-hover:text-white md:px-10 flex flex-col justify-center items-center basis-1/2'>
            <h4 className='text-peach group-hover:text-white text-xl tracking-[5px] uppercase font-medium pb-4'>{project.title}</h4>
            <p>{project.desc}</p>
        </div>
    </li>
  )
}

export default ProjectItem