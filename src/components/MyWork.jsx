import styles from '../styles/MyWork.module.css'
import imgReact from '../img/portfolio/imgReact.png'

const MyWork = () => {
  return (
    <div className={styles.container} id={'myWork'}>
      <h1 className={styles.titleMyWork}>
        My Work
      </h1>

      <div className={styles.containerImgPortfolio}>
        <div className={styles.divImgText}>
          <div className={styles.divImgPortfolio}>
            <img src={imgReact} alt="img react" className={styles.imgPortfolio} />
          </div>
          <div className={styles.divText}>
            <p>project calculator</p>
            <a href=''>git-hub</a>
          </div>
        </div>
        <div className={styles.divImgText}>
          <div className={styles.divImgPortfolio}>
            <img src={imgReact} alt="img react" className={styles.imgPortfolio} />
          </div>
          <div className={styles.divText}>
            <p>project calculator</p>
            <a href=''>git-hub</a>
          </div>
        </div>
        <div className={styles.divImgText}>
          <div className={styles.divImgPortfolio}>
            <img src={imgReact} alt="img react" className={styles.imgPortfolio} />
          </div>
          <div className={styles.divText}>
            <p>project calculator</p>
            <a href=''>git-hub</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyWork