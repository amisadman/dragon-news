import React from 'react';
import logo from "../assets/logo.png"
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-2'>
            <img className='w-[350px]' src={logo} alt="Dragon News Logo" />
            <p>Journalism Without Fear or Favour</p>
            <p className='font-semibold text-accent'>{format(new Date(),"EEEE, MMMM MM, yyyy")}</p>
        </div>
    );
};

export default Header;