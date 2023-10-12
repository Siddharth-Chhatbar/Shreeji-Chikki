import React from 'react'
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts'

const barChartData = [
    {
        "month": "JAN",
        "sales": 4000,
        "purchases": 2400,
    },
    {
        "month": "FEB",
        "sales": 3000,
        "purchases": 1398,
    },
    {
        "month": "MAR",
        "sales": 2000,
        "purchases": 9800,
    },
    {
        "month": "APR",
        "sales": 2780,
        "purchases": 3908,
    },
    {
        "month": "MAY",
        "sales": 1890,
        "purchases": 4800,
    },
    {
        "month": "JUN",
        "sales": 2390,
        "purchases": 3800,
    },
    {
        "month": "JUL",
        "sales": 3490,
        "purchases": 4300,
    },
    {
        "month": "AUG",
        "sales": 3490,
        "purchases": 4300,
    },
    {
        "month": "SEP",
        "sales": 3490,
        "purchases": 4300,
    },
    {
        "month": "OCT",
        "sales": 3490,
        "purchases": 4300,
    },
    {
        "month": "NOV",
        "sales": 3490,
        "purchases": 4300,
    },
    {
        "month": "DEC",
        "sales": 3490,
        "purchases": 4300,
    }
]

const areaChartData = [
    {
        "month": "JAN",
        "orders": 4000,
        "deliveries": 2400,
    },
    {
        "month": "FEB",
        "orders": 3000,
        "deliveries": 1398,
    },
    {
        "month": "MAR",
        "orders": 2000,
        "deliveries": 9800,
    },
    {
        "month": "APR",
        "orders": 2780,
        "deliveries": 3908,
    },
    {
        "month": "MAY",
        "orders": 1890,
        "deliveries": 4800,
    },
    {
        "month": "JUN",
        "orders": 2390,
        "deliveries": 3800,
    },
    {
        "month": "JUL",
        "orders": 3490,
        "deliveries": 4300,
    },
    {
        "month": "AUG",
        "orders": 3490,
        "deliveries": 4300,
    },
    {
        "month": "SEP",
        "orders": 3490,
        "deliveries": 4300,
    },
    {
        "month": "OCT",
        "orders": 3490,
        "deliveries": 4300,
    },
    {
        "month": "NOV",
        "orders": 3490,
        "deliveries": 4300,
    },
    {
        "month": "DEC",
        "orders": 3490,
        "deliveries": 4300,
    }
];

const Dashboard = () => {
    return (
        <div>
            <div className=" flow-root">
                <div className=' float-left card-padding'>
                    <div className="card">
                        <div className=' pt-3 pl-4 font-heading font-medium text-[32px] text-secondary-300'>
                            Sales Overview
                            <div className="grid grid-cols-2 divide-x">
                                <div className=' pt-1 pl-2'>
                                    <div className=' text-2xl'>Sales</div>
                                    <div className=' pt-2 font-body text-[32px] font-semibold text-black-300'>50</div>
                                    <div className=' pt-2 font-body text-xl font-extralight text-black-100'>Last 7 days</div>
                                </div>
                                <div className=' pt-1 pl-6'>
                                    <div className=' text-2xl'>Revenue</div>
                                    <div className=' pt-2 font-body text-[32px] font-semibold text-black-300'>₹18000</div>
                                    <div className=' pt-2 font-body text-xl font-extralight text-black-100'>Total Revenue</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' float-right card-padding-r'>
                    <div className=' card'>
                        <div className=' pt-3 pl-4 font-heading font-medium text-[32px] text-secondary-300'>
                            Pending Delivery
                            <div className="grid grid-cols-2 divide-x">
                                <div className=' pt-1 pl-2'>
                                    <div className=' text-2xl'>To be Delievered</div>
                                    <div className=' pt-2 font-body text-[32px] font-semibold text-black-300'>10</div>
                                    <div className=' pt-2 font-body text-xl font-extralight text-black-100'>Cartons</div>
                                </div>
                                <div className=' pt-1 pl-6'>
                                    <div className=' text-2xl'>To be Received</div>
                                    <div className=' pt-2 font-body text-[32px] font-semibold text-black-300'>3</div>
                                    <div className=' pt-2 font-body text-xl font-extralight text-black-100'>Pending</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card-padding-xl">
                <div className="card-xl">
                    <div className=' pt-3 pl-4 font-heading font-medium text-[32px] text-secondary-300'>
                        Sales & Purchase
                    </div>
                    <div className=' pl-36 pt-4 font-body font-light'>
                        <BarChart width={1140} height={225} data={barChartData} barSize={12}>
                            <CartesianGrid vertical={false} />
                            <XAxis dataKey="month" />
                            <YAxis axisLine={false} tickLine={false} />
                            <Tooltip
                                contentStyle={{ backgroundColor: '#fffdec', borderRadius: '8px', border: 'none' }}
                                cursor={{ fill: '#e7eff4' }}
                                labelStyle={{ display: "none" }}
                                position={{ x: 570, y: 0 }}
                            />
                            <Legend />
                            <Bar dataKey="sales" fill="#4BFB3C" radius={[8, 8, 0, 0]} />
                            <Bar dataKey="purchases" fill="#FD5D5D" radius={[8, 8, 0, 0]} />
                        </BarChart>
                    </div>
                </div>
            </div>
            <div className="card-padding-xl">
                <div className="card-xl">
                    <div className=' pt-3 pl-4 font-heading font-medium text-[32px] text-secondary-300'>
                        Orders & Deliveries
                    </div>
                    <div className=' pl-36 pt-4 font-body font-light'>
                        <AreaChart width={1140} height={225} data={areaChartData}>
                            <CartesianGrid vertical={false} />
                            <XAxis dataKey="month" />
                            <YAxis axisLine={false} tickLine={false} />
                            <Tooltip
                                contentStyle={{ backgroundColor: '#fffdec', borderRadius: '8px', border: 'none' }}
                                cursor={{ fill: '#e7eff4' }}
                                labelStyle={{ display: "none" }}
                                position={{ x: 570, y: 0 }} />
                            <Legend />

                            <Area type="monotone" dataKey="deliveries" stackId="1" stroke="#FD5D5D" fill="#FD5D5D" />
                            <Area type="monotone" dataKey="orders" stackId="2" stroke="#4BFB3C" fill="#4BFB3C" />

                        </AreaChart>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dashboard