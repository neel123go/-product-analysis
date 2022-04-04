import React, { useEffect, useState } from 'react';
import { Area, AreaChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, []);
    return (
        <div className='mt-20 grid grid-cols-1 lg:grid-cols-2 xl:px-32 gap-10 xl:gap-60'>
            <div>
                <h2 className='text-blue-600 mb-5 text-xl font-semibold text-center'>MONTH WISE SELL</h2>
                <LineChart
                    className='mx-auto'
                    width={300}
                    height={280}
                    data={data}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="sell" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>

            </div>
            <div>
                <h2 className='text-blue-600 mb-5 text-xl font-semibold text-center'>INVESTMENT VS REVENUE</h2>
                <AreaChart
                    className='mx-auto'
                    width={300}
                    height={280}
                    data={data}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                </AreaChart>
            </div>
        </div>
    );
};

export default Dashboard;