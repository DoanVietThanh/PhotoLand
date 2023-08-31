import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from './../hooks/useFetch';

const CategoryNav = () => {
  const { data } = useFetch('/categories');
  return (
    <aside className='hidden xl:flex'>
      <div className='bg-primary flex flex-col w-[286px] h-[500px] rounded-[8px] overflow-hidden'>
        <div className='bg-accent py-4 text-primary uppercase font-semibold flex justify-center items-center'>
          Browser Categories
        </div>
        <div className='flex flex-col gap-y-6 p-6'>
          {data?.map((category) => (
            <Link
              to={`/products/${category.id}`}
              key={category.id}
              className='cursor-pointer uppercase'
            >
              {category.attributes.title}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default CategoryNav;
