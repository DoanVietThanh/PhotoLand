import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from './../hooks/useFetch';
import CategoryNav from './../components/CategoryNav';
import Product from '../components/Product';

const Products = () => {
  const { id } = useParams();
  const { data } = useFetch(
    `/products?populate=*&filters[categories][id]=${id}`
  );
  return (
    <div className='mb-16 pt-40 lg:pt-0'>
      <div className='container mx-auto'>
        <div className='flex gap-4'>
          <CategoryNav />
          <main className=''>
            <div className='uppercase text-xl pb-4 pt-4 lg:pt-0'>
              {data && data[0]?.attributes.categories.data[0].attributes.title}{' '}
              Camera
            </div>
            <div className='grid grid-cols-2 gap-4 lg:grid-cols-4 '>
              {data?.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Products;
