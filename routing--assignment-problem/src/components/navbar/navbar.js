import React from 'react';
import {NavLink} from 'react-router-dom';
import './navbar.css'

const navbar = (props) => {

    return (
        <div className="Navbar">
            <header>
                <nav>
                    <ul>
                        <li><NavLink to="/users">Users</NavLink></li>
                        <li><NavLink to="/courses">Courses</NavLink></li>
                    </ul>
                </nav>
            </header>
        </div>
    );

}

export default navbar;