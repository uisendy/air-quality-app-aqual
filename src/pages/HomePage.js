import React from 'react';
import { Link } from 'react-router-dom';
import { HiSearchCircle } from 'react-icons/hi';

import { fetchLocation } from '../redux/searchLocationsSlice';

const HomePage = () => {
  return (
    <div className=" max-w-[440px] w-[100vw] min-h-[100vh] mx-auto bg-gray-100">
      <Link to={'search'}>
        <HiSearchCircle />
      </Link>
    </div>
  );
};

export default HomePage;
