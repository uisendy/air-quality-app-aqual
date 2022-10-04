import React from 'react';
import { useSelector } from 'react-redux';
import { getAirQuality } from '../redux/airQualitySlice';

const DetailsSummary = () => {
  const airQualityData = useSelector(getAirQuality);
  const { main, components } = airQualityData.list[0];

  return (
    <div>
      <div>{main.aqi}</div>
      <p>{components.co}</p>
      <p>{components.no}</p>
      <p>{components.no2}</p>
    </div>
  );
};

export default DetailsSummary;
