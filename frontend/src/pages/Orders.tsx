import React from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Label } from 'recharts';
import AddButton from '../components/AddButton';
import FilterButton from '../components/FilterButton';
import DownloadButton from '../components/DownloadButton';


const data = [
    { delivered: true, num: 37 },
    { delivered: false, num: 13 }
];
// Make a custom lable to show percentage of deliveries

const Orders = () => {
    return (
        <div>
            <div className=' card-padding'>
                <div className="card-l">
                    <div className=' pt-3 pl-4 font-heading font-medium text-[32px] text-secondary-300'>
                        Overall Orders
                        <div className=" pt-2 grid grid-cols-9 divide-x">
                            <div className=' pt-1 pl-2 col-end-1 pr-10'>
                                <div className=' text-2xl'>Total Orders</div>
                                <div className=' pt-2 font-body text-[32px] font-semibold text-black-300'>50</div>
                                <div className=' pt-2 font-body text-xl font-extralight text-black-100'>Last 7 days</div>
                            </div>

                            <div className=' pt-1 px-10 col-span-3'>
                                <div className="text-2xl">Orders Delivered</div>
                                <div className="flow-root ">
                                    <div className="float-left pr-10">
                                        <div className=' pt-2 font-body text-[32px] font-semibold text-black-300'>37</div>
                                        <div className=' pt-2 font-body text-xl font-extralight text-black-100'>Last 7 days</div>
                                    </div>
                                    <div className="float-right">
                                        <div className=' pt-2 font-body text-[32px] font-semibold text-black-300'>₹40000</div>
                                        <div className=' pt-2 font-body text-xl font-extralight text-black-100'>Revenue</div>
                                    </div>
                                </div>
                            </div>

                            <div className=' pt-1 px-10 col-span-3'>
                                <div className="text-2xl">Orderes Pending</div>
                                <div className="flow-root">
                                    <div className="float-left">
                                        <div className=' pt-2 font-body text-[32px] font-semibold text-black-300'>13</div>
                                        <div className=' pt-2 font-body text-xl font-extralight text-black-100'>Last 7 days</div>
                                    </div>
                                    <div className="float-right">
                                        <div className=' pt-2 font-body text-[32px] font-semibold text-black-300'>₹15000</div>
                                        <div className=' pt-2 font-body text-xl font-extralight text-black-100'>Revenue</div>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-1 px-10 col-span-3 ">
                                <ResponsiveContainer>
                                    <PieChart width={130} height={130}>
                                        <Pie
                                            data={data}
                                            dataKey="num"
                                            innerRadius={45}
                                            outerRadius={60}
                                            startAngle={-180}
                                            className='text-2xl font-body font-semibold'
                                        >
                                            {/*<Label width={30} position="center">
                  { `${totalTasks} ${tasksNameLabel}` }
                </Label>*/}
                                            <Label width={30} position="center" fill='#0C5B8C' >
                                                74%
                                            </Label>
                                            {data.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={index === 0 ? "#4BFB3C" : "#FD5D5D"} />
                                            ))}

                                        </Pie>
                                    </PieChart>
                                </ResponsiveContainer>

                            </div>


                        </div>
                    </div>
                </div>
                <div className='card-s-padding'>
                    <div className="table-card-s">
                        <div className="flex flex-row">
                            <div className=' page-title font-heading'>
                                Orders
                            </div>
                            <div className=' pt-4 pl-[692px] flex flex-row'>
                                <div>
                                    <AddButton />
                                </div>
                                <div className=' pl-6'>
                                    <FilterButton />
                                </div>
                                <div className=' pl-6 pr-8'>
                                    <DownloadButton />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Orders