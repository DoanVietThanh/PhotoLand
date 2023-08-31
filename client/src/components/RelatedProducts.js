import React from 'react';
import useFetch from '../hooks/useFetch';
import ProductSlider from './ProductSlider';

const RelatedProducts = ({ cateTitle, currentProduct }) => {
  const { data } = useFetch(
    `/products?populate=*&filters[categories][title]=${cateTitle}`
  );

  if (!data) {
    return <h2>Loading ...</h2>;
  }

  return (
    <div className='mb-16'>
      <div className='container mx-auto'>
        <h2 className='h2 mb-6 text-center xl:text-left'>Related Product</h2>
        <ProductSlider data={data} />
      </div>
    </div>
  );
};

export default RelatedProducts;
