import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../utilities/fakedb';
import { useLoaderData } from 'react-router-dom';
import SingleAppliedJobs from './SingleAppliedJobs';

const AppliedJobs = () => {
    const [cart, setCart] = useState([])
    const job = useLoaderData();

    // Get all applied job from localStorage
    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = job && job.find(product => product.id === parseInt(id))
            if (addedProduct) {
                const quantity = storedCart[id]
                addedProduct.quantity = quantity
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart)
    }, [job])

    // Remote Job Search 
    const [remote, setRemote] = useState(cart);
    useEffect(() => {
        const initial = [];
        const find = cart.filter(product => product.type == 'Remote')
        initial.push(find)
        setRemote(initial)
    }, [cart])

    const handleRemote = () => {
        setCart(remote[0])
    }

    // Onsite Job Search 
    const [onsite, setOnsite] = useState(cart);
    useEffect(() => {
        const initial = [];
        const find = cart.filter(product => product.type == 'Onsite')
        initial.push(find)
        setOnsite(initial)
    }, [cart])

    const handleOnsite = () => {
        setCart(onsite[0])
    }

    return (
        <>
            <div className='bg-violet-50 relative'>
                <div className='flex justify-between'>
                    <img className='h-32' src="/vector.png" alt="" />
                    <img className='h-32' src="/vector1.png" alt="" />
                </div>
                <h2 className='text-2xl font-semibold absolute text-center left-[35%] top-[40%] lg:left-[43%]'>Applied Jobs</h2>
            </div>
            <div className='my-container mb-5 lg:mb-0'>
                <div className=' mt-5 flex justify-end gap-5'>
                    <button title="Click Applied Jobs Route First!" onClick={() => handleRemote()} className="font-semibold bg-gradient-to-r from-blue-400 to-purple-400 p-2 rounded-md text-white">Remote Job</button>
                    <button title="Click Applied Jobs Route First!" onClick={() => handleOnsite()} className="font-semibold bg-gradient-to-r from-blue-400 to-purple-400 p-2 rounded-md text-white">On-Site Job</button>
                </div>
                <p className='text-xs text-end mb-5 text-error mt-1'>Click Applied Jobs Route First Or Reload <br /> the page, otherwise Filter doesn't work!!</p>
                <div className='flex flex-col gap-5'>
                    {
                        cart.map(singleJob => <SingleAppliedJobs key={singleJob.id} singleJob={singleJob}></SingleAppliedJobs>)
                    }
                </div>
            </div> 
        </>
    );
};

export default AppliedJobs;