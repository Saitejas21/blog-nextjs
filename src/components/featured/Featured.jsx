import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'

function Featured() {
return (
  <div className={styles.container}>
    <h1 className={styles.title}>
      <b>Hey! Welcome to my blogs page.</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, veniam!</h1>
          <p className={styles.postDesc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa a quibusdam officiis quasi voluptas cumque molestiae similique nisi voluptatibus quia minus ex non, animi impedit hic magni sequi ipsam inventore!</p>
          <button className={styles.button}>Read More</button>
        </div>

      </div>
  
  </div>
  )
}

export default Featured