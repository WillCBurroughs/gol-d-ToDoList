import Image from 'next/image'
import styles from './page.module.css'
import React from 'react'
import Makep from './components/atoms/Makep'

export default function Home() {
  return (
    <main className={styles.main}>
        <body className={styles.myBody}>

          <Makep
            className = ""
            textToPass = "Hello there"
          />

        </body>
    </main>
  )
}
