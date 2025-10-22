import React from 'react';
import { useLoaderData } from 'react-router';
import NewsCard from '../components/NewsCard';

const CategoryNews = () => {
    const data = useLoaderData();
    return (
        <div className='p-3'>
            {
               
                data.data.map(news=>(
                    <NewsCard key={news._id} news={news}></NewsCard>
                ))
            }
        </div>
    );
};

export default CategoryNews;