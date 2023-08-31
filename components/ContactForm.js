'use client'
import React, { useState } from 'react'
import { useRef } from 'react'

const ContactForm = () => {
    const [submitSuccess, setsubmitSuccess] = useState(false) 

    const formRef = useRef()
    const nameRef = useRef()
    const messaeRef = useRef()
    const emailRef = useRef()
    const phoneRef = useRef()
    const inpList = [nameRef, messaeRef, emailRef, phoneRef]

    const submitHandler = (e) => {
    
        e.preventDefault()
        for (let i = 0; i < inpList.length; i++){
            if (inpList[i].current.checkValidity()){
                inpList[i].current.nextElementSibling.classList.add('hidden')
                console.log("valid")
            } else {
                inpList[i].current.nextElementSibling.classList.remove('hidden')
                setsubmitSuccess(false)
                return

            }
        }

    
        
    }
    return (
        <>
            <form className='contact-form mt-10 ' ref={formRef} action="POST">
                <div className='flex flex-col gap-12'>
                    <div className='relative'>
                        <input type="text" name="name" id='name' ref={nameRef} placeholder='Name' required/>
                        <span className='text-white hidden absolute top-0 right-0'>Can't be empty</span>
                    </div>
                    <div className='relative'>
                        <input type="email" name="email" id="email" ref={emailRef} placeholder='Email Address'  required/>
                        <span className='text-white hidden absolute top-0 right-0'>Isn't valid</span>
                    </div>
                    <div className='relative'>
                        <input type="tel" name="phone" id="phone" ref={phoneRef} placeholder='Phone'  required/>
                        <span className='text-white hidden absolute top-0 right-0'>Isn't valid</span>
                    </div>
                    <div className='relative'>
                        <textarea name="message" id="message" rows="3" ref={messaeRef} placeholder='Your Message' required></textarea>
                        <span className='text-white hidden absolute top-0 right-0'>Can't be empty</span>
                    </div>
                </div>

                <div className='flex justify-end'>
                    <button onClick={submitHandler} className='py-4 px-12 font-medium mt-7 uppercase bg-white rounded-lg tracking-[1px] hover:bg-[#ffad9b] hover:text-white transition-all duration-300 ' type="submit">Submit</button>
                </div>
            </form>
        </>
    )
}

export default ContactForm