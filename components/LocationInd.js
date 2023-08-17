import React from 'react'

const LocationInd = (location) => {
  return (
    <div className='text-center bg-peachlight pt-20 pb-14'>
        <div className='overflow-hidden h-[280px]'>
            {location.map}
        </div>
        <h3 className='text-5xl text-peach capitalize mb-6'>{location.country}</h3>
        <p className='max-w-[180px] mb-6 mx-auto'>
            <span className='font-bold'>{location.locationTxt}</span>
            <br />
            {location.address}
        </p>
        <p className='max-w-[180px] mb-6 mx-auto '>
            <span className='font-bold'>Contact</span>
            <br />
            P : {location.number}
            <br />
            
            M : {location.email}
            <br />
        </p>

    </div>
  )
}

export default LocationInd