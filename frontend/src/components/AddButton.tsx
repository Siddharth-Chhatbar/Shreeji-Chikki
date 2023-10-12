import React from 'react'
import { Link } from 'react-router-dom'
import { AddProps } from '../types/types'

const AddButton = (page: AddProps) => {
    let link: string = "/" + page.page + "/add"
    return (
        <div className='add-button'>
            <Link to={link}>
                <div className=' button-text font-plein'>
                    Add
                </div>
            </Link>

        </div>
    )
}

export default AddButton