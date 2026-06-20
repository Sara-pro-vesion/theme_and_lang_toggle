import React, { createContext, useState } from 'react'

export const themeContext = createContext();

export default function themeProvider({children}) {

    const [theme ,setTheme] = useState('light');

    const themeToggle = () => {
        setTheme(!theme);
    }

    const activeStyles = themes[theme];

  return (
    <themeContext.Provider value = {{theme ,themeToggle ,activeStyles}}>
      {children}
    </themeContext.Provider>
  )
}
