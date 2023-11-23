import { RiLinkedinBoxFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";

const Contact = () => {
  return (
    <section className='mx-7'>
      <h1 className='text-[10rem] text-center text-black12 font-semibold my-24' style={{ '-webkit-text-stroke-width': '2px', '-webkit-text-stroke-color': '#93B1A6', 'text-shadow': '#93B1A6 1px 0 20px' }}>
        CONTACT
      </h1>

      <nav className="flex justify-center space-x-12">
        <a href="#" className="bg-greenA6 p-2 text-6xl rounded-md">
          <RiLinkedinBoxFill />
        </a>
        <a href="#" className="bg-greenA6 p-2 text-6xl rounded-md">
          <RiInstagramFill />
        </a>
      </nav>
    </section>
  )
}

export default Contact