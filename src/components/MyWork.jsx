import React, { useEffect } from 'react'
import { RiCloseLine, RiExpandUpDownFill, RiSubtractLine } from "react-icons/ri";
import imgFace from '../img/imgAdan.jpg'
import Typed from 'react-typed';

const MyWork = () => {
  return (
    <section className='mx-7'>
      <h1 className='text-[10rem] text-center text-black12 font-semibold my-24' style={{ '-webkit-text-stroke-width': '2px', '-webkit-text-stroke-color': '#93B1A6', 'text-shadow': '#93B1A6 1px 0 20px' }}>
        MY WORK
      </h1>

      <div className='flex bg-black12 border-greenA6 border rounded-lg shadow-md shadow-greenA6 mb-24'>
        <div className='w-3/5 h-80 flex flex-col justify-between my-4 mx-2'>
          <p className='text-greenA6'>
            <span className='block text-3xl'>TITLE</span>
            ajafhtg ajafhtgajafhtg ajafhtg ajafhtg ajafhtg hhjdddddasas ajafhtg ajafhtg ajafhtg ajafhtgajafhtg ajafhtg ajafhtg ajafhtg hhjdddddasas ajafhtg 
            <span className='block'>- ajafhtgajafhtg ajafhtgajafhtg ajafhtg ajafhtg ajafhtg hhjdddddasas ajafhtgajafhtgajafhtg</span>
            <span className='block'>- ajafhtgajafhtg ajafhtgajafhtg ajafhtg ajafhtg ajafhtg hhjdddddasas ajafhtgajafhtgajafhtg</span>
            <span className='block'>- ajafhtgajafhtg ajafhtgajafhtg ajafhtg ajafhtg ajafhtg hhjdddddasas ajafhtgajafhtgajafhtg</span> 
          </p>
          <div className='pb-4 text-center'>
            <a className='text-white text-center border border-greenA6 w-2/6 inline-block box-border p-2 mr-4'>
              Git-hub
            </a>
            <a className='text-white text-center border border-greenA6 w-2/6 inline-block box-border p-2'>
              View web site
            </a>
          </div>
        </div>

        <div className='w-2/5 bg-stone-600 rounded-t-lg'>

        </div>
      </div>

      <div className='flex bg-black12 border-greenA6 border rounded-lg shadow-md shadow-greenA6'>
        <div className='w-3/5 h-80 flex flex-col justify-between my-4 mx-2'>
          <p className='text-greenA6'>
            <span className='block text-3xl'>TITLE</span>
            ajafhtg ajafhtgajafhtg ajafhtg ajafhtg ajafhtg hhjdddddasas ajafhtg ajafhtg ajafhtg ajafhtgajafhtg ajafhtg ajafhtg ajafhtg hhjdddddasas ajafhtg 
            <span className='block'>- ajafhtgajafhtg ajafhtgajafhtg ajafhtg ajafhtg ajafhtg hhjdddddasas ajafhtgajafhtgajafhtg</span>
            <span className='block'>- ajafhtgajafhtg ajafhtgajafhtg ajafhtg ajafhtg ajafhtg hhjdddddasas ajafhtgajafhtgajafhtg</span>
            <span className='block'>- ajafhtgajafhtg ajafhtgajafhtg ajafhtg ajafhtg ajafhtg hhjdddddasas ajafhtgajafhtgajafhtg</span> 
          </p>
          <div className='pb-4 text-center'>
            <a className='text-white text-center border border-greenA6 w-2/6 inline-block box-border p-2 mr-4'>
              Git-hub
            </a>
            <a className='text-white text-center border border-greenA6 w-2/6 inline-block box-border p-2'>
              View web site
            </a>
          </div>
        </div>

        <div className='w-2/5 bg-stone-600 rounded-t-lg'>

        </div>
      </div>
    </section>
  )
}

export default MyWork