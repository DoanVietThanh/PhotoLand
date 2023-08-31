import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import RelatedProducts from './../components/RelatedProducts';
import { CartContext } from '../context/CartProvider';

const ProductDetails = () => {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  const { data } = useFetch(`/products?populate=*&filters[id]=${id}`);
  if (!data) {
    return <h2>Loading...</h2>;
  }
  const cateTitle = data[0].attributes.categories.data[0].attributes.title;
  return (
    <div className='mb-16 pt-44 lg:pt-[30px] xl:pt-0'>
      {data && (
        <div className='container mx-auto'>
          <div className='flex flex-col lg:flex-row gap-[30px] mb-[30px]'>
            <div
              className='flex-1 lg:max-w-[40%] lg:h-[540px] grad rounded-lg 
          flex justify-center items-center'
            >
              <img
                alt='product'
                src={`http://localhost:1337${data[0].attributes.image.data.attributes.url}`}
                className='w-full max-w-[80%]'
              />
            </div>

            <div className='flex-1 bg-primary p-12 xl:p-20 rounded-lg flex flex-col justify-center'>
              <div className='uppercase text-accent text-lg font-medium mb-2'>
                {data[0].attributes.categories.data[0].attributes.title} camera
              </div>
              <h2 className='h2 mb-4 text-ellipsis'>
                {data[0].attributes.title}
              </h2>
              <p className=' mb-12'>{data[0].attributes.description}</p>
              <div className='flex items-center gap-x-8 lg:justify-between'>
                <div className='text-xl text-accent font-semibold'>
                  Price: ${data[0].attributes.price}
                </div>
                <button
                  onClick={() => addToCart(data[0], data[0].id)}
                  className='btn btn-accent'
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>

          <RelatedProducts cateTitle={cateTitle} currentProduct={data} />
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
