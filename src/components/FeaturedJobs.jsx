import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedJobs = ({ job }) => {
    const { id, logo, title, name, type, location, time, salary} = job;
    return (
        <div className='border-2 border-slate-200 p-5 text-left rounded-md relative'>
            <img className='w-32 h-12' src={logo} alt="" />
            <h2 className='text-xl font-semibold pt-5 pb-2'>{title}</h2>
            <p className='text-info'>{name}</p>
            <div className='flex gap-2 py-2'>
                <p className='border border-secondary px-2 rounded-md text-secondary'>{type}</p>
                <p className='border border-secondary px-2 rounded-md text-secondary'>{time}</p>
            </div>
            <div className='lg:flex gap-5 text-sm mb-10'>
                <p className='text-info flex gap-2 pt-2 lg:pb-5'><img src="/location.png" alt="" />{location}</p>
                <p className='text-info flex gap-2 pt-2 pb-5'><img src="/money.png" alt="" />Salary: {salary}</p>
            </div>
            <div className=' absolute bottom-5'>
                <Link to={`/job/${id}`}><button className="font-semibold bg-gradient-to-r from-blue-400 to-purple-400 p-2 rounded-md text-white">View Details</button></Link>
            </div>
        </div>
    );
};

export default FeaturedJobs;