import React, { useMemo } from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Label, Tooltip } from 'recharts';
import BasicTable from '../components/BasicTable';
import oData from '../ORDER_MOCK_DATA.json'
import { OrderProps } from '../types/types';
import { ColumnDef } from '@tanstack/react-table';


const data = [
    { delivered: true, num: 37 },
    { delivered: false, num: 13 }
];
// Make a custom lable to show percentage of deliveries

const Orders = () => {

    const orderData: OrderProps[] = useMemo(() => oData, [])
    const columns: ColumnDef<any>[] = [
        {
            header: 'Client Name',
            accessorKey: 'client_name'
        },
        {
            header: 'Order',
            accessorKey: 'order'
        },
        {
            header: 'Order Value',
            accessorKey: 'order_value'
        },
        {
            header: 'Status',
            accessorKey: 'status',
            cell: (props) => {
                const _status = props.getValue() as string
                return (
                    <p style={{ color: _status === "Delayed" ? "#B02A2A" : _status === "Out for Delivery" ? "#B0A32A" : "#35B02A" }}>
                        {_status}
                    </p>
                );
            }
        }
    ]
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
                                <ResponsiveContainer width="99%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={data}
                                            dataKey="num"
                                            innerRadius={45}
                                            outerRadius={60}
                                            cornerRadius={10}
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
                <div>
                    <BasicTable data={orderData} columns={columns} tableName={"Orders"} rowNum={6} />
                </div>
            </div>
        </div>

    )
}

export default Orders