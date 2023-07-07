import React from 'react'
import Image from 'next/image'

const ProjectItem = ({project}) => {
  return (
    <li className='rounded-[15px] bg-[#fdf3f0] mx-auto'>
        <div className=''>
            <Image className='w-full h-full' src={project.img} />
        </div>
        <div>
            <h4>{project.title}</h4>
            <p>{project.desc}</p>
        </div>
    </li>
  )
}

export default ProjectItem