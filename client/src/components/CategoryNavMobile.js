import React from 'react';
import { FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const CategoryNavMobile = ({ setCatNavMobile }) => {
  const { data } = useFetch('/categories');

  return (
    <div className='w-full h-full bg-primary p-8'>
      <div
        onClick={() => setCatNavMobile(false)}
        className='flex justify-end text-3xl mb-8 cursor-pointer'
      >
        <FiX />
      </div>
      <div className='flex flex-col gap-y-8'>
        {data?.map((category) => (
          <Link
            key={category.id}
            to={`products/${category.id}`}
            className='uppercase font-medium'
          >
            {category.attributes.title} camera
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryNavMobile;
