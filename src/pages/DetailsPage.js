import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const DetailsPage = () => {
  return (
    <div>
      <Link to={'/'}>
        <AiOutlineCloseCircle />
      </Link>
      <h2>New York</h2>
    </div>
  );
};

export default DetailsPage;
