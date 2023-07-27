import React from 'react'

const Orders = () => {
    return (
        <div>
            <div className=' card-padding'>
                <div className="card-l">
                    <div className=' pt-3 pl-4 font-heading font-medium text-[32px] text-secondary-300'>
                        Overall Orders
                        <div className="grid grid-cols-4 divide-x">
                            <div className=' pt-1 pl-2 col-start-auto pr-9'>
                                <div className=' text-2xl'>Total Orders</div>
                                <div className=' pt-2 font-body text-[32px] font-semibold text-black-300'>50</div>
                                <div className=' pt-2 font-body text-xl font-extralight text-black-100'>Last 7 days</div>
                            </div>

                            <div className=' pt-1 pl-16 text-2xl pr-2'>
                                Orders Delivered
                                <div className="flow-root">
                                    <div className="float-left">
                                        <div className=' pt-2 font-body text-[32px] font-semibold text-black-300'>37</div>
                                        <div className=' pt-2 font-body text-xl font-extralight text-black-100'>Last 7 days</div>
                                    </div>
                                    <div className="float-right">
                                        <div className=' pt-2 font-body text-[32px] font-semibold text-black-300'>₹40000</div>
                                        <div className=' pt-2 font-body text-xl font-extralight text-black-100'>Revenue</div>
                                    </div>
                                </div>
                            </div>

                            <div className=' pt-1 pl-16'>
                                <div className=' text-2xl'>Orderes Pending</div>
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


                        </div>
                    </div>
                </div>
                <div className='card-s-padding'>
                    <div className="table-card-s"></div>

                </div>
            </div>
        </div>

    )
}

export default Orders