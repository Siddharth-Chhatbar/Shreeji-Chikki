import React from 'react'
import AddButton from '../components/AddButton'
import FilterButton from '../components/FilterButton'
import DownloadButton from '../components/DownloadButton'
import PreviousButton from '../components/PreviousButton'
import NextButton from '../components/NextButton'

const Suppliers = () => {
    return (
        <div className="card-padding">
            <div className="table-card">
                <div className="flex flex-row">
                    <div className=' page-title font-heading'>
                        Suppliers
                    </div>
                    <div className=' pt-4 pl-[696px] flex flex-row'>
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
    )
}

export default Suppliers