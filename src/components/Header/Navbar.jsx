import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isAuth, setIsAuth] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  // Sidebar toggle handler
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className='bg-gray-900 w-full border-slate-800 border-b-2 py-4 md:py-4 lg:py-5 sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <nav className='text-white flex justify-between items-center'>

          {/* Logo */}
          <div className='flex items-center'>
            <Link to="/" className='text-xl sm:text-2xl font-mono font-bold tracking-wide'>
              Book Store
            </Link>
          </div>

          {/* Desktop & Tablet Nav Links (Hidden on small screens) */}
          <div className='hidden md:flex items-center'>
            <ul className='flex items-center gap-1 lg:gap-2'>
              <li>
                <Link to="/" className='px-4 py-2 rounded-3xl hover:text-gray-300 hover:bg-gray-800 transition-colors'>Home</Link>
              </li>
              <li>
                <Link to="/about" className='px-4 py-2 rounded-3xl hover:text-gray-300 hover:bg-gray-800 transition-colors'>About</Link>
              </li>
              <li>
                <Link to="/contact" className='px-4 py-2 rounded-3xl hover:text-gray-300 hover:bg-gray-800 transition-colors'>Contact</Link>
              </li>
              <li>
                <Link to="/products" className='px-4 py-2 rounded-3xl hover:text-gray-300 hover:bg-gray-800 transition-colors'>Products</Link>
              </li>
            </ul>
          </div>

          {/* Desktop Auth Buttons (Hidden on small screens) */}
          <div className='hidden md:flex items-center gap-3'>
            {!isAuth ? (
              <>
                <Link to="/auth/page/login" className='border border-gray-600 rounded bg-gray-800 hover:bg-gray-700 text-white px-4 py-1.5 text-sm font-medium transition-colors'>
                  Login
                </Link>
                <Link to="/auth/page/register" className='rounded bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-1.5 text-sm font-medium transition-colors'>
                  Register
                </Link>
              </>
            ) : (
              <>
                <Link to="/dashboard/home-overview" className='border border-gray-600 rounded bg-gray-800 hover:bg-gray-700 text-white px-4 py-1.5 text-sm font-medium transition-colors'>
                  Dashboard
                </Link>
                <button
                  onClick={() => setIsAuth(false)}
                  className='rounded bg-red-600 hover:bg-red-500 text-white px-4 py-1.5 text-sm font-medium transition-colors'
                >
                  Logout
                </button>
              </>
            )}
          </div>

          {/* Mobile Hamburger Menu Button */}
          <div className='md:hidden flex items-center'>
            <button
              onClick={toggleMenu}
              className='text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset rounded focus:ring-indigo-500 p-2'
              aria-label="Toggle Menu"
            >
              <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                {isOpen ? (
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                ) : (
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Sidebar Backdrop */}
      {isOpen && (
        <div
          className='fixed inset-0 bg-black/60 z-40 md:hidden transition-opacity'
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Slide-over Sidebar (Left Side) */}
      <div className={`fixed top-0 left-0 h-full w-72 bg-gray-900 border-r border-gray-800 z-50 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col justify-between p-6 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>

        <div>
          {/* Sidebar Header */}
          <div className='flex items-center justify-between pb-6 border-b border-gray-800'>
            <span className='text-xl font-mono font-bold text-white'>Book Store</span>
            <button
              onClick={toggleMenu}
              className='text-gray-400 hover:text-white p-1'
            >
              <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
              </svg>
            </button>
          </div>

          {/* Mobile Nav Links */}
          <ul className='flex flex-col gap-4 mt-6 text-lg'>
            <li>
              <Link to="/" onClick={toggleMenu} className='block px-4 py-2 rounded-3xl text-gray-300 hover:text-white hover:bg-gray-800 transition-colors'>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMenu} className='block px-4 py-2 rounded-3xl text-gray-300 hover:text-white hover:bg-gray-800 transition-colors'>About</Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMenu} className='block px-4 py-2 rounded-3xl text-gray-300 hover:text-white hover:bg-gray-800 transition-colors'>Contact</Link>
            </li>
            <li>
              <Link to="/products" onClick={toggleMenu} className='block px-4 py-2 rounded-3xl text-gray-300 hover:text-white hover:bg-gray-800 transition-colors'>Products</Link>
            </li>
          </ul>
        </div>

        {/* Mobile Auth Buttons */}
        <div className='flex flex-col gap-3 pt-6 border-t border-gray-800'>
          {!isAuth ? (
            <>
              <Link
                to="/auth/page/login"
                onClick={toggleMenu}
                className='w-full text-center border border-gray-700 rounded bg-gray-800 hover:bg-gray-700 text-white py-2 font-medium transition-colors'
              >
                Login
              </Link>
              <Link
                to="/auth/page/register"
                onClick={toggleMenu}
                className='w-full text-center rounded bg-indigo-600 hover:bg-indigo-500 text-white py-2 font-medium transition-colors'
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/dashboard/home-overview"
                onClick={toggleMenu}
                className='w-full text-center border border-gray-700 rounded bg-gray-800 hover:bg-gray-700 text-white py-2 font-medium transition-colors'
              >
                Dashboard
              </Link>
              <button
                onClick={() => { setIsAuth(false); toggleMenu(); }}
                className='w-full text-center rounded bg-red-600 hover:bg-red-500 text-white py-2 font-medium transition-colors'
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar