"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setIsNavigating(false);
    setIsMenuOpen(false);
  }, [pathname, searchParams]);

  useEffect(() => {
    if (isNavigating) {
      const timer = setTimeout(() => {
        setIsNavigating(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isNavigating]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (href) => {
    if (pathname !== href) {
      setIsNavigating(true);
    }
    if (isMenuOpen) {
      toggleMenu();
    }
  };

  return (
    <nav className='bg-purple-700 text-white relative'>
      <div className='flex justify-between lg:justify-around items-center px-4 py-4 lg:py-0 min-h-16'>
        <div className="logo font-bold text-xl sm:text-2xl">
            <Link href={"/"}>SnapLink</Link>
        </div>
        
        {/* Hamburger Icon */}
        <button 
          onClick={toggleMenu} 
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 z-50"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
            <ul className='flex flex-row items-center justify-center gap-4 text-base'>
                <Link href={"/"} onClick={() => handleNavigation("/")} className="hover:text-purple-300 transition-colors"><li>Home</li></Link>
                <Link href={"/about"} onClick={() => handleNavigation("/about")} className="hover:text-purple-300 transition-colors"><li>About</li></Link>
                <Link href={"/shorten"} onClick={() => handleNavigation("/shorten")} className="hover:text-purple-300 transition-colors"><li>Shorten</li></Link>
                <Link href={"/contact"} onClick={() => handleNavigation("/contact")} className="hover:text-purple-300 transition-colors"><li>Contact Us</li></Link>
                <li className='flex flex-row justify-center items-center gap-3'>
                    <Link href={"/shorten"} onClick={() => handleNavigation("/shorten")}><button className='bg-purple-400 px-4 py-1 rounded-2xl font-bold cursor-pointer hover:bg-purple-500 transition-colors'>Try now</button></Link>
                    <Link href={"/github"} onClick={() => handleNavigation("/github")}><button className='bg-purple-400 px-4 py-1 rounded-2xl font-bold cursor-pointer hover:bg-purple-500 transition-colors'>Github</button></Link>
                </li>
            </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className='flex flex-col items-center justify-center gap-4 pb-4 text-sm sm:text-base'>
            <Link href={"/"} onClick={() => handleNavigation("/")} className="hover:text-purple-300 transition-colors"><li>Home</li></Link>
            <Link href={"/about"} onClick={() => handleNavigation("/about")} className="hover:text-purple-300 transition-colors"><li>About</li></Link>
            <Link href={"/shorten"} onClick={() => handleNavigation("/shorten")} className="hover:text-purple-300 transition-colors"><li>Shorten</li></Link>
            <Link href={"/contact"} onClick={() => handleNavigation("/contact")} className="hover:text-purple-300 transition-colors"><li>Contact Us</li></Link>
            <li className='flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-3 w-full px-4'>
                <Link href={"/shorten"} onClick={() => handleNavigation("/shorten")} className="w-full sm:w-auto"><button className='bg-purple-400 px-4 py-2 rounded-2xl font-bold cursor-pointer hover:bg-purple-500 transition-colors w-full sm:w-auto'>Try now</button></Link>
                <Link href={"/github"} onClick={() => handleNavigation("/github")} className="w-full sm:w-auto"><button className='bg-purple-400 px-4 py-2 rounded-2xl font-bold cursor-pointer hover:bg-purple-500 transition-colors w-full sm:w-auto'>Github</button></Link>
            </li>
        </ul>
      </div>

      {/* Loading Bar */}
      {isNavigating && (
        <div className="absolute bottom-0 left-0 w-full h-1 bg-purple-900 overflow-hidden">
          <div className="h-full bg-purple-300 animate-pulse" 
               style={{
                 animation: 'loading 1.5s ease-in-out infinite',
                 width: '40%'
               }}>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar;
