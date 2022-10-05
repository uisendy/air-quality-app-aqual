import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import SearchBar from '../components/SearchBar';

import { fetchLocation } from '../redux/searchLocationsSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [addRequestStatus, setAddRequestStatus] = useState('idle');

  const handleSearch = (e) => {
    e.preventDefault();
    if (addRequestStatus === 'idle') {
      try {
        setAddRequestStatus('pending');
        dispatch(fetchLocation(search)).unwrap();
        setSearch('');
      } catch (err) {
        throw new Error(err);
      } finally {
        setAddRequestStatus('idle');
      }
    }
  };

  return (
    <div className="w-[420px]">
      <SearchBar
        handleSearch={handleSearch}
        search={search}
        setSearch={setSearch}
      />
    </div>
  );
};

export default HomePage;
