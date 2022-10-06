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

  useEffect(() => {
    if (status === 'idle' && Object.keys(airQuality).length) {
      dispatch(fetchForcastAq(airQuality.location));
    }
  }, [airQuality]);

  return <div>{content}</div>;
};

export default Forcast;
