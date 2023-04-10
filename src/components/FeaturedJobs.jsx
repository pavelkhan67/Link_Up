import React from 'react';
import { Link } from 'react-router-dom';
import JobDetails from './JobDetails';

const FeaturedJobs = ({ job }) => {
    const { id, logo, title, name, type, location, time, salary, description, responsibility, education, experiences, contact } = job;
    return (
        <div className='border-2 border-slate-200 p-5 text-left rounded-md'>
            <img className='w-28' src={logo} alt="" />
            <h2 className='text-xl font-semibold pt-5 pb-2'>{title}</h2>
            <p className='text-info'>{name}</p>
            <div className='flex gap-2 py-2'>
                <p className='border border-secondary px-2 rounded-md text-secondary'>{type}</p>
                <p className='border border-secondary px-2 rounded-md text-secondary'>{time}</p>
            </div>
            <div className='lg:flex gap-5 text-sm'>
                <p className=' flex gap-2 pt-2 lg:pb-5'><img src="/public/location.png" alt="" />{location}</p>
                <p className=' flex gap-2 pt-2 pb-5'><img src="/public/money.png" alt="" />Salary: {salary}</p>
            </div>
            <Link to={`/job/${id}`}><button className='btn btn-secondary'>View Details</button></Link>
        </div>
    );
};

export default FeaturedJobs;