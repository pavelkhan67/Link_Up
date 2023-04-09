import React, { useEffect, useState } from 'react';
import JobCategory from './JobCategory';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const jobs = useLoaderData()
    const jb= jobs.slice(0,4);
    const jb1= jobs;
    console.log(jb, jb1);

    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('categoryData.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[])

    console.log(data);
     
    return (
        <>
        <div className="card lg:card-side bg-base-100 w-11/12 mx-auto flex justify-between lg:ps-10 lg:mt-5">
            <div className="text-start flex flex-col justify-center">
                <h2 className="text-5xl font-semibold">One Step <br /> Closer To Your <br /> <span className='text-secondary'>Dream Job</span></h2>
                <p className='py-8'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                <button className="btn w-32 btn-secondary text-white">Get Started</button>
            </div>
            <figure className=''><img className='h-[30vh] lg:h-[70vh]' src="banner.png" alt="Album" /></figure>
            
        </div>
        <div>
            <JobCategory></JobCategory>
        </div>
        </>
    );
};

export default Home;