import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  getSearchLocations,
  getStatus,
  getError,
} from '../redux/searchLocationsSlice';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchAirQuality } from '../redux/airQualitySlice';

const SearchResults = ({}) => {
  const [addRequestStatus, setAddRequestStatus] = useState('idle');
  const dispatch = useDispatch();
  const searchLocations = useSelector(getSearchLocations);
  const status = useSelector(getStatus);
  const error = useSelector(getError);

  let content;

  if (status === 'Loading') {
    content = <p>&quot,loading...&quot,</p>;
  } else if (status === 'succeeded') {
    content = (
      <ul className="flex flex-col gap-3 h-full">
        <h2 className="text-2xl font-bold pb-6 text-center ">Search result</h2>
        {searchLocations.length === 0 ? (
          <p className=" pt-20 text-center ">
            <span className=" font-bold text-lg text-white bg-red-400 px-2 py-1 rounded-full">
              No result!
            </span>{' '}
            <br /> Check you search details
          </p>
        ) : (
          searchLocations.map((location) => (
            <Link to={'details'} key={location.id}>
              <li
                className=" rounded-xl bg-white h-20 px-10 py-2 flex flex-col justify-center items-start drop-shadow"
                onClick={() => queryAirQuality(location.lat, location.lon)}
              >
                <p className=" font-bold text-lg ">{location.name}</p>
                <p>
                  {location.state}
                  {location.state ? ' - ' : ''}
                  {location.country}
                </p>
              </li>
            </Link>
          ))
        )}
      </ul>
    );
  } else if (status === 'failed') {
    content = <p>{error}</p>;
  }

  return <div className="w-[87%] font-Roboto mx-auto pt-10 ">{content}</div>;
};

export default SearchResults;
