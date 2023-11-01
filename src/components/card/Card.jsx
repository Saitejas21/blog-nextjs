import Image from 'next/image'
import styles from './card.module.css'
import Link from 'next/link'



export const Card = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
             </div>
          <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>01-11-2023 - </span>
                <span className={styles.category}>Culture</span>
            </div>
            <Link href="/">
            <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, commodi?</h1></Link>
            <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel blanditiis esse saepe officia ratione, assumenda eius perspiciatis tempore eaque fugiat doloribus, cumque impedit quisquam enim velit minus voluptas amet ad.</p>
            <Link href="/" className={styles.link}>Read More</Link>
          </div>
    </div>
  )
}
