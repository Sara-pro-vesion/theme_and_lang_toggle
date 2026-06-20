import React from 'react'
import image from '../assets/backround ELMO!.jpeg'
import { useLanguage } from '../hooks/useLanguage';
import { useTheme } from '../hooks/useTheme';

export default function Card() {

        const {t} = useLanguage();
        const { activeStyles } = useTheme();
  return (
<div className={`${activeStyles.bg} ${activeStyles.textColor} transition-colors duration-200`}>           
     <img src={image} alt='image' className='border-none rounded-b-lg'/>
            <h1 className='text-2xl '>{t.title}</h1>
            <p>{t.subHeader}<br/> {t.paragraph}</p>
            <button>{t.btn}</button>
    </div>
  )
}
