import React, { useContext } from 'react';
import { IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import Quantity from './Quantity';
import { CartContext } from '../context/CartProvider';
const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(CartContext);
  return (
    <div className='flex gap-x-8'>
      <Link className='w-[80px] h-[80px]' to={`product/${item.id}`}>
        <img
          src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
          alt=''
          className='w-full'
        />
      </Link>

      <div className='flex-1'>
        <div className='flex gap-x-4 mb-3'>
          <Link className='' to={`product/${item.id}`}>
            {item.attributes.title}
          </Link>
          <div className='cursor-pointer text-2xl hover:text-accent'>
            <IoClose onClick={() => removeFromCart(item.id)} />
          </div>
        </div>

        <div className='flex items-center gap-x-12'>
          <div className='flex gap-x-4 mb-2'>
            <Quantity item={item} />
            <div className='text-accent text-xl'>
              $ {item.attributes.price * item.amount}
            </div>
          </div>
        </div>
        <div>
          <span className='text-accent'>
            $ {item.attributes.price} / product
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
