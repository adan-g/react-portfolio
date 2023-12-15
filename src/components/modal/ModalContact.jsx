import { RiCloseCircleLine } from "react-icons/ri";
import { RiSendPlaneFill } from "react-icons/ri";

const ModalContact = ({ open, onClose }) => {
  if (!open) return null
  return (
    <section className='w-full h-full top-0 left-0 fixed bg-[rgb(0,0,0,0.6)] flex justify-center items-center p-4'>
      <div className="bg-green3d w-1/2 p-4">
        <header className="flex justify-between mb-4 text-slate-200 items-center">
          <h1 className="font-extrabold text-2xl">Contact Form</h1>
          <p className="cursor-pointer text-xl" onClick={onClose}>
            <RiCloseCircleLine />
          </p>
        </header>
        <form className="flex flex-col items-center">
          <input className="w-full mb-4 p-1 bg-greenA6 placeholder:text-slate-200" type="email" placeholder="Type your email" />
          <input className="w-full mb-4 p-1 bg-greenA6 placeholder:text-slate-200" type="subject" placeholder="Type your subject" />
          <textarea className="w-full mb-4 h-40 bg-greenA6 placeholder:text-slate-200" placeholder="What is your message?..."/>
          <button className="bg-black12 text-slate-200 w-1/2 flex items-center justify-center p-4">
            <RiSendPlaneFill className="mr-2" /> Send email
          </button>
        </form>
      </div>
    </section>
  )
}

export default ModalContact