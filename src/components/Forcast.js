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
import moment from 'moment';

const Forcast = ({ airQuality }) => {
  Chart.register(CategoryScale);
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
      <div className=" bg-white rounded-2xl drop-shadow-sm mt-3 py-4 font-Roboto">
        <div className="flex justify-between pb-3 border-b border-solid border-gray-300 px-3">
          <h3 className="text-l font-medium text-gray-600 ">Forcast</h3>
          <small className=" font-light text-gray-400">
            {' '}
            Updated:
            {moment(new Date()).startOf('hours').fromNow()}
          </small>
        </div>
        <div className="pt-2 px-2">
          <Bar
            data={{
              labels: timeLabel,
              datasets: [
                {
                  label: 'time',
                  data: aqiData,
                  borderColor: borderColor,
                  backgroundColor: color,
                  borderWidth: 2,
                  borderRadius: 20,
                  borderSkipped: false,
                },
              ],
            }}
            options={{
              responsive: true,
              scales: {
                x: {
                  grid: {
                    display: false,
                  },
                  ticks: {
                    stepSize: 6,
                  },
                },
                y: {
                  grid: {
                    display: false,
                  },
                  min: 0,
                  max: 5,
                },
              },
              plugins: {
                legend: {
                  position: 'none',
                },
              },
            }}
            height={200}
            width={350}
          />
        </div>
      </div>
    );
  } else if (status === 'failed') {
    content = <p className="text-red-400 font-Roboto">{error}</p>;
  }

  return <div>{content}</div>;
};

export default Forcast;
