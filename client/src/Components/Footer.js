import React from 'react';

const Footer = () => {
  return (
    <footer className='page-footer'>
      <p>
        &copy; {new Date().getFullYear()} <span>Something</span>. Built with{' '}
        <a href='https://www.reactjs.org/'>React</a>
      </p>
    </footer>
  );
};

export default Footer;
