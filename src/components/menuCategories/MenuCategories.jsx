import Link from 'next/link'
import React from 'react'
import styles from './menucategories.module.css'

function MenuCategories() {
  return (
    <div className={styles.categoryList}>
        <Link href="/blog?cat=Style" className={`${styles.categoryItem} ${styles.style} `}>Style</Link>
        <Link href="/blog?cat=fashion" className={`${styles.categoryItem} ${styles.fashion} `}>fashion</Link>
        <Link href="/blog?cat=food" className={`${styles.categoryItem} ${styles.food} `}>food</Link>
        <Link href="/blog?cat=travel" className={`${styles.categoryItem} ${styles.travel}`}>Travel</Link>
        <Link href="/blog?cat=culture" className={`${styles.categoryItem} ${styles.culture} `}>Culture</Link>
        <Link href="/blog?cat=coding" className={`${styles.categoryItem} ${styles.coding}`}>Coding</Link>
      </div>
  )
}

export default MenuCategories