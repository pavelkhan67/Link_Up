import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';



const Statistics = () => {
    const data = [
        {
          name: 'Assignment 1',
          marks: 60,
        },
        {
          name: 'Assignment 2',
          marks: 58,
        },
        {
          name: 'Assignment 3',
          marks: 60,
        },
        {
          name: 'Assignment 4',
          marks: 60,
        },
        {
          name: 'Assignment 5',
          marks: 60,
        },
        {
          name: 'Assignment 6',
          marks: 60,
        },
        {
          name: 'Assignment 7',
          marks: 60,
        },
        {
          name: 'Assignment 8',
          marks: 60,
        },
      ];
    return (
        <div className='my-container'>
        <AreaChart
          width={1000}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="marks" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </div>
    );
};

export default Statistics;