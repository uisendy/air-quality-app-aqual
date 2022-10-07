import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { HiSearchCircle } from 'react-icons/hi';
import DetailsSummary from '../components/DetailsSummary';
import {
  fetchAirQuality,
  getAirQuality,
  getError,
  getStatus,
} from '../redux/airQualitySlice';
import { otherLocation } from '../data/apiData';

const HomePage = () => {
  const location = {
    name: 'Lagos',
    lat: 6.4550575,
    lon: 3.3941795,
    country: 'NG',
    state: 'Lagos State',
    favorite: false,
  };

  const [addRequestStatus, setAddRequestStatus] = useState('idle');
  const dispatch = useDispatch();
  const airQuality = useSelector(getAirQuality);
  const status = useSelector(getStatus);
  const error = useSelector(getError);

  const handleShowDetails = (location) => {
    if (addRequestStatus === 'idle') {
      try {
        setAddRequestStatus('pending');
        dispatch(fetchAirQuality(location)).unwrap();
      } catch (err) {
        throw new Error(err);
      } finally {
        setAddRequestStatus('idle');
      }
    }
  };

  useEffect(() => {
    if (addRequestStatus === 'idle') {
      try {
        setAddRequestStatus('pending');
        dispatch(fetchAirQuality(location)).unwrap();
      } catch (err) {
        throw new Error(err);
      } finally {
        setAddRequestStatus('idle');
      }
    }
  }, []);

  return (
    <div className="home__section relative min-h-screen px-4">
      <nav className="flex justify-between p-4 items-center ">
        <Link to="/">
          <div className="flex flex-col border border-solid border-gray-400 rounded-lg p-3">
            <p className=" font-Montserrat text-gray-400 font-black text-3xl leading-none tracking-widest">
              AQAL
            </p>
            <small className="text-orange-400 font-Roboto text-sm text-gray-400 uppercase leading-none tracking-tighter">
              air quality app
            </small>
          </div>
        </Link>
        <Link to="search">
          <HiSearchCircle className="text-4xl text-gray-400 " />
        </Link>
      </nav>

      
  );
};

export default HomePage;
