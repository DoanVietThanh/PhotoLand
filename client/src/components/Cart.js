import React, { useContext } from 'react';
import { IoArrowForward, IoCartOutline, IoClose } from 'react-icons/io5';
import { CartContext } from '../context/CartProvider';
import CartItem from './CartItem';

const Cart = () => {
  const { setIsOpen, cart, total, setCart } = useContext(CartContext);
  console.log('🚀 ~ file: Cart.js:6 ~ Cart ~ cart:', cart);

  return (
    <div className='w-full h-full px-4 text-white z-50 '>
      <div className='overflow-y-auto h-[80vh]'>
        <div className='text-4xl m-4 h-[60px] w-[60px] flex items-center justify-center'>
          <IoClose
            onClick={() => setIsOpen(false)}
            className='cursor-pointer w-full h-full z-20'
          />
        </div>

        <div className='flex flex-col gap-y-8 px-2'>
          {cart?.map((item, index) => (
            <CartItem key={index} item={item} />
          ))}
        </div>
      </div>

      {cart.length > 0 ? (
        <>
          <div className='px-6 py-10 flex flex-col'>
            <div className='flex justify-between text-xl'>
              <div className=''>Subtotal</div>
              <div className='text-accent'>
                {' '}
                $ {parseFloat(total).toFixed(2)}
              </div>
            </div>

            <div className='flex justify-between text-2xl'>
              <div>Total: </div>
              <div className='text-accent'>
                {' '}
                $ {parseFloat(total).toFixed(2)}
              </div>
            </div>
          </div>

          <div className='flex justify-between px-4'>
            <button
              onClick={() => setCart([])}
              className='uppercase btn btn-accent text-xl text-primary'
            >
              Clear Cart
            </button>
            <button className='flex gap-x-2 uppercase btn btn-accent text-xl text-primary'>
              Checkout <IoArrowForward />
            </button>
          </div>
        </>
      ) : (
        <div className='h-full absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center'>
          <div className='text-3xl text-accent text-center flex flex-col justify-center items-center gap-5'>
            <div>Empty Cart !</div>
            <div className='text-4xl'>
              <IoCartOutline />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
