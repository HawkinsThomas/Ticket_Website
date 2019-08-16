import React from 'react';
import ReactDOM from 'react-dom';
import Menu from 'components/Menu';
import Table from 'components/Table';
import 'css/bootstrap.min.css';

const navItems = [
  {
    name: 'Home',
    isActive: false,
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
  {
    name: 'Create Ticket',
    isActive: true,
    href: '/createTicket.html',
  },
  {
    name: 'My Tickets',
    isActive: false,
    href: '/myTickets.html',
  },
];

ReactDOM.render(<Menu items={navItems} />, document.getElementById('menu'));
