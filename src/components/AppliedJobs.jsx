import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../utilities/fakedb';
import { useLoaderData } from 'react-router-dom';
import SingleAppliedJobs from './SingleAppliedJobs';

const AppliedJobs = () => {
    const [cart, setCart] = useState([])
    const job = useLoaderData();

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = job?.find(product => product.id == id)
            if (addedProduct) {
                const quantity = storedCart[id]
                addedProduct.quantity = quantity
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart)
    }, [job])
 
    return (
        <div className='my-container'>
            <h2 className='text-2xl font-semibold'>Applied Jobs</h2>
            <div className=' my-5 flex justify-end gap-5'>
                <button className='btn btn-secondary'>Remote Job</button>
                <button className='btn btn-secondary'>On-Site Job</button>
            </div>
            <div className='flex flex-col gap-5'>
            {
                cart.map(singleJob => <SingleAppliedJobs key={singleJob.id} singleJob ={singleJob}></SingleAppliedJobs>)
            }
            </div>
        </div>
    );
};

export default AppliedJobs;