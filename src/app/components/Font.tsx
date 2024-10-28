import React from 'react'
import { Libre_Baskerville } from 'next/font/google';


const libreBaskerville = Libre_Baskerville({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

interface assert{
  text:string
}
function Font({text}: assert) {
  return (
    <div className='text'>
      <h1 className={libreBaskerville.className}>{text}</h1>
      
    </div>
  )
}

export default Font
