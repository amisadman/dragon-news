import React from 'react';
import Login from '../components/Login';
import FindUs from '../components/FindUs';
import QZone from '../components/Qzone';

const RightAside = () => {
    return (
        <div className='flex flex-col gap-5'>
           <Login></Login>
           <FindUs></FindUs>
           <QZone></QZone>
        </div>
    );
};

export default RightAside;