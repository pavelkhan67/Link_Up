import React, { createContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { addToDb, getShoppingCart } from '../utilities/fakedb';
export const MoneyContext = createContext(0);

const JobDetails = () => {

    const [cart, setCart] = useState([])

    let {id} = useParams();
    const job = useLoaderData();
    const [jobDetails, setJobDetails] = useState([]);
    const {title, salary, description, responsibility, education, experiences, contact, location } = jobDetails;

    useEffect(()=> {
        setJobDetails( job && job.find(jd => jd.id === parseInt(id)));
    },[])

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

    const handleAddToCart = (product) => {
        let newCart = [...cart, product];
        setCart(newCart)
        addToDb(product.id)
    }

    return (
        <div className=''>
            <div className='bg-indigo-50 relative'>
                <div className='flex justify-between'>
                    <img className='h-40' src="/public/Vector.png" alt="" />
                    <img className='h-40' src="/public/Vector1.png" alt="" />
                </div>
            <h2 className='text-2xl font-semibold absolute text-center top-[40%] left-[35%] lg:left-[43%]'>Job Details</h2>
            </div>
            <div className='lg:grid grid-cols-6 mt-10 text-left my-container'>
                <div className='grid col-span-4 p-5 gap-3'>
                    <p><span className='font-semibold text-lg'>Job Description:</span> {description}</p>
                    <p><span className='font-semibold text-lg'>Job Responsibility:</span> {responsibility}</p>
                    <p><span className='font-semibold text-lg'>Educational Requirements:</span> <br /> {education}</p>
                    <p><span className='font-semibold text-lg'>Experiences:</span> <br /> {experiences}</p>
                </div>
                <div className='grid col-span-2'>
                    <div className='p-5 bg-violet-50 mb-5 rounded-md'>
                        <h2 className='font-semibold'>Job Details</h2>
                        <hr className='border-y-2 border-slate-200 my-3' />
                        <p className=' flex gap-2'> <img src="/public/money.png" alt="" /> <span className='font-semibold' >Salary:</span> {salary}</p>
                        <p className=' flex gap-2 pt-2 mb-6'> <img src="/public/frame1.png" alt="" /> <span className='font-semibold' >Job Title:</span> {title}</p>
                        <h2 className='font-semibold'>Contact Information</h2>
                        <hr className='border-y-2 border-slate-200 my-3' />
                        <p className=' flex gap-2'> <img src="/public/frame2.png" alt="" /> <span className='font-semibold' >Phone:</span> {contact?.phone}</p>
                        <p className=' flex gap-2 pt-2'> <img src="/public/frame3.png" alt="" /> <span className='font-semibold' >Email:</span>{contact?.email}</p>
                        <p className=' flex gap-2 pt-2'> <img src="/public/location.png" alt="" /> <span className='font-semibold' >Address:</span>{location}</p>
                    </div>
                   <button onClick={()=> handleAddToCart(jobDetails)} className="font-semibold bg-gradient-to-r from-blue-400 to-purple-400 p-2 rounded-md text-white w-full mb-5">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;