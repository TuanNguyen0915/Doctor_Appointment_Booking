// npm modules
import { NavLink, Link } from 'react-router-dom'
import { useRef, useEffect } from 'react'
// data
import navLinks from '../../assets/data/navLink'
// images
import logo from '../../assets/images/logo.png'
import userImg from '../../assets/images/avatar-icon.png'
// icons
import { BiMenu } from 'react-icons/bi'

const NavBar = () => {

  const navRef = useRef(null)
  const menuRef = useRef(null)

  const handleStickyMode = () => {
    window.addEventListener('scroll', () => {
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ) {
        navRef.current.classList.add('sticky_navbar')
      } else {
        navRef.current.classList.remove('sticky_navbar')
      }
    })
  }

  useEffect (()=> {
    handleStickyMode()
    return () => window.removeEventListener('scroll', handleStickyMode)
  })

  const toggleMenu = () => {
    menuRef.current.classList.toggle('show_menu')
  }

  return (
    <nav className="navbar flex items-center" ref={navRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* logo */}
          <div>
            <img src={logo} alt="logo" />
          </div>
          {/* navbar menu */}
          <div className='navigation' ref={menuRef} onClick={toggleMenu}>
            <ul className='menu flex items-center gap-[2.5rem]'>
              {navLinks.map((link, index) => (
                <li key={index} className='uppercase'>
                  <NavLink
                    to={link.path}
                    className={navClass => navClass.isActive ? 'text-primaryColor text-[16px] leading-7 font-[600]' : 'text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor'}
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* navbar right */}
          <div className='flex items-center gap-4'>
            <div className='hidden'>
              <Link to="/">
                <div className='w-[35px] h-[35px] rounded-full'>
                  <img src={userImg} alt="" className='w-full rounded-full' />
                </div>
              </Link>
            </div>

            <Link to='/login'>
              <button className='bg-primaryColor py-2 px-6 text-white font-600 h-[44px] flex items-center justify-center rounded-2xl'>Login</button>
            </Link>
            <span className='md:hidden' onClick={toggleMenu}>
              <BiMenu className='w-6 h-6 cursor-pointer' />
            </span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar