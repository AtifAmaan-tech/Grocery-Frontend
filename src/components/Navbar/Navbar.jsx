import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { CgMenuMotion } from "react-icons/cg";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const[isScrolled , setIsScrolled] = useState(false);
  // const toggleMenu = () => {
  //   setShowMenu(!showMenu);
  // }

  useEffect( () => {

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  }, []);
  
  return (
    <header className={`bg-white fixed top-0 left-0 right-0 py-4 md:py-0 z-50 ${isScrolled ? 'shadow-lg' : ''}`}>
      <nav className="max-w-[1400px] mx-auto md:h-[14vh] px-5 md:px-10 flex justify-between items-center">
        {/* Main logo */}
        <a href="#" className="text-3xl font-semibold">
          ℱresh<span className="font-bold text-green-500 uppercase">𝓒</span>
          art
        </a>

        {/* Desktop Menu */}
        <ul className="md:flex items-centre gap-x-15 hidden ">
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-green-500"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-green-500"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#process"
              className="font-semibold tracking-wider text-zinc-800 hover:text-green-500"
            >
              Process
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-green-500"
            >
              Contact Us
            </a>
          </li>
        </ul>

        {/* Nav Action */}
        <div className="flex items-center gap-x-5">
          {/* Input Field */}
          <div className="md:flex p-1 border-2 border-green-500 rounded-full hidden">
            <input
              type="text"
              id="text"
              name="text"
              placeholder="search items"
              autoComplete="off"
              className="flex-1 h-[4vh] px-3 focus:outline-none"
            ></input>
            <button className="bg-green-500 text-white w-8 h-8 flex justify-center items-center rounded-full bg-gradient-to-b from-green-400 to-green-500">
              <FaSearch />
            </button>
          </div>
          <a href="#" className="text-zinc-800 text-2xl">
            <FaHeart />
          </a>
          <a href="#" className="text-zinc-800 text-2xl">
            <FaBagShopping />
          </a>

          {/* Hamburger */}
          <a href="#" className={"text-zinc-300 text-3xl md:hidden"} onClick={ () => setShowMenu(prev => !prev)}>
           { showMenu? <CgMenuMotion /> : <IoMenu />}
          </a>
        </div>

        {/* Mobile Menu */}
        <ul className={`flex flex-col py-5 items-center text-center md:hidden gap-y-12 bg-green-500/20 backdrop-blur-xl absolute top-19 transition-all duration-300 ${showMenu ? '-right-1/3': '-right-full -mr-6'} transform -translate-x-1/2 rounded-lg`}>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-green-500"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-green-500"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-green-500"
            >
              Process
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-green-500"
            >
              Contact Us
            </a>
          </li>

          <li className="flex mx-3 border-2 border-green-500 rounded-full md:hidden">
            <input
              type="text"
              id="text"
              name="text"
              placeholder="search items"
              autoComplete="off"
              className="flex-1 h-[4vh]  focus:outline-none"
            ></input>
            <button className="bg-green-500 text-white w-8 h-8 flex justify-center items-center rounded-full bg-gradient-to-b from-green-400 to-green-500">
              <FaSearch />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
