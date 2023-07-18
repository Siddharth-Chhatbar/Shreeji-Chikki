import React from 'react'
import Dashboard from '../svg/Dashboard'
import Suppliers from '../svg/Suppliers'
import Inventory from '../svg/Inventory'
import Orders from '../svg/Orders'
import Settings from '../svg/Settings'
import Logout from '../svg/Logout'

const NewNavBar = () => {
    return (
        <div className=' fixed top-0 left-0 h-screen w-[300px]
                        flex flex-col rounded-r-lg drop-shadow-2xl
                        bg-white
                        font-heading font-medium text-2xl'>
            <div className=' pt-12 px-[58px]'>
                <img src="/logo.png" alt="logo" />
            </div>

            <div className='pt-16 pb-60'>
                <Dashboard />
                <Suppliers />
                <Inventory />
                <Orders />
            </div>

            <div className=' pb-12'>
                <Settings />
                <Logout />
            </div>
        </div>
    )
}

export default NewNavBar