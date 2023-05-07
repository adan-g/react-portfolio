import { useState } from 'react'
import styles from '../styles/Header.module.css'
import { Link, animateScroll as scroll } from 'react-scroll';

const Header = () => {

  const [menu, setMenu] = useState(false)

  const toggleMenu = () => {
    setMenu(!menu)
  }
  return (
    <header className={styles.Header}>
      <div className={styles.HeaderName}>
        {`< Hello World />`}
      </div>

      <button
        onClick={toggleMenu}
        className={styles.HeaderButton}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={styles.HeaderSvg} viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
        </svg>
      </button>

      <nav className={`${styles.HeaderNav} ${menu ? styles.isActive : ''}`}>
        <ul className={styles.HeaderUl}>
          <li className={styles.HeaderLi}><Link to={'about'} smooth={true} className={styles.HeaderA}>About me</Link></li>
          <li className={styles.HeaderLi}><Link to={'skills'} smooth={true} className={styles.HeaderA}>Skills</Link></li>
          <li className={styles.HeaderLi}><Link to={'myWork'} smooth={true} className={styles.HeaderA}>My work </Link></li>
          <li className={styles.HeaderLi}><Link to={'contact'} smooth={true} className={styles.HeaderA}>Contact </Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header