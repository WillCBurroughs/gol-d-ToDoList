"use client"
import Image from 'next/image'
import styles from './page.module.css'
import React, {useState, useEffect} from 'react'
import Makep from './components/atoms/makep'
import Makeh from './components/atoms/Makeh'
import Input from './components/atoms/Input'

export default function Home() {
  return (
    <main className={styles.main}>
      
        <Makep className="" textToPass="Hello there" />
        <Makeh className="" textToPass="Hello there" /> 
        <Input passclasses="your-class-name" textToPass="Enter something" />

      
    </main>
  )
}
