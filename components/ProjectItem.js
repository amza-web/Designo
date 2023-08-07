import React from 'react'
import Image from 'next/image'

const ProjectItem = ({project}) => {
  return (
    <li className='rounded-2xl bg-[#fdf3f0] hover:bg-peach mx-auto overflow-hidden group transition-colors duration-300'>
        <div>
            <Image className='w-full h-80' src={project.img} />
        </div>
        <div className='p-8 group-hover:text-white'>
            <h4 className='text-peach group-hover:text-white text-xl tracking-[5px] uppercase font-medium pb-4'>{project.title}</h4>
            <p>{project.desc}</p>
        </div>
    </li>
  )
}

export default ProjectItem