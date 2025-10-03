import React, { useEffect } from 'react';
import assets from '../assets/assets';

const ThemeToggleBtn = ({ theme, setTheme }) => {
  // Initialize theme based on user's preference or stored value
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(theme || prefersDarkMode ? 'dark':'light');
    }
  },[setTheme]);

  // Toggle dark class on document root based on theme
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme',theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
    <button onClick={toggleTheme} aria-label="Toggle Theme">
      {theme === 'dark' ? (
        <img
          src={assets.sun_icon}
         
        className='size-8.5 p-1.5 border border-gray-500 rounded-full'
          alt='Light Mode'
        />
      ) : (
        <img
          src={assets.moon_icon}
                    className='size-8.5 p-1.5 border border-gray-500 rounded-full'
          alt='Dark Mode'
        />
      )}
    </button>
    </>
  );
};

export default ThemeToggleBtn;