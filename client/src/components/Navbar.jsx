import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.svg' // your single logo image
import searchIcon from '../assets/searchIcon.svg'

const Navbar = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Hotels', path: '/rooms' },
    { name: 'Experience', path: '/' },
    { name: 'About', path: '/' }
  ]

  const location = useLocation()
  const isHome = location.pathname === '/'

  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // text color based on scroll
  const textColorClass = isScrolled || !isHome ? 'text-gray-700' : 'text-white'

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 gap-4 ${
        isScrolled || !isHome
          ? 'bg-white shadow-md backdrop-blur-lg py-3 md:py-4'
          : 'bg-transparent py-4 md:py-6'
      }`}
    >
      {/* Logo */}
      <Link to='/'>
        <img
          src={logo}
          alt='Logo'
          className={`h-9 transition-all duration-300 ${
            isScrolled || !isHome ? 'invert' : ''
          }`}
        />
      </Link>

      {/* Desktop Nav */}
      <div
        className={`hidden md:flex items-center gap-4 lg:gap-8 ${textColorClass}`}
      >
        {navLinks.map((link, i) => (
          <Link
            key={i}
            to={link.path}
            className={`group flex flex-col gap-0.5 ${textColorClass}`}
          >
            {link.name}
            <div
              className={`${
                textColorClass === 'text-white' ? 'bg-white' : 'bg-gray-700'
              } h-0.5 w-0 group-hover:w-full transition-all duration-300`}
            />
          </Link>
        ))}
        <button
          className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer
             transition-all ${isScrolled || !isHome ? 'text-gray-800 border-black' : ''}`}
        >
          Dashboard
        </button>
      </div>

      {/* Desktop Right */}
      <div className='hidden md:flex items-center gap-4'>
        <img
          src={searchIcon}
          alt='SearchIcon'
          className={`h-6 w-6 cursor-pointer transition-all duration-500 ${
            isScrolled || !isHome ? 'invert' : ''
          }`}
        />
        <button
          className={`px-8 py-2.5 rounded-full ml-4 transition-all duration-500 ${
            isScrolled || !isHome
              ? 'text-white bg-black'
              : 'bg-white text-black'
          }`}
        >
          Login
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`md:hidden text-2xl font-bold cursor-pointer ${
          isScrolled || !isHome ? 'text-gray-700' : 'text-white'
        }`}
      >
        {isMenuOpen ? '×' : '☰'}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-transform duration-500 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button
          className='absolute top-4 right-4 text-3xl font-bold'
          onClick={() => setIsMenuOpen(false)}
        >
          ×
        </button>

        {navLinks.map((link, i) => (
          <Link
            key={i}
            to={link.path}
            onClick={() => setIsMenuOpen(false)}
            className='text-lg font-semibold text-gray-800'
          >
            {link.name}
          </Link>
        ))}

        <button className='border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all'>
          Dashboard
        </button>

        <button className='bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500'>
          Login
        </button>
      </div>
    </nav>
  )
}

export default Navbar
