import React from 'react'
import Dashboard from '../svg/Dashboard'
import Suppliers from '../svg/Suppliers'
import Inventory from '../svg/Inventory'
import Orders from '../svg/Orders'
import Settings from '../svg/Settings'
import Logout from '../svg/Logout'
import { NavLink } from 'react-router-dom'

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
                <NavLink to={'/dashboard'}
                    className={({ isActive }) => isActive ? 'nav-bar-elements-clicked' : 'nav-bar-elements'}>
                    <Dashboard />
                </NavLink>

                <NavLink to={'/inventory'}
                    className={({ isActive }) => isActive ? 'nav-bar-elements-clicked' : 'nav-bar-elements'}>
                    <Inventory />
                </NavLink>

                <NavLink to={'/suppliers'}
                    className={({ isActive }) => isActive ? 'nav-bar-elements-clicked' : 'nav-bar-elements'}>
                    <Suppliers />
                </NavLink>

                <NavLink to={'/orders'}
                    className={({ isActive }) => isActive ? 'nav-bar-elements-clicked' : 'nav-bar-elements'}>
                    <Orders />
                </NavLink>
            </div>

            <div className=' pb-12'>
                <Settings />
                <Logout />
            </div>
        </div>
    )
}

export default NewNavBar