import React from 'react';
import ReactDOM from 'react-dom';
import Menu from 'components/Menu';
import Table from 'components/Table';
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

const formActions = {
  add: '/',
  update: '/',
  delete: '/',
};


ReactDOM.render(<Menu items={navItems} />, document.getElementById('menu'));

fetch('/allUsers')
  .then(response => response.json())
  .then((data) => {
    ReactDOM.render(<Table
      border="1"
      tableData={data.tableData}
      tableHeaders={data.tableHeaders}
      caption="All Users"
      hasForm="False"
      formActions={formActions}
    />, document.getElementById('users'));
  });
