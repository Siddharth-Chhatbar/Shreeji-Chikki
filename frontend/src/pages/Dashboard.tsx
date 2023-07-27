import React from 'react'

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
                </div>
            </div>
            <div className="card-padding-xl">
                <div className="card-xl"></div>
            </div>

        </div>
    )
}

export default Dashboard