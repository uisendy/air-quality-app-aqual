import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import SearchBar from '../components/SearchBar';
import { fetchLocation } from '../redux/searchLocationsSlice';
import SearchResults from '../components/SearchResults';

const SearchPage = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [addRequestStatus, setAddRequestStatus] = useState('idle');

  return (
    <div className=" relative max-w-[440px] w-[100vw] min-h-[100vh] mx-auto bg-gray-100">
      <SearchBar
        handleSearch={handleSearch}
        search={search}
        setSearch={setSearch}
      />
      <SearchResults search={search} />
    </div>
  );
};

export default SearchPage;
