import React from 'react';
import { Link } from 'gatsby';

const Navbar = () => {
  const navArray =
    [
      {
        list: 'Home',
        link: '/',
      },
      {
        list: 'Blog',
        link: '/blog/',
      },
      {
        list: 'Products',
        link: '/products/',
      },

    ]
  return (
    <nav>
      <ul>
        {navArray.map((item, index) => (
          <li key={index}>
            <Link to={item.link}>{item.list}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar;
