import React from 'react'
import Dashboard from '../svg/Dashboard'

const NavBar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-[300px] m-0
                        flex flex-col rounded-r-lg drop-shadow-2xl
                        bg-white text-secondary-75 stroke-secondary-75
                        hover:stroke-secondary-300
                        font-heading font-medium text-[24px]">

            <div className="pt-12 px-[58px]">
                <img src="/logo.png" alt='logo'></img>
            </div>
            <div className=' pt-16 '>
                <Dashboard />
                <NavBarElements element="Suppliers" />
                <NavBarElements element="Inventory" />
                <NavBarElements element="Orders" />
            </div>


            <div className=' pt-64 pb-12 text-secondary-300'>
                <NavBarElements element="Settings" />
                <NavBarElements element="Logout" />
            </div>

        </div>
    )
}

const NavBarElements = (element: any) => {
    // Accessing the String from the element object
    element = element.element;



    let unclicked_src: string;

    unclicked_src = "/Unclicked/" + element + ".png";
    if (element === "Logout") {
        return (

            <div className='nav-bar-elements-logout'>
                <p>
                    <img src={unclicked_src} alt={element} className=' inline-block mr-4 ml-[74px]' />{element}
                </p>
            </div>
        );
    }

    return (

        <div className='nav-bar-elements'>
            <p>
                <img src={unclicked_src} alt={element} className=' inline-block mr-4 ml-[74px]' />{element}
            </p>
        </div>
    );

}

export default NavBar