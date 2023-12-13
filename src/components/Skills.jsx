import { RiReactjsLine, RiCss3Fill, RiJavascriptLine, RiHtml5Line } from "react-icons/ri"
import { LiaPython } from "react-icons/lia";
import { SiPhp } from "react-icons/si";
import { ImGit } from "react-icons/im";
import { HiDatabase } from "react-icons/hi";
import { Tooltip } from 'react-tooltip'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';


const Skills = () => {
  return (
    <section id={'skills'}>
      <h1 className='lg:text-[9rem] text-[7rem] text-center text-black12 font-semibold my-24' style={{ '-webkit-text-stroke-width': '2px', '-webkit-text-stroke-color': '#93B1A6', 'text-shadow': '#93B1A6 1px 0 20px' }}>
        SKILLS
      </h1>

      <BrowserView>
        <div className='grid grid-cols-1 gap-20'>
          <Tooltip id="mytooltip" />
          <div data-aos="fade-left" className="flex">
            <RiReactjsLine
              data-tooltip-id="mytooltip" data-tooltip-content="React Js"
              className='text-black12 w-full h-52 stroke-greenA6 stroke-[0.5px] drop-shadow-[0_0_3px_#93B1A6] hover:stroke-[1px] duration-1000 cursor-pointer'
            />

            <RiJavascriptLine
              data-tooltip-id="mytooltip" data-tooltip-content="JavaScript"
              className='text-black12 w-full h-52 stroke-greenA6 stroke-[0.5px] drop-shadow-[0_0_3px_#93B1A6] hover:stroke-[1px] duration-1000 cursor-pointer'
            />
            <LiaPython
              data-tooltip-id="mytooltip" data-tooltip-content="Python"
              className='text-black12 w-full h-52 stroke-greenA6 stroke-[0.5px] drop-shadow-[0_0_3px_#93B1A6] hover:stroke-[1px] duration-1000 cursor-pointer'
            />
            <SiPhp
              data-tooltip-id="mytooltip" data-tooltip-content="PHP"
              className='text-black12 w-full h-52 stroke-greenA6 stroke-[0.5px] drop-shadow-[0_0_3px_#93B1A6] hover:stroke-[1px] duration-1000 cursor-pointer'
            />
          </div>

          <div data-aos="fade-right" className="flex">
            <RiHtml5Line
              data-tooltip-id="mytooltip" data-tooltip-content="HTML 5"
              className='text-black12 w-full h-52 stroke-greenA6 stroke-[0.5px] drop-shadow-[0_0_3px_#93B1A6] hover:stroke-[1px] duration-1000 cursor-pointer'
            />
            <RiCss3Fill
              data-tooltip-id="mytooltip" data-tooltip-content="CSS 3"
              className='text-black12 w-full h-52 stroke-greenA6 stroke-[0.5px] drop-shadow-[0_0_3px_#93B1A6] hover:stroke-[1px] duration-1000 cursor-pointer'
            />
            <ImGit
              data-tooltip-id="mytooltip" data-tooltip-content="Git & Github"
              className='text-black12 w-full h-52 stroke-greenA6 stroke-[0.5px] drop-shadow-[0_0_3px_#93B1A6] hover:stroke-[1px] duration-1000 cursor-pointer'
            />
            <HiDatabase
              data-tooltip-id="mytooltip" data-tooltip-content="Mysql, MongoDB"
              className='text-black12 w-full h-52 stroke-greenA6 stroke-[0.5px] drop-shadow-[0_0_3px_#93B1A6] hover:stroke-[1px] duration-1000 cursor-pointer'
            />
          </div>
        </div>
      </BrowserView>

      <MobileView>
        <AliceCarousel autoPlay autoPlayInterval='3000'>
          <RiReactjsLine
            data-tooltip-id="mytooltip" data-tooltip-content="React Js"
            className='text-black12 w-full h-52 stroke-greenA6 stroke-[0.5px] drop-shadow-[0_0_3px_#93B1A6] hover:stroke-[1px] duration-1000 cursor-pointer'
          />

          <RiJavascriptLine
            data-tooltip-id="mytooltip" data-tooltip-content="JavaScript"
            className='text-black12 w-full h-52 stroke-greenA6 stroke-[0.5px] drop-shadow-[0_0_3px_#93B1A6] hover:stroke-[1px] duration-1000 cursor-pointer'
          />
          <LiaPython
            data-tooltip-id="mytooltip" data-tooltip-content="Python"
            className='text-black12 w-full h-52 stroke-greenA6 stroke-[0.5px] drop-shadow-[0_0_3px_#93B1A6] hover:stroke-[1px] duration-1000 cursor-pointer'
          />
          <SiPhp
            data-tooltip-id="mytooltip" data-tooltip-content="PHP"
            className='text-black12 w-full h-52 stroke-greenA6 stroke-[0.5px] drop-shadow-[0_0_3px_#93B1A6] hover:stroke-[1px] duration-1000 cursor-pointer'
          />
          <RiHtml5Line
            data-tooltip-id="mytooltip" data-tooltip-content="HTML 5"
            className='text-black12 w-full h-52 stroke-greenA6 stroke-[0.5px] drop-shadow-[0_0_3px_#93B1A6] hover:stroke-[1px] duration-1000 cursor-pointer'
          />
          <RiCss3Fill
            data-tooltip-id="mytooltip" data-tooltip-content="CSS 3"
            className='text-black12 w-full h-52 stroke-greenA6 stroke-[0.5px] drop-shadow-[0_0_3px_#93B1A6] hover:stroke-[1px] duration-1000 cursor-pointer'
          />
          <ImGit
            data-tooltip-id="mytooltip" data-tooltip-content="Git & Github"
            className='text-black12 w-full h-52 stroke-greenA6 stroke-[0.5px] drop-shadow-[0_0_3px_#93B1A6] hover:stroke-[1px] duration-1000 cursor-pointer'
          />
          <HiDatabase
            data-tooltip-id="mytooltip" data-tooltip-content="Mysql, MongoDB"
            className='text-black12 w-full h-52 stroke-greenA6 stroke-[0.5px] drop-shadow-[0_0_3px_#93B1A6] hover:stroke-[1px] duration-1000 cursor-pointer'
          />
        </AliceCarousel>
      </MobileView>

    </section>
  )
}


export default Skills