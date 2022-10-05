import React from 'react';
import { useSelector } from 'react-redux';
import {
  getSearchLocations,
  getStatus,
  getError,
} from '../redux/searchLocationsSlice';

const SearchResults = () => {
  const searchLocations = useSelector(getSearchLocations);
  const status = useSelector(getStatus);
  const error = useSelector(getError);

  let content;

  if (status === 'Loading') {
    content = <p>&quot,loading...&quot,</p>;
  } else if (status === 'succeeded') {
    content = (
      <ul>
        {searchLocations.map((location) => (
          <li key={location.id}>
            <p>{location.name}</p>
            <p>{location.state}</p>
            <small>{location.country}</small>
          </li>
        ))}
      </ul>
    );
  } else if (status === 'failed') {
    content = <p>{error}</p>;
  }

  return <div>{content}</div>;
};

export default SearchResults;
