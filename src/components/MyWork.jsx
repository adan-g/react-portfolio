import React, { useEffect } from 'react'
import imgUpTask from '../img/portfolio/imgUpTask.png'
import imgVet from '../img/portfolio/imgVet.png'
import { RiGithubFill } from "react-icons/ri";
import { RiExternalLinkLine } from "react-icons/ri";
import { RiArrowDropRightFill } from "react-icons/ri";


const MyWork = () => {
  return (
    <section id={'mywork'} className='mx-7'>
      <h1 className='lg:text-[9rem] text-[7rem] text-center text-black12 font-semibold my-24' style={{ '-webkit-text-stroke-width': '2px', '-webkit-text-stroke-color': '#93B1A6', 'text-shadow': '#93B1A6 1px 0 20px' }}>
        MY WORK
      </h1>

      <div className='flex flex-col lg:flex-row bg-black12 border-greenA6 border rounded-lg shadow-md shadow-greenA6 mb-24 lg:h-96'>
        <div className='w-auto lg:w-3/5 lg:h-80 flex flex-col justify-between my-4 mx-2'>
          <p className='text-greenA6 mb-4'>
            <h1 className='text-3xl mb-4 font-extrabold text-center lg:text-left'>TASK MANAGER</h1>
            <p className='mb-4'>
              Web system to manage all the tasks you may have during the day or even manage a project with different people.
            </p>
            <span className='flex items-center'>
              <RiArrowDropRightFill className='text-4xl fill-[#03FFFF]' /> MERN Stack
            </span>
            <span className='flex items-center'>
              <RiArrowDropRightFill className='text-4xl fill-[#03FFFF]' /> React, TailwindCSS
            </span>
            <span className='flex items-center'>
              <RiArrowDropRightFill className='text-4xl fill-[#03FFFF]' /> Headless UI, Context API, Socket IO
            </span>
          </p>
          <div className='pb-4 text-center flex flex-col lg:flex-row justify-center'>
            <a
              href='https://github.com/adan-g/MERN_UpTask_frontend'
              target='_blank'
              className='text-white text-center border border-greenA6 w-full lg:w-2/6 box-border p-2 mr-4 lg:mb-0 mb-4 flex justify-center items-center hover:bg-green3d hover:border-green3d hover:duration-700'>
              <RiGithubFill className='mr-4 fill-[#03FFFF]' /> <span>Git-hub</span>
            </a>

            <a
              href='https://tiny-croissant-194dd7.netlify.app/'
              target='_blank'
              className='text-white text-center border border-greenA6 w-full lg:w-2/6 box-border p-2 flex justify-center items-center hover:bg-green3d hover:border-green3d hover:duration-700'>
              <RiExternalLinkLine className='mr-4 fill-[#03FFFF]' /> View web site
            </a>
          </div>
        </div>

        <div className='lg:w-2/5 w-full'>
          <img src={imgUpTask} className='w-full h-full object-cover lg:rounded-r-lg lg:rounded-l-none rounded-b-lg' />
        </div>
      </div>

      <div className='flex flex-col lg:flex-row bg-black12 border-greenA6 border rounded-lg shadow-md shadow-greenA6 mb-24 lg:h-96'>
        <div className='w-auto lg:w-3/5 lg:h-80 flex flex-col justify-between my-4 mx-2'>
          <p className='text-greenA6 mb-4'>
            <h1 className='text-3xl mb-4 font-extrabold text-center lg:text-left'>VET APPOINTMENTS</h1>
            <p className='mb-4'>
              web system to book an appointment for your pet, you will be able to see a list of patients where more details about your pet and its symptoms will appear.
            </p>
            <span className='flex items-center'>
              <RiArrowDropRightFill className='text-4xl fill-[#03FFFF]' /> React
            </span>
            <span className='flex items-center'>
              <RiArrowDropRightFill className='text-4xl fill-[#03FFFF]' /> TailwindCSS
            </span>
            <span className='flex items-center'>
              <RiArrowDropRightFill className='text-4xl fill-[#03FFFF]' /> LocalStorage
            </span>
          </p>
          <div className='pb-4 text-center flex flex-col lg:flex-row justify-center'>
            <a href='https://github.com/adan-g/vetAppointments' target='_blank' 
            className='text-white text-center border border-greenA6 w-full lg:w-2/6 box-border p-2 mr-4 lg:mb-0 mb-4 flex justify-center items-center hover:bg-green3d hover:border-green3d hover:duration-700'>
              <RiGithubFill className='mr-4 fill-[#03FFFF]' /> <span>Git-hub</span>
            </a>
            <a href='https://coruscating-truffle-a7c1ba.netlify.app/' target='_blank' 
            className='text-white text-center border border-greenA6 w-full lg:w-2/6 box-border p-2 flex justify-center items-center hover:bg-green3d hover:border-green3d hover:duration-700'>
              <RiExternalLinkLine className='mr-4 fill-[#03FFFF]' /> View web site
            </a>
          </div>
        </div>

        <div className='lg:w-2/5 w-full'>
          <img src={imgVet} className='w-full h-full object-cover lg:rounded-r-lg lg:rounded-l-none rounded-b-lg' />
        </div>
      </div>
    </section>
  )
}

export default MyWork