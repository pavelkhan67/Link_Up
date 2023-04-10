import React, { useEffect, useState } from 'react';
import JobCategory from './JobCategory';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const categories = useLoaderData()

    const [showAll, setShowAll] = useState(false);

    const handleShowAll = () => {
        setShowAll(true);
    };

    const [jobs, setJobs] = useState([])
    useEffect(() => {
        const loadData = async () => {
            const res = await fetch('categoryData.json');
            const value = await res.json();
            setJobs(value);
        };
        loadData();
    }, []);

    return (
        <>
            <div className="card rounded-none lg:card-side bg-violet-50 px-5 lg:px-20 flex justify-between ">
                <div className="text-start flex flex-col justify-center">
                    <h2 className="text-5xl font-semibold">One Step <br /> Closer To Your <br /> <span className='text-secondary'>Dream Job</span></h2>
                    <p className='py-8'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                    <button className="btn w-32 btn-secondary text-white">Get Started</button>
                </div>
                <figure className=''><img className='h-[30vh] lg:h-[70vh]' src="banner.png" alt="Album" /></figure>

            </div>
            <div className='my-container'>
                <h2 className='text-3xl font-semibold pb-5 mt-10'>Job Category List</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='grid lg:grid-cols-4 gap-5 mt-8'>
                    {
                        jobs.map(category => <JobCategory key={category.id} category={category}></JobCategory>)
                    }
                </div>
            </div>
            <div className='my-container'>
                <h2 className='text-3xl font-semibold pb-5'>Featured Jobs</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                {
                    
                }
            </div>
        </>
    );
};

export default Home;