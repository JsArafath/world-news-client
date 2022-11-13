import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../Hook/UseTitle';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Catagory = () => {
    const categories = useLoaderData();
    // console.log(categories)
    useTitle('Category')
    return (
        <div>
            <h2>This is category {categories.length}</h2>
            {
                categories.map(news => <NewsSummaryCard
                    key={news._id}
                    news={news}
                ></NewsSummaryCard>)
            }
        </div>
    );
};

export default Catagory;