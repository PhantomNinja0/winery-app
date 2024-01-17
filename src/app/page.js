"use client"


import Image from 'next/image'
import styles from './page.module.css'
import WineAPI from './list'

export default function Home() {

  return (
    <main className={styles.main}>
      <div>
        <WineAPI></WineAPI>
      </div>
    </main>
  )
}
