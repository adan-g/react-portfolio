import styles from '../styles/Skills.module.css';
import imgReact from '../img/imgReact.png'
import imgNode from '../img/imgNode.png'
import imgPhp from '../img/imgPhp.png';
import imgHtml from '../img/imgHtml.png'
import imgCss from '../img/imgCss.png'
import imgMysql from '../img/imgMysql.png'
import imgGit from '../img/imgGit.png'
import imgJs from '../img/imgJs.png'

const Skills = () => {
  return (
    <div className={styles.container} id={'skills'}>
      <h1 className={styles.titleSkills}>
        SKILLS
      </h1>

      <div className={styles.containerImgSkills}>
        <div className={styles.divImgSkills}>
          <img src={imgReact} alt='img React' className={styles.imgSkills} />
        </div>
        <div className={styles.divImgSkills}>
          <img src={imgNode} alt='img Node' className={styles.imgSkills} />
        </div>
        <div className={styles.divImgSkills}>
          <img src={imgPhp} alt='img Php' className={styles.imgSkills} />
        </div>
        <div className={styles.divImgSkills}>
          <img src={imgJs} alt='img Js' className={styles.imgSkills} />
        </div>
        <div className={styles.divImgSkills}>
          <img src={imgHtml} alt='img Html' className={styles.imgSkills} />
        </div>
        <div className={styles.divImgSkills}>
          <img src={imgCss} alt='img Css' className={styles.imgSkills} />
        </div>
        <div className={styles.divImgSkills}>
          <img src={imgMysql} alt='img Mysql' className={styles.imgSkills} />
        </div>
        <div className={styles.divImgSkills}>
          <img src={imgGit} alt='img Git' className={styles.imgSkills} />
        </div>
      </div>
    </div>
  )
}

export default Skills