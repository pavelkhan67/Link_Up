import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    let {id} = useParams();
    const job = useLoaderData();
    const [jobDetails, setJobDetails] = useState([]);
    const {logo, title, name, type, location, time, salary, description, responsibility, education, experiences, contact } = jobDetails;
    useEffect(()=> {
        setJobDetails(job?.find(jd => jd.id === parseInt(id)));
    },[])

    return (
        <div>
            <h2></h2>
        </div>
    );
};

export default JobDetails;