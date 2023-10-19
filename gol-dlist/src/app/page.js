"use client"
import Image from 'next/image'
import styles from './page.module.css'
import React, {useState, useEffect} from 'react'
import Makep from './components/atoms/Makep'
import Makeh from './components/atoms/Makeh'
import Input from './components/atoms/Input'

export default function Home() {
  const [headers, setHeaders] = useState(() => {
    const storedHeaders = localStorage.getItem('headers');
    return storedHeaders ? JSON.parse(storedHeaders) : [];
  });

  useEffect(() => {
    localStorage.setItem('headers', JSON.stringify(headers));
  }, [headers]);

  return (
    <main className={styles.main}>
      <div className="centered-container">
        <Input passclasses="customizeInput" textToPass="Enter something" headers={headers} setHeaders={setHeaders} />
      </div>
    </main>
  );
}





