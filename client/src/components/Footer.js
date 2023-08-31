import React from 'react';

import { FaYoutube, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='py-16 bg-primary'>
      <div className='container mx-auto'>
        <div className='text-center'>
          <h2 className='h2 uppercase mb-6 font-semibold'>
            Subscribe to our newsletter
          </h2>
          <p className='text-white/70'>
            Be the first to get the latest news about trends, promotions and
            much more!
          </p>
        </div>

        <form action='' className='py-6 w-full flex'>
          <input
            type='text'
            className='input rounded-none'
            placeholder='Your email address...'
          />
          <button className='btn btn-accent rounded-none'>Join</button>
        </form>

        <div className='flex justify-around text-white/50'>
          <a href='/' className='hover:text-white transition-all'>
            Returns policy
          </a>

          <a href='/' className='hover:text-white transition-all'>
            Track your order
          </a>

          <a href='/' className='hover:text-white transition-all'>
            Shipping and delivery
          </a>
        </div>

        <div className='flex gap-x-4 text-white/50 justify-center py-6'>
          <a href='/' className='hover:text-white transition-all'>
            <FaYoutube />
          </a>

          <a href='/' className='hover:text-white transition-all'>
            <FaFacebook />
          </a>

          <a href='/' className='hover:text-white transition-all'>
            <FaInstagram />
          </a>

          <a href='/' className='hover:text-white transition-all'>
            <FaTwitter />
          </a>
        </div>
      </div>

      <div className='container mx-auto pt-8 border-t border-t-white/10'>
        <div className='text-center text-sm text-white/60'>
          Copyright &copy; Đoàn Viết Thanh - 2023
        </div>
      </div>
    </footer>
  );
};

export default Footer;
