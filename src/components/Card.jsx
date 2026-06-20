import React from 'react'
import image from '../assets/backround ELMO!.jpeg'
import activeStyles from '../public/themes'
import { useLanguage } from '../hooks/useLanguage';

export default function Card() {

        const {t} = useLanguage();
  return (
    <div className={activeStyles.bg}>
            <img src={image} alt='image' className='border-none rounded-b-lg'/>
            <h1 className='text-2xl '>{t.title}</h1>
            <p>{t.subHeader}<br/> {t.paragraph}</p>
            <button>{t.btn}</button>
    </div>
  )
}
