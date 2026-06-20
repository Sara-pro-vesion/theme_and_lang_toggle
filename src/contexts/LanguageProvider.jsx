import React, { createContext, useState } from 'react' // Added createContext
import translations from '../utilities/translations';

export const LanguageContext = createContext(); 

export default function LanguageProvider({children}) {
  const [locale, setLocale] = useState('en'); 

  const toggleLanguage = () => {
    setLocale((prev) => {
      if (prev === 'en') return 'es';
      if (prev === 'es') return 'fr';
      return 'en';
    });
  };

  const t = translations[locale]; 

  return (
    <LanguageContext.Provider value={{ locale, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}