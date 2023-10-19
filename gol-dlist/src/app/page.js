"use client"
import Image from 'next/image'
import styles from './page.module.css'
import React, {useState, useEffect} from 'react'
import Makep from './components/atoms/Makep'
import Makeh from './components/atoms/Makeh'

export default function Home() {
  return (
    <main className={styles.main}>
      <body className={styles.myBody}>
        <Makep className="" textToPass="Hello there" />
        <Makeh className="" textToPass="Hello there" />
      </body>
    </main>
  )
}
