import React, {useState} from "react";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { BiLogoGmail } from "react-icons/bi";
import Modal from '../components/modal/ModalContact'

const Contact = () => {

  const [openModal, setOpenModal] = useState(false)

  return (
    <section id={'contact'} className='mx-7'>
      <h1 className='lg:text-[9rem] text-7xl text-center text-black12 font-semibold my-24' style={{ '-webkit-text-stroke-width': '2px', '-webkit-text-stroke-color': '#93B1A6', 'text-shadow': '#93B1A6 1px 0 20px' }}>
        CONTACT
      </h1>

      <nav className="flex justify-center space-x-12">
        <a href="https://www.linkedin.com/in/adan-gimenez-77b989146/" target="_blank" className="bg-greenA6 p-2 text-6xl rounded-md">
          <RiLinkedinBoxFill />
        </a>
        <a className="bg-greenA6 p-2 text-6xl rounded-md" onClick={() => setOpenModal(true)}>
          <BiLogoGmail />
        </a>
      </nav>
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
    </section>
  )
}

export default Contact