import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../utilities/fakedb';
import { useLoaderData} from 'react-router-dom';
import SingleAppliedJobs from './SingleAppliedJobs';

const AppliedJobs = () => {
    const [cart, setCart] = useState([])
    const job = useLoaderData();

    // Get all applied job from localStorage
    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = job &&  job.find(product => product.id == id)
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
            const find = cart.filter(product =>product.type == 'Remote')
            initial.push(find)
        setRemote(initial)
    }, [cart])

    const handleRemote =() => {
        setCart(remote[0])
    }

    // Onsite Job Search 
    const [onsite, setOnsite] = useState(cart);
    useEffect(() => {
        const initial = [];
            const find = cart.filter(product =>product.type == 'Onsite')
            initial.push(find)
        setOnsite(initial)
    }, [cart])

    const handleOnsite =() => {
        setCart(onsite[0])
    }
 
    return (
        <div className='my-container'>
            <h2 className='text-2xl font-semibold'>Applied Jobs</h2>
            <div className=' mt-5 flex justify-end gap-5'>
                <button title="Click Applied Jobs Route First!" onClick={()=> handleRemote()} className='btn btn-secondary text-white'>Remote Job</button>
                <button title="Click Applied Jobs Route First!" onClick={()=> handleOnsite()} className='btn btn-secondary text-white'>On-Site Job</button>
            </div>
            <p className='text-xs text-end mb-5 text-error mt-1'>Click Applied Jobs Route First Or refresh <br /> the page Otherwise Filter doesn't work!!</p>
            <div className='flex flex-col gap-5'>
            {
                cart.map(singleJob => <SingleAppliedJobs key={singleJob.id} singleJob ={singleJob}></SingleAppliedJobs>)
            }
            </div>
        </div>
    );
};

export default AppliedJobs;