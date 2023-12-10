import React, {useState} from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <header className='flex lg:justify-center justify-end mt-4 lg:h-[10vh] z-50'>
      <nav className={`fixed w-[80%] h-full ${
        showMenu ? 'left-0' : '-left-full'
      } 
        top-0 flex-col bg-black12 text-greenA6 lg:static lg:w-1/2 flex lg:flex-row lg:h-12 lg:justify-evenly justify-center items-center xl:rounded-full gap-10 border-greenA6 border shadow-md shadow-greenA6 transition-all duration-500 z-50`}>
        <Link to={'about'} smooth={true} className="hover:underline hover:text-green-50 duration-1000 cursor-pointer">About</Link>
        <Link to={'skills'} smooth={true} className="hover:underline hover:text-green-50 duration-1000 cursor-pointer">Skills</Link>
        <Link to={'mywork'} smooth={true} className="hover:underline hover:text-green-50 duration-1000 cursor-pointer">Work</Link>
        
        <Link to={'contact'} smooth={true} className="hover:underline hover:text-green-50 duration-1000 cursor-pointer">Contact</Link>
      </nav>
      <button onClick={() => setShowMenu(!showMenu)} className="text-2xl p-2 bg-black12 text-greenA6 border-greenA6 border shadow-md shadow-greenA6 lg:hidden">
        {showMenu ? <RiCloseLine/> : <RiMenuLine/>}
      </button>
    </header>
  )
}

export default Header