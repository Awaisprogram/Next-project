import React from 'react'
import styles from './home.module.css'
import Button from '../components/button'
import { Libre_Baskerville } from 'next/font/google';
import Image from 'next/image';
import bottom from '../images/bottom.png'
import Font from '../components/Font'
import Services from '../components/Services'

const libreBaskerville = Libre_Baskerville({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

function Main() {
  return (
    <>
    <div className={styles["container"]}>
    <div className={styles["content"]}>
      <h1 className={libreBaskerville.className}>Increase your brand awareness digitally</h1>
      
     
      <p>As a digital marketing agency, we specialize in providing a range of online marketing and advertising-related services. We help businesses and individuals promote your product, service, or brand through various digital channels.</p>
      <div className={styles["buttons"]}>
        <Button click='Lets talk'/>
        <button className={styles['button2']}>Explore Our Services</button>
      </div>
    </div> 
    <div className={styles['bottom']}>
     <Image src={bottom} alt=''></Image>
     
    </div>
    
    </div>
    <div className={styles['key']}>
       <Font text='Our Services for productivity gains'/>
       <Services/>
     </div>
      
    </>
  )
}

export default Main
