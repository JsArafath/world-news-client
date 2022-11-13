import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../Hook/UseTitle';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Home = () => {
    const allNews = useLoaderData();
    // console.log(allNews)
    useTitle('Home')
    return (
        <div>
            <h1>World News Home: {allNews.length}</h1>
            {
                allNews.map(news => <NewsSummaryCard
                    key={news._id}
                    news={news}
                ></NewsSummaryCard>)
            }
        </div>
    );
};

export default Home;