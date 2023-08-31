import React from 'react';
import { useLocation } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import CategoryNav from '../components/CategoryNav';
import Product from './../components/Product';

const Search = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('query');
  const { data } = useFetch(
    `/products?populate=*&filters[title][$contains]=${searchTerm}`
  );
  return (
    <div className='mb-[30px] pt-40 lg:pt-4'>
      <div className='container mx-auto flex gap-x-4'>
        <CategoryNav />
        <div>
          <div className='text-2xl py-6 uppercase lg:py-0 sm:text-center'>
            {data?.length > 0
              ? `${data.length} results for '${searchTerm}'`
              : 'Not Found Products'}
          </div>
          <div className='grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4 pt-8'>
            {data?.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
