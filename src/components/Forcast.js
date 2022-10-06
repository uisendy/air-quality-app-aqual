import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getforcastAq,
  getError,
  getStatus,
  fetchForcastAq,
} from '../redux/forcastAqSlice';
import { handleColorMap } from '../data/apiData';
import { handleBorderColorMap } from '../data/apiData';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
Chart.register(CategoryScale);

const Forcast = ({ airQuality }) => {
  const dispatch = useDispatch();

  const forcastAq = useSelector(getforcastAq);
  const status = useSelector(getStatus);
  const error = useSelector(getError);

  const aqiData = [];
  const timeLabel = [];
  forcastAq?.map(
    (data) => (aqiData.push(data.main?.aqi), timeLabel.push(data.time)),
  );

  const color = handleColorMap(aqiData);
  const borderColor = handleBorderColorMap(aqiData);

  useEffect(() => {
    if (status === 'idle' && Object.keys(airQuality).length) {
      dispatch(fetchForcastAq(airQuality.location));
    }
  }, [airQuality]);

  let content;

  if (status === 'loading') {
    content = <p className=" text-gray-400 font-Roboto">Loading...</p>;
  } else if (status === 'succeeded') {
    content = (
      <div className="">
        <h3 className="text-xl font-medium pb-1 pt-3 text-center ">Forcast</h3>
        <p>Time</p>
      </div>
    );
  } else if (status === 'failed') {
    content = <p className="text-red-400 font-Roboto">{error}</p>;
  }

  return <div>{content}</div>;
};

export default Forcast;
