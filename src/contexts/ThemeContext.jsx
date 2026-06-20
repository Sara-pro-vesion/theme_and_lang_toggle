import React, { createContext, useState } from 'react'
import themes from '../themes';

export const themeContext = createContext();

export default function themeProvider({children}) {

    const [theme ,setTheme] = useState('light');

    const themeToggle = () => {
        setTheme((prev) => {
      if (prev === 'light') return 'dark';
      if (prev === 'dark') return 'light';
      return 'light';})
    }

    const activeStyles = themes[theme];

  return (
    <themeContext.Provider value = {{theme ,themeToggle ,activeStyles}}>
      {children}
    </themeContext.Provider>
  )
}
