import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


import logo from "@/app/assets/shared/desktop/logo-light.png"
import facebook from "@/app/assets/shared/desktop/icon-facebook.svg"
import youtube from "@/app/assets/shared/desktop/icon-youtube.svg"
import twitter from "@/app/assets/shared/desktop/icon-twitter.svg"
import pinterest from "@/app/assets/shared/desktop/icon-pinterest.svg"
import instagram from "@/app/assets/shared/desktop/icon-instagram.svg"


const Footer = () => {
  return (
    <footer className='relative z-0 container bg-[#1d1c1e] py-36 text-white'>
        <div className='text-center flex flex-col items-center uppercase text-sm leading-[15px] tracking-[2px] gap-14 mb-10'>
            <Image src={logo} />
            <ul>
                <li className='mt-7'><Link href="#" >Our company</Link></li>
                <li className='mt-7'><Link href="#" >Locations</Link></li>
                <li className='mt-7'><Link href="#" >Contact</Link></li>
            </ul>
        </div>
        <div className='text-[#8f8e8e] flex flex-col gap-10 items-center text-center'>
            <div>
                <p>Designo Central Office<br />
              <span>3886 Wellington Street<br />
                Toronto, Ontario M9C 3J5</span></p>
            </div>
            <div>
                <p>
                    Contact Us (Central Office)<br />
                    P : +1 253-863-8967<br />
                    M : contact@designo.com
                </p>
            </div>
            <div>
                <ul className='flex gap-4 mt-5'>
                    <li>
                        <Link href="#">
                            <Image src={facebook} />
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <Image src={youtube} />
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <Image src={twitter} />
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <Image src={pinterest} />
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <Image src={instagram} />
                        </Link>
                    </li>

                </ul>
            </div>
        </div>

        
    </footer>
  )
}

export default Footer