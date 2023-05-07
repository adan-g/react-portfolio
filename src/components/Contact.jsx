import styles from '../styles/Contact.module.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Swal from 'sweetalert2';

const Contact = () => {
  const refForm = useRef();
  const handlesubmit = (event) => {
    event.preventDefault();

    const seviceId = import.meta.env.VITE_SERVICEID;
    const templateId = import.meta.env.VITE_TEMPLATEID;
    const apikey = import.meta.env.VITE_APIKEY;

    emailjs.sendForm(seviceId, templateId, refForm.current, apikey)
      .then(result => {
        if (result.text == 'OK') {
          Swal.fire('Message sent', '', 'success');
        }
      })
      .catch(error => console.error(error))
  }

  return (
    <div className={styles.container} id={'contact'}>
      <h1 className={styles.titleContact}>Contact</h1>

      <form ref={refForm} action='' onSubmit={handlesubmit} className={styles.form}>
        <div>
          <p>Your Name</p>
          <input type='text' name='name' required />
        </div>
        <div>
          <p>Your Email</p>
          <input type='email' name='email' required />
        </div>

        <div>
          <p>Your message</p>
          <textarea name='message' required></textarea>
        </div>

        <button type='submit' className={styles.inputSend}>Send</button>
      </form>
    </div>
  )
}

export default Contact