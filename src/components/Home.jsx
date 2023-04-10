import React, { useEffect, useState } from 'react';
import JobCategory from './JobCategory';
import { useLoaderData } from 'react-router-dom';
import FeaturedJobs from './FeaturedJobs';

const Home = () => {
    const categories = useLoaderData()

    const [showAll, setShowAll] = useState(false);

    const handleShowAll = () => {
        setShowAll(true);
    };

    const [jobs, setJobs] = useState([])
    useEffect(() => {
        const loadData = async () => {
            const res = await fetch('jobsData.json');
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
            <div className='my-container lg:mt-10'>
                <h2 className='text-3xl font-semibold pb-5'>Job Category List</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='grid lg:grid-cols-4 gap-5 mt-8'>
                    {
                        categories?.map(category => <JobCategory key={category.id} category={category}></JobCategory>)
                    }
                </div>
            </div>
            <div className='my-container'>
                <h2 className='text-3xl font-semibold pb-5'>Featured Jobs</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='grid lg:grid-cols-2 gap-5 py-8'>
                {
                    jobs?.slice(0, showAll ? 6 : 4).map(job => <FeaturedJobs key={job.id} job ={job}></FeaturedJobs>)
                }
                </div>
                {!showAll && (
                    <span onClick={handleShowAll}>
                        <button className='btn btn-secondary'>See All Jobs</button>
                    </span>
                )}
            </div>
        </>
    );
};

export default Home;