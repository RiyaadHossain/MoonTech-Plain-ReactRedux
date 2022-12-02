import React from "react";
import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { IoIosListBox } from "react-icons/io";
import { useSelector } from "react-redux";

const Navbar = () => {

  const cart = useSelector(state => state.cart)

  return (
    <nav className='h-14 bg-indigo-200 rounded-full m-2 max-w-7xl mx-auto px-5'>
      <ul className='h-full  mx-auto flex justify-between items-center gap-3 font-semibold text-indigo-900'>
        <h1 className='flex-1'>Moon Tech</h1>
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/top-rated'>
          <li>Top Rated</li>
        </Link>
        <li>FFF
          <Link to='/about'>About</Link>
        </li>
        <Link to='/'>
          <li title='Wishlist' className='bg-indigo-500 p-2 rounded-full'>
            <IoIosListBox className='text-white' />
          </li>
        </Link>
        <Link to='/cart'>
          <li title='cart' className='bg-indigo-500 relative p-2 rounded-full'>
            {cart.length > 0 && <div className=" absolute bottom-3 left-5">
              <div className="grid place-items-center bg-teal-500 rounded-full text-white w-6 h-6">{cart.length}</div>
            </div>}
            <BsFillCartFill className='text-white ' />
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
