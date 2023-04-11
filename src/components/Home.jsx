import React, { useEffect, useState } from 'react';
import JobCategory from './JobCategory';
import FeaturedJobs from './FeaturedJobs';

const Home = () => {
    // fetch category data
    const [categories, setCategories] = useState([])
    useEffect(() => {
        const loadData = async () => {
            const res = await fetch('/categoryData.json');
            const value = await res.json();
            setCategories(value);
        };
        loadData();
    }, []);

    // Show all data btn
    const [showAll, setShowAll] = useState(false);

    const handleShowAll = () => {
        setShowAll(true);
    };

    // fetch jobs data
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        const loadData = async () => {
            const res = await fetch('/jobsData.json');
            const value = await res.json();
            setJobs(value);
        };
        loadData();
    }, []);

    return (
        <>
            <section className="card rounded-none lg:card-side bg-violet-50 px-5 lg:px-20 flex justify-between ">
                <div className="text-start flex flex-col justify-center">
                    <h2 className="text-5xl font-semibold">One Step <br /> Closer To Your <br /> <span className='text-secondary'>Dream Job</span></h2>
                    <p className='py-8'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                    <button className="font-semibold w-28 bg-gradient-to-r from-blue-400 to-purple-400 p-2 rounded-md text-white">Get Started</button>
                </div>
                <figure className=''><img className='h-[30vh] lg:h-[70vh]' src="banner.png" alt="Album" /></figure>

            </section>
            <section className='my-container lg:mt-10'>
                <h2 className='text-3xl font-semibold pb-5'>Job Category List</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future.</p>
                <div className='grid lg:grid-cols-4 gap-5 mt-8'>
                    {
                        categories?.map(category => <JobCategory key={category.id} category={category}></JobCategory>)
                    }
                </div>
            </section>
            <section className='my-container'>
                <h2 className='text-3xl font-semibold pb-5'>Featured Jobs</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future.</p>
                <div className='grid lg:grid-cols-2 gap-5 py-8'>
                {
                    jobs?.slice(0, showAll ? 6 : 4).map(job => <FeaturedJobs key={job.id} job ={job}></FeaturedJobs>)
                }
                </div>
                {!showAll && (
                    <span onClick={handleShowAll}>
                        <button className="font-semibold bg-gradient-to-r from-blue-400 to-purple-400 p-2 rounded-md text-white">See All Jobs</button>
                    </span>
                )}
            </section>
        </>
    );
};

export default Home;