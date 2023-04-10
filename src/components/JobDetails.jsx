import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    let {id} = useParams();
    const job = useLoaderData();
    const [jobDetails, setJobDetails] = useState([]);
    const {logo, title, name, type, location, time, salary, description, responsibility, education, experiences, contact } = jobDetails;
    useEffect(()=> {
        setJobDetails(job?.find(jd => jd.id === parseInt(id)));
    },[])

    return (
        <div className='my-container'>
            <h2 className='text-2xl font-semibold'>Job Details</h2>
            <div className='grid grid-cols-6 mt-10 text-left '>
                <div className='grid col-span-4 p-5 gap-3'>
                    <p><span className='font-semibold text-lg'>Job Description:</span> {description}</p>
                    <p><span className='font-semibold text-lg'>Job Responsibility:</span> {responsibility}</p>
                    <p><span className='font-semibold text-lg'>Educational Requirements:</span> <br /> {education}</p>
                    <p><span className='font-semibold text-lg'>Experiences:</span> <br /> {experiences}</p>
                </div>
                <div className='grid col-span-2'>
                    <div className='p-5 bg-violet-50 mb-5 rounded-md'>
                        <h2>Job Details</h2>
                        <hr className='border-y-2 border-slate-200 my-3' />
                        <p className=' flex gap-2'> <img src="/public/money.png" alt="" /> Salary: {salary}</p>
                        <p className=' flex gap-2 pt-2 mb-6'> <img src="/public/frame1.png" alt="" /> Job Title: {title}</p>
                        <h2>Contact Information</h2>
                        <hr className='border-y-2 border-slate-200 my-3' />
                        <p className=' flex gap-2'> <img src="/public/frame2.png" alt="" /> Phone: {contact?.phone}</p>
                        <p className=' flex gap-2 pt-2'> <img src="/public/frame3.png" alt="" /> Email: {contact?.email}</p>
                    </div>
                    <Link><button className='btn btn-secondary w-full '>Apply Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;