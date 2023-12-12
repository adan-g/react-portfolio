import React, { useEffect } from 'react'
import { RiCloseLine, RiExpandUpDownFill, RiSubtractLine } from "react-icons/ri";
import imgFace from '../img/imgAdan.jpg'
import Typewriter from 'typewriter-effect';


const About = () => {
  return (
    <section id={'about'} className='lg:h-[90vh] grid grid-cols-1 lg:grid-cols-8'>
      <div className='lg:col-span-5 flex justify-center items-center'>
        <div
          className='bg-black12 text-slate-200 border-greenA6 border shadow-md shadow-greenA6 lg:w-4/5 lg:h-3/5 w-11/12 rounded-lg my-10' data-aos='zoom-in' data-aos-duration="1000">
          <div className='bg-[#2B2A29] flex items-center space-x-2 pl-2 h-6 rounded-t-lg'>
            <span className='bg-[#FF605C] text-[#860002] rounded-full h-3 w-3 flex items-center justify-center'>
              <RiCloseLine />
            </span>
            <span className='bg-[#FFBD44] text-[#A15C0D] rounded-full h-3 w-3 flex items-center justify-center'>
              <RiSubtractLine />
            </span>
            <span className='bg-[#00CA4E] text-[#0B5001] rounded-full h-3 w-3 flex items-center justify-center -rotate-45'>
              <RiExpandUpDownFill />
            </span>
          </div>

          <p className='px-2'>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('/Users: Adan Gimenez')
                  .start();
              }}
            />

            <p className='my-4'>I consider myself a ppasionate person about tecnology i think we can do great things with it and to improve our environment if we put it to good use. I like to support new ideas because i know they can have a great result, i'm the kind of person that when i do something i try to do my best. It's been a little over 7 years that I've been programmed.</p>
              
            <p>I had my first interaction with programming in high school with the programming language "Basic" with this language we are simulating the function of an ATM, a few months later we saw several classes with Visual Basic 6.0 with this we were programming a simple game. In my first job related to the world of computing and programming, I had the opportunity to learn Visual Basic .NET and database management, some time later I was working with the PHP language, delving deeper into the web world.</p>
          </p>
        </div>
      </div>
      <div className='lg:col-span-3 flex justify-center items-center' data-aos="fade-left" data-aos-duration="1000">
        <img src={imgFace} alt="img react" className='rounded-full object-cover lg:w-96 h-96 w-11/12' />
      </div>
    </section >
  )
}

export default About