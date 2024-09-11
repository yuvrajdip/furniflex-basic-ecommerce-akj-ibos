import React from 'react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';
import SideLayout from '../components/SideLayout';

const HomeStore = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className='flex'>
        <div className='w-[25%]'>
          <SideLayout></SideLayout>
        </div>
        <div className='w-[70%] m-7'>
        <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default HomeStore;