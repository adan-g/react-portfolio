import { RiCloseCircleLine } from "react-icons/ri";
import { RiSendPlaneFill } from "react-icons/ri";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


const ModalContact = ({ open, onClose }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qhzndb7', 'template_f8j61vp', form.current, '-RDpnqQX5DDnLmDL3')
      .then((result) => {
        console.log(result.text);
        if(result.text==='OK'){
          alert('Email send')
          document.getElementById("btnCloseModal").click();
        }
      }, (error) => {
        alert('An error occurred, please try again.')
        console.log(error.text);
      });
  };

  if (!open) return null

  return (
    <section className='w-full h-full top-0 left-0 fixed bg-[rgb(0,0,0,0.6)] flex justify-center items-center p-4'>
      <div className="bg-green3d lg:w-1/2 p-4 w-full">
        <header className="flex justify-between mb-4 text-slate-200 items-center">
          <h1 className="font-extrabold text-2xl">Contact Form</h1>
          <p className="cursor-pointer text-xl" onClick={onClose} id='btnCloseModal'>
            <RiCloseCircleLine />
          </p>
        </header>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-center">
          <input className="w-full mb-4 p-1 bg-greenA6 placeholder:text-slate-200" type="email" placeholder="Type your email" name="email" required />
          <input className="w-full mb-4 p-1 bg-greenA6 placeholder:text-slate-200" type="text" placeholder="Type your subject" name="from_name" required />
          <textarea className="w-full mb-4 h-40 bg-greenA6 placeholder:text-slate-200" placeholder="What is your message?..." name="message" required />
          <button className="bg-black12 text-slate-200 w-1/2 flex items-center justify-center p-4" type="submit" value="Send">
            <RiSendPlaneFill className="mr-2" /> Send email
          </button>
        </form>
      </div>
    </section>
  )
}

export default ModalContact