import { useContext } from 'react';
import { themeContext } from '../contexts/ThemeContext';

export function useTheme() {
  const context = useContext(themeContext);
  
  if (!context) {
    throw new Error("usetheme must be used within a themeProvider");
  }
  
  return context; 
}