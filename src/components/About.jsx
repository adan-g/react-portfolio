import styles from '../styles/About.module.css';
import imgLaptop from '../img/imgLaptop.jpg'


const About = () => {
  return (
    <div className={styles.container} id={'about'}>
      <h1 className={styles.titleAbout}>
        ABOUT ME
      </h1>

      <div className={styles.divAbout}>
        <div className={styles.divImg}>
          <img src={imgLaptop} alt='imgLaptop' className={styles.imgLaptop} />
        </div>

        <div className={styles.divText}>
          <h2>Web Developer</h2>

          <p>
            I consider myself a ppasionate person about tecnology i think we can do great things with it and to improve our environment if we put it to good use. i like to support new ideas because i know they can have a great result, i'm the kind of person that when i do something i try to do my best. It's been a little over 7 years that I've been programmed, Currently I do almost all my projects with javascript and some of its framework: NodeJs, ReactJs. I had my first interaction with programming in high school with the programming language "Basic" with this language we are simulating the function of an ATM, a few months later we saw several classes with Visual Basic 6.0 with this we were programming a simple game. In my first job related to the world of computing and programming, I had the opportunity to learn Visual Basic .NET and database management, some time later I was working with the PHP language, delving deeper into the web world.
          </p>
        </div>
      </div>
    </div>
  )
}


export default About