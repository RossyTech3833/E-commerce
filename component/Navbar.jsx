
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoCartOutline, IoPersonOutline } from "react-icons/io5";
import { CiHome } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { useCart } from './CartContext';
import { auth } from '../src/firebase';

function Navbar() {
  const user = auth.currentUser;
  const { cart } = useCart();
  const [searchText, setSearchText] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchText.trim() !== '') {
      const query = searchText.toLowerCase();
      setSearchText("");
      navigate(`/search/${encodeURI(query)}`);
    }
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen); // Toggle the menu
  };

  const handleLinkClick = () => {
    setMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <nav className='bg-white fixed top-0 left-0 w-full z-50 shadow-md'>
      <div className='flex justify-between items-center p-4 md:px-10'>
        <h1 className='font-serif text-orange-400 text-lg md:text-2xl'>Roses's World</h1>

        {/* Mobile Hamburger Icon */}
        <button onClick={handleMenuToggle} className='md:hidden text-2xl text-orange-500'>
          <GiHamburgerMenu />
        </button>

        {/* Desktop Nav */}
        <div className='hidden md:flex items-center gap-10'>
          <div className='flex items-center gap-2'>
            <input
              type='text'
              placeholder='Search...'
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className='border border-orange-400 outline-none px-2 py-1 w-40 md:w-64'
            />
            <button
              onClick={handleSearch}
              className='bg-orange-400 text-white px-3 py-1 rounded-sm'
            >
              Search
            </button>
          </div>

          <Link to="/" className='flex items-center gap-2 font-bold'>
            <CiHome className='text-xl' />
            <span>Home</span>
          </Link>

          {user ? (
            <Link to="/Acount" className='flex items-center gap-2 font-bold'>
              <IoPersonOutline className='text-xl' />
              <span>Acount</span>
            </Link>
          ) : (
            <Link to="/Signin" className='flex items-center gap-2 font-bold'>
              <IoPersonOutline className='text-xl' />
              <span>Signin</span>
            </Link>
          )}

          <Link to="/Cart" className='flex items-center gap-2 font-bold text-orange-400'>
            <IoCartOutline className='text-2xl animate-bounce' />
            <span>Cart ({cart.length})</span>
          </Link>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className='md:hidden bg-white px-4 pb-4 flex flex-col gap-4'>
          <div className='flex gap-2'>
            <input
              type='text'
              placeholder='Search...'
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className='border border-orange-400 outline-none px-2 py-1 md:w-full sm:w-40'
            />
            <button
              onClick={handleSearch}
              className='bg-orange-400 text-white px-3 py-1 rounded-sm'
            >
              Go
            </button>
          </div>

          <Link to="/" className='flex items-center gap-2 font-bold' onClick={handleLinkClick}>
            <CiHome className='text-xl' />
            <span>Home</span>
          </Link>

          {user ? (
            <Link to="/Acount" className='flex items-center gap-2 font-bold' onClick={handleLinkClick}>
              <IoPersonOutline className='text-xl' />
              <span>Acount</span>
            </Link>
          ) : (
            <Link to="/Signin" className='flex items-center gap-2 font-bold' onClick={handleLinkClick}>
              <IoPersonOutline className='text-xl' />
              <span>Signin</span>
            </Link>
          )}

          <Link to="/Cart" className='flex items-center gap-2 font-bold text-orange-400'
           onClick={handleLinkClick}>
            <IoCartOutline className='text-2xl animate-bounce' />
            <span>Cart ({cart.length})</span>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
