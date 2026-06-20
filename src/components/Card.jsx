import React from 'react'
import image from '../assets/backround ELMO!.jpeg'

export default function Card() {
  return (
    <div>
            <img src={image} alt='image' className='border-none rounded-b-lg'/>
            <h1>we're cooking !</h1>
            <p>the site will be lunched soon ...<br/> let us cook so you can get the best results because the good work takes time .</p>
    </div>
  )
}
