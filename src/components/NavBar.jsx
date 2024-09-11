import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const NavBar = () => {
  const { userLogout } = useContext(AuthContext);

  const handleSignOut = () => {
    userLogout();
  }

  return (
    <div>
      <nav className="navbar bg-white border-b border-gray-200">
        <div className="flex items-center justify-around my-2">
          <div className=''>
            <Link to={'/homestore/rockingchairs'} className="flex items-center">
              <img src="/assets/SignUpBanner.jpeg" alt="FurniFlex Logo" className="w-10 h-10 border rounded-2xl" />
              <span className="ml-2 text-xl font-bold">Furni<span className='text-[#4977EE]'>Flex</span></span>
            </Link>
          </div>
          <div>
            <ul className="flex space-x-8">
              <li>
                <Link to={'/homestore/rockingchairs'} className="font-medium p-4 hover:bg-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to={'/homestore/rockingchairs'} className="font-medium p-4 hover:bg-gray-300">
                  Products
                </Link>
              </li>
              <li>
                <Link to={'/homestore/rockingchairs'} className="font-medium p-4 hover:bg-gray-300">
                  Categories
                </Link>
              </li>
              <li>
                <Link to={'/homestore/rockingchairs'} className="font-medium p-4 hover:bg-gray-300">
                  Custom
                </Link>
              </li>
              <li>
                <Link to={'/homestore/rockingchairs'} 
                  className="font-medium p-4 hover:bg-gray-300"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center">
            <Link to={'/cart'} className="font-bold hover:bg-slate-300 p-4 text-black">Cart</Link>

            <button onClick={handleSignOut} className='ml-5 hover:bg-slate-300 font-medium p-4'>Logout</button>
          </div>

        </div>
      </nav>
    </div>
  );
};

export default NavBar;