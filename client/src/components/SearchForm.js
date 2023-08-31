import React, { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
const SearchForm = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [isAnimating, setAnimating] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimating(false);
    }, 1000);
    return () => clearTimeout(timeout);
  });

  const handleSubmitSearch = (e) => {
    e.preventDefault(); // Prevent Reload page
    if (searchTerm.length > 0) {
      setSearchTerm('');
      navigate(`/search?query=${searchTerm}`);
    } else {
      setAnimating(true);
    }
  };

  return (
    <form
      className={`${
        isAnimating
          ? 'animate-shake border-4 border-red-500 rounded-[8px]'
          : 'animate-none'
      } w-full relative`}
      onSubmit={handleSubmitSearch}
    >
      <input
        onChange={(e) => setSearchTerm(e.target.value)}
        // required
        type='text'
        value={searchTerm}
        className='input w-full'
        placeholder='Search product ...'
      />
      <button
        type='submit'
        className='btn btn-accent absolute right-0 top-0 z-1 cursor-pointer rounded-tl-none rounded-bl-none'
      >
        <FiSearch className='text-3xl text-[#000]' />
      </button>
    </form>
  );
};

export default SearchForm;
