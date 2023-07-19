import React from 'react'
import Card from '../components/Card'
import CardXL from '../components/CardXL'

const Dashboard = () => {
    return (
        <div>
            <div className=" flow-root">
                <p className=' float-left card-left'>
                    <Card />
                </p>
                <p className=' float-right card-right'>
                    <Card />
                </p>

            </div>

            <div className='card-xl'>
                <CardXL />
            </div>
            <div className=' card-xl'>
                <CardXL />
            </div>
        </div>
    )
}

export default Dashboard