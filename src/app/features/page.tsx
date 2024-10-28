import React from 'react'
import Heading from '../components/heading'
import styles from './features.module.css'
import Font from '../components/Font'
import Button from '../components/button'
import Cards from '../components/Cards'

function Features() {
  return (
    <>
     
        <div>
        <Heading title="Our Features" />
        </div>
        
      
      <div className={styles["container"]}>
      <div className={styles["content"]}>
         <Font text='Successful projects that represent us'/>
         <div className={styles['button']}>
         <Button click='Projects'/>
         </div>
         
      </div>
      <Cards/>
      </div>
    </>
  )
}

export default Features
