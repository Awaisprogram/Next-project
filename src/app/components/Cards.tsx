import React from 'react'
import Image from 'next/image'
import feature1 from '../images/feature1.png'
import feature2 from '../images/feature2.png'
import feature3 from '../images/feature3.png'
import feature4 from '../images/feature4.png'


function Cards() {
  return (
    <>
      <div className="container-image">
      <div className="Images">
        <div className="image1">
          <Image src={feature1} alt=''></Image>

        </div>
        <div className="image2">
          <Image src={feature3} alt=''></Image>
        </div>
      </div>
      <div className="Images">
        <div className="image1">
          <Image src={feature2} alt=''></Image>
        </div>
        <div className="image2">
          <Image src={feature4} alt=''></Image>
        </div>
      </div>
      </div>
    </>
  )
}

export default Cards
