
const ModalContact = ({ open, onClose }) => {
  if (!open) return null
  return (
    <div className='bg-blue-400 w-full h-full'>
      <header className="flex justify-between mb-4">
        <h1 className="font-bold">Send a email</h1>
        <p className="cursor-pointer" onClick={onClose}>X</p>
      </header>
      <form className="flex flex-col">
        <input className="w-1/2 mb-4" type="email" placeholder="Type your email" />
        <input className="w-1/2 mb-4" type="subject" placeholder="type your subject" />
        <textarea className="w-1/2 mb-4" />
        <button className="bg-slate-500 w-1/2">Send</button>
      </form>
    </div>
  )
}

export default ModalContact