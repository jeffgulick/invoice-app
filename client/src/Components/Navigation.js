import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiAlignJustify } from 'react-icons/fi';

const Navigation = () => {
  const [show, setShow] = useState(false);

  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <button className='nav-btn' onClick={() => setShow(!show)}>
            <FiAlignJustify />
          </button>
        </div>

        <div className={show ? 'nav-links show-links' : 'nav-links'}>
          <NavLink
            to='/'
            className='nav-link'
            exact
            activeClassName='active-link'
            onClick={() => setShow(false)}
          >
            Dashboard
          </NavLink>
          <NavLink
            to='/invoice'
            className='nav-link'
            activeClassName='active-link'
            onClick={() => setShow(false)}
          >
            Invoice
          </NavLink>
          {/* <NavLink
            to='/Providers'
            className='nav-link'
            activeClassName='active-link'
          >
            Providers
          </NavLink> */}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
