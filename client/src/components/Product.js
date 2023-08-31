import React from 'react';
import { Link } from 'react-router-dom';
const Product = ({ product }) => {
  const linkImg = `http://localhost:1337${product.attributes.image.data.attributes.url}`;
  return (
    <div>
      <Link to={`/product/${product.id}/`}>
        <div className='group grad w-full h-[362px] rounded-[16px] overflow-hidden relative'>
          {product.attributes.isNew && (
            <div className='absolute bg-accent right-4 top-4 px-3 py-1 rounded-full text-[12px] z-10'>
              New
            </div>
          )}
          <div className='w-full h-[200px] flex items-center justify-center relative'>
            <img
              src={linkImg}
              alt='camera'
              className='w-[160px] h-[160px] group-hover:scale-90 transition-all'
            />
          </div>

          <div className='p-3'>
            <div className='text-sm text-accent capitalize mb-2'>
              {product.attributes.categories.data[0].attributes.title}
            </div>
            <div className='truncate text-[15px] mb-4 lg:mb-9'>
              {product.attributes.title}
            </div>
            <div className='text-lg text-accent'>
              $ {product.attributes.price}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
// text-ellipsis
