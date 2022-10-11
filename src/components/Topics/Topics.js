import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';

const Topics = () => {
    const {data} = useLoaderData();
    return (
        <div>
           <Banner></Banner>
           <h2>{data.length}</h2>
        </div>
    );
};

export default Topics;