import React from 'react';
import { IoIosClose } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAirQuality, getError, getStatus } from '../redux/airQualitySlice';
import DetailsSummary from '../components/DetailsSummary';
import Forcast from '../components/Forcast';
import ApComponents from '../components/ApComponents';

const DetailsPage = () => {
  const airQuality = useSelector(getAirQuality);
  const status = useSelector(getStatus);
  const error = useSelector(getError);

  return (
    <div className="relative max-w-[440px] w-[100vw] min-h-[100vh] mx-auto bg-gray-100">
      <Link to="/">
        <div className="absolute font-bold top-4 left-4 text-black text-2xl border border-solid border-gray-300 rounded-full p-1">
          <IoIosClose />
        </div>
      </Link>
      <div className="px-5 py-16">
        <DetailsSummary
          airQuality={airQuality}
          status={status}
          error={error}
          summary
        />
        <Forcast airQuality={airQuality} />
        <ApComponents airQuality={airQuality} />
      </div>
    </div>
  );
};

export default DetailsPage;
