import Typewriter from 'typewriter-effect';
import imgAdan from '../img/imgAdan.jpeg'
import style from '../styles/MyName.module.css'

const MyName = () => {
  return (
    <>
      <div className={style.container} id={'myname'}>
        <div className={style.divImgAdan}>
          <img src={imgAdan} alt='adanFace' className={style.imgAdan} />
        </div>


        <div className={style.divName}>
          
            <p className=''>Hi,</p> 
            <p className={style.pName}>I'm Adan Gimenez</p>
          

          <Typewriter
            options={{
              strings: ['Front End Developer'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>

    </>
  )
}

export default MyName