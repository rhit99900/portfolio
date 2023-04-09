import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styles from '../utils/config/style.constants';

import { 
  logo, 
  menu,
  close
} from '../assets'

import { 
  information, 
  navigation 
} from '../utils/config/index.constants';

const Navbar = () => {

  const [ active, setActive ] = useState<string>("");
  const [ menuToggle, setMenuToggle] = useState<boolean>(false);

  const selectTab = (key: string | undefined) => {
    if(key){
      setActive(key);
    }
    else{
      setActive("")
    }
    window.scrollTo(0,0);
  }

  return (
    <nav className={
      `${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`    
    }>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link 
          to="/"
          className='flex items-center gap-2'
          onClick={e => selectTab(undefined)}
        >
          <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
          <p className='text-white text-[1rem] font-bold cursor-pointer'>
            {information.name}
            <br/>
            <span className='sm:block hidden text-[0.7rem] font-thin'>{information.caption}</span>
          </p>
        </Link>
        <ul className='list-done hidden sm:flex flex-row gap-10'>
          {navigation.map((link, index) => (
            <li 
              key={index}
              className={`
                ${active === link.title ? 'text-white': 'text-secondary'}
                hover: text-white text-[1rem] font-medium cursor-pointer
              `}
              onClick={e => selectTab(link.path)}
            >
              <a href={`${link.path}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img 
            alt="menu"
            src={!menuToggle ? menu : close}
            className='w-[1.5rem] h-[1.5rem] object-contain cursor-pointer'
            onClick={() => setMenuToggle(!menuToggle)}
          />
          <div className={`
            ${!menuToggle ? 'hidden' : 'flex'}
            black-gradient p-6 absolute top-20 right-0 mx-4 min-w-[10rem] z-10 rounded-xl
          `}
          >
            <ul className='list-done flex justify-end items-start flex-col gap-4'>
              {navigation.map((link, index) => (
                <li 
                  key={index}
                  className={`
                    ${active === link.title ? 'text-white': 'text-secondary'}
                    hover: text-white text-[1rem] font-medium cursor-pointer
                  `}
                  onClick={e => selectTab(link.path)}
                >
                  <a href={`${link.path}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Some text  */}
    </nav>
  )
}

export default Navbar;