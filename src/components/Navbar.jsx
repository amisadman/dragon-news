import React from 'react';
import { NavLink } from 'react-router';
import logo from "../assets/user.png"

const Navbar = () => {
    return (
        <div className='flex justify-between container mx-auto '>
            <div className='flex-1'></div>
            <nav className='flex justify-center items-center gap-2 flex-1'>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </nav>
            <div className='flex justify-end items-center flex-1 gap-2'>
                <img src={logo} alt="User Icon" />
                <button className='btn btn-primary py-2'>Login</button>

            </div>

        </div>
    );
};

export default Navbar;