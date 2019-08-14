import React from 'react';
import ReactDOM from 'react-dom';
import Menu from 'components/Menu';
import 'css/bootstrap.min.css';

const navItems = [
  {
    name: 'Home',
    isActive: true,
    href: '/',
  },
  {
    name: 'Login',
    isActive: false,
    href: '/login.html',
  },
  {
    name: 'Register',
    isActive: false,
    href: '/register.html',
  },
];

ReactDOM.render(<Menu items={navItems} />, document.getElementById('menu'));
