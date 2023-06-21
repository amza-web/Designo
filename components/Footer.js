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
    <footer className='container bg-[#1d1c1e]'>
        <div>
            <Image src={logo} />
            <ul>
                <li><Link href="#" >Our company</Link></li>
                <li><Link href="#" >Locations</Link></li>
                <li><Link href="#" >Contact</Link></li>
            </ul>
        </div>
        <div>
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
                <ul>
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