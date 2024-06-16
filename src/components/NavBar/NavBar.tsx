import { Button } from '@mui/material';
import React from 'react'
import { NavLink } from 'react-router-dom'

interface INavBarProps {
  isThemeOpen: boolean;
  setIsThemeOpen: Dispatch<SetStateAction<boolean>>;
  isHome: boolean;
}

const NavBar: React.FC<INavBarProps> = ({ isHome, isThemeOpen, setIsThemeOpen }) => {

  const toggleTheme = () => {
    setIsThemeOpen(!isThemeOpen);
  }

  return (
    <header className='header'>
      <NavLink to='/' className='w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md'>
        <p className='blue-gradient_text' >TK</p>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        {isHome && <Button onClick={() => toggleTheme()} style={{color: 'black', padding: 'unset', fontWeight: 'bold', textTransform: 'unset', fontSize: '17px',  }}>Theme</Button>}
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projects
        </NavLink>
      </nav>
    </header>
  )
}

export default NavBar
