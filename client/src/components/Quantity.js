import React, { useContext } from 'react';
import { CartContext } from '../context/CartProvider';

const Quantity = ({ item }) => {
  const { handleInput } = useContext(CartContext);

  return (
    <div className='flex gap-6 items-center'>
      <input
        onChange={(e) => handleInput(e, item.id)}
        type='number'
        min={1}
        required
        placeholder={`${item.amount}`}
        className='text-primary placeholder:text-primary h-12 rounded-md p-4 w-[120px] outline-accent'
      />
    </div>
  );
};

export default Quantity;
