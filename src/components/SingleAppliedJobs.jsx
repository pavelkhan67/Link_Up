import React from 'react';
import { Link } from 'react-router-dom';

const SingleAppliedJobs = ({ singleJob }) => {
    const { logo, title, name, type, location, time, salary, id} = singleJob;
    return (
        <div className='grid grid-cols-4 border border-gray-400 rounded-md'>
            <div className='grid col-span-1 bg-violet-50 mx-5 my-3 rounded-md'>
                <img className='h-36 w-40 mx-auto' src={logo} alt="" />
            </div>
            <div className='grid col-span-3 text-left p-5'>
                <div className='flex justify-between items-center'>
                    <div>
                        <p className='text-lg font-semibold'>{title}</p>
                        <p className='text-info'>{name}</p>
                        <div className='flex gap-3  my-3'>
                            <p className='border border-secondary px-2 rounded-md text-secondary h-7'>{type}</p>
                            <p className='border border-secondary px-2 rounded-md text-secondary h-7'>{time}</p>
                        </div>
                        <div className='lg:flex gap-5 text-sm'>
                            <p className=' flex gap-2 pt-2'><img src="/public/location.png" alt="" />{location}</p>
                            <p className=' flex gap-2 pt-2'><img src="/public/money.png" alt="" />Salary: {salary}</p>
                        </div>
                    </div>
                    <Link to={`/job/${id}`}><button className="font-semibold bg-gradient-to-r from-blue-400 to-purple-400 p-2 rounded-md text-white">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleAppliedJobs;