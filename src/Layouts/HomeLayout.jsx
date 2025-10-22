import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftAside from '../HomePage/LeftAside';
import RightAside from '../HomePage/RightAside';

const HomeLayout = () => {
    return (
        <div>
            <section>
                <section id='headerSection'>
                    <Header></Header>
                    <LatestNews></LatestNews>
                </section>
                <nav>
                    <Navbar></Navbar>
                </nav>
                <main className='container mx-auto grid grid-cols-12 py-3'>
                    <aside className='col-span-3 sticky top-0 h-fit' >
                        <LeftAside></LeftAside>
                    </aside>
                    <section className='col-span-6'>
                        <Outlet></Outlet>
                    </section>
                    <aside className='col-span-3 sticky top-0 h-fit'>
                        <RightAside></RightAside>
                    </aside>
                </main>
            </section>
        </div>
    );
};

export default HomeLayout;