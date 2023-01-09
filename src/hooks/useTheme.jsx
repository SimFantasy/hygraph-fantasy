import React, { useState, useEffect } from 'react'

const useTheme = () => {
  const [theme, setTheme] = useState('light')

  const root = document.documentElement

  useEffect(() => {
    const localTheme = localStorage.getItem('fantasy-theme')
    if (localTheme) {
      setTheme(localTheme)
      root.setAttribute('data-color-mode', localTheme)
    } else {
      setTheme('light')
      root.setAttribute('data-color-mode', 'light')
    }
  }, [])

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      root.setAttribute('data-color-mode', 'dark')
      localStorage.setItem('fantasy-theme', 'dark')
    } else {
      setTheme('light')
      root.setAttribute('data-color-mode', 'light')
      localStorage.setItem('fantasy-theme', 'light')
    }
  }

  return { theme, toggleTheme }
}

export default useTheme
