import React from 'react';
import { NavLink } from 'react-router-dom';
export const Navbar = () => (
    <nav className='navbar nav-bar-dark navbar-expand-lg bg-primary'>
        <div className='navbar-brand'>
            Note App
        </div>
        <ul className="navbar-nav">
        <li className="nav-item">
            <NavLink
                className="nav-link"
                to='/'
                exact
                style={{color: 'white'}}
            >
                Home
            </NavLink>
        </li>
        <li className='nav-item'>
            <NavLink
                className="nav-link"
                to='/about'
                style={{color: 'white'}}
            >
                About
            </NavLink>
        </li>    
      </ul>
    </nav>
)