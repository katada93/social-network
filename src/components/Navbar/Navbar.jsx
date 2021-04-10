import React from 'react';
import { NavLink } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className='sidebar'>
      <ListGroup style={{ width: '100%' }}>
        <ListGroup.Item variant='primary'>
          <NavLink activeClassName='active-page' to='/profile'>
            Profile
          </NavLink>
        </ListGroup.Item>
        <ListGroup.Item variant='primary'>
          <NavLink activeClassName='active-page' to='/messages'>
            Messages
          </NavLink>
        </ListGroup.Item>
        <ListGroup.Item variant='primary'>
          <NavLink activeClassName='active-page' to='/news'>
            News
          </NavLink>
        </ListGroup.Item>
        <ListGroup.Item variant='primary'>
          <NavLink activeClassName='active-page' to='/music'>
            Music
          </NavLink>
        </ListGroup.Item>
        <ListGroup.Item variant='primary'>
          <NavLink activeClassName='active-page' to='/settings'>
            Settings
          </NavLink>
        </ListGroup.Item>
        <ListGroup.Item variant='primary'>
          <NavLink activeClassName='active-page' to='/users'>
            Users
          </NavLink>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default Navbar;
