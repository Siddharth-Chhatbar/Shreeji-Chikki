import React from 'react'
import AddButton from '../components/AddButton'
import FilterButton from '../components/FilterButton'
import DownloadButton from '../components/DownloadButton'
import PreviousButton from '../components/PreviousButton'
import NextButton from '../components/NextButton'

const Inventory = () => {
    return (
        <div className="card-padding">
            <div className=' table-card'>
                <div className="flex flex-row">
                    <div className=' page-title font-heading'>
                        Inventory
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
                <div className=' px-8 pt-[42px]'>
                    <table className=' w-full font-medium font-heading text-center'>
                        <thead className=' h-12 text-black-100 border-b-2 border-black-100'>
                            <tr>
                                <td>Product</td>
                                <td>Price per Carton</td>
                                <td>Pieces per Carton</td>
                                <td>Quantity</td>
                            </tr>
                        </thead>

                        <tbody>
                            <tr className=' h-12 border-b-2'>
                                <td>ABC</td>
                                <td>1080</td>
                                <td>60</td>
                                <td className=' text-success-400'>50</td>
                            </tr>
                            <tr className=' h-12 border-b-2'>
                                <td>ABC</td>
                                <td>1080</td>
                                <td>60</td>
                                <td className=' text-success-400'>50</td>
                            </tr>
                            <tr className=' h-12 border-b-2'>
                                <td>ABC</td>
                                <td>1080</td>
                                <td>60</td>
                                <td className=' text-success-400'>50</td>
                            </tr>
                            <tr className=' h-12 border-b-2'>
                                <td>ABC</td>
                                <td>1080</td>
                                <td>60</td>
                                <td className=' text-success-400'>50</td>
                            </tr>
                            <tr className=' h-12 border-b-2'>
                                <td>ABC</td>
                                <td>1080</td>
                                <td>60</td>
                                <td className=' text-success-400'>50</td>
                            </tr>
                            <tr className=' h-12 border-b-2'>
                                <td>ABC</td>
                                <td>1080</td>
                                <td>60</td>
                                <td className=' text-success-400'>50</td>
                            </tr>
                            <tr className=' h-12 border-b-2'>
                                <td>ABC</td>
                                <td>1080</td>
                                <td>60</td>
                                <td className=' text-success-400'>50</td>
                            </tr>
                            <tr className=' h-12 border-b-2'>
                                <td>ABC</td>
                                <td>1080</td>
                                <td>60</td>
                                <td className=' text-success-400'>50</td>
                            </tr>
                            <tr className=' h-12 border-b-2'>
                                <td>ABC</td>
                                <td>1080</td>
                                <td>60</td>
                                <td className=' text-success-400'>50</td>
                            </tr>
                            <tr className=' h-12 border-b-2'>
                                <td>ABC</td>
                                <td>1080</td>
                                <td>60</td>
                                <td className=' text-success-400'>50</td>
                            </tr>
                            <tr className=' h-12 border-b-2'>
                                <td>ABC</td>
                                <td>1080</td>
                                <td>60</td>
                                <td className=' text-success-400'>50</td>
                            </tr>
                            <tr className=' h-12 border-b-2'>
                                <td>ABC</td>
                                <td>1080</td>
                                <td>60</td>
                                <td className=' text-success-400'>50</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className=" flow-root pt-14 px-8">
                    <p className=' float-left'>
                        <PreviousButton />
                    </p>
                    <p className=' float-right'>
                        <NextButton />
                    </p>
                </div>
            </div>
        </div>

    )
}

export default Inventory