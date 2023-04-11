import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobCategory = ({category}) => {

    const {jobs, logo, name} = category

    return (
        <div className='bg-violet-50 text-left p-5 rounded-md'>
            <img className='bg-violet-200 rounded-sm p-1 w-10 h-10' src={logo} alt="" />
            <p className='pt-5 pb-2 font-semibold'>{name}</p>
            <p className='text-sm text-info'>{jobs}</p>
        </div>
    );
};

export default JobCategory;