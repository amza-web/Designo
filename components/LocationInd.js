import React from 'react'

const LocationInd = (location) => {
  return (
    <div className={`text-center md:text-left mb-10 md:mb-28 lg:flex lg:gap-[30px] ${location.extraC} lg:mb-7`}>
        <div className='overflow-hidden h-[280px] md:mb-6 md:rounded-2xl lg:basis-[32.4%] lg:mb-0 lg:h-auto'>
            {location.map}
        </div>
        <div className=' pt-20 pb-14 bg-peachlight md:pl-20 md:rounded-2xl lg:basis-[67.6%]'>
            <h3 className='text-[40px] text-peach capitalize mb-6 font-bold'>{location.country}</h3>
            <div className='md:flex md:gap-24'>
                <p className='max-w-[180px] mb-6 mx-auto md:mx-0'>
                    <span className='font-bold md:font-medium'>{location.locationTxt}</span>
                    <br />
                    {location.address}
                </p>
                <p className='max-w-[180px] mb-6 mx-auto md:mx-0 '>
                    <span className='font-bold'>Contact</span>
                    <br />
                    P : {location.number}
                    <br />
                
                    M : {location.email}
                    <br />
                </p>
            </div>
        </div>

    </div>
  )
}

export default LocationInd