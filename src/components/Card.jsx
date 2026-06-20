import image from '../assets/backround ELMO!.jpeg'
import { useLanguage } from '../hooks/useLanguage';
import { useTheme } from '../hooks/useTheme';
import NavBar from './NavBar';

export default function Card() {

        const {t} = useLanguage();
        const { activeStyles } = useTheme();

  return (

<div className={`${activeStyles.bg} ${activeStyles.textColor} transition-colors duration-200 flex flex-col items-center max-w-[500px] h-[100vh] md:h-fit border-none rounded-lg relative shadow-xl `}>           
     <NavBar />
     <img src={image} alt='image' className='border-none rounded-b-lg md:rounded-lg'/>
     <div className='p-4 flex flex-col items-center gap-12'>
            <h1 className='text-4xl '>{t.title}</h1>
            <p className='text-lg p-3'>{t.subHeader}<br/> {t.paragraph}</p>
            <button className='border-1 rounded-lg bg-[#F38826] p-2'>{t.btn}</button>
           </div>
    </div>
  )
}
