import React, { Component } from 'react';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items,
    };
  }

  render() {
    const items = this.state.items.map((item) => {
      return (
        <NavItem active={item.isActive} name={item.name} href={item.href} />
      );
    });
    return (
      <ul className="nav nav-pills">
        {items}
      </ul>
    );
  }
}

function NavItem(props) {
  return (
    <li className="nav-item">
      <a className={props.active ? 'nav-link active' : 'nav-link'} href={props.href}>{props.name}</a>
    </li>
  );
}
