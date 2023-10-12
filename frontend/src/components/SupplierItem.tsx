import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { SupplierProps } from '../types/types'
import CancelButton from './CancelButton'
import SaveButton from './SaveButton'
import DeleteButton from './DeleteButton'

const SupplierItem = () => {

    const { id } = useParams()
    let navigate = useNavigate()
    let dict: { [key: string]: string } = {
        "supplierName": "Supplier Name",
        "product": "Product",
        "quantity": "Quantity",
        "cost": "Cost",
        "status": "Status"
    }
    const [supplierItem, setSupplierItem] = useState<SupplierProps>({
        id: 0,
        supplierName: "",
        product: "",
        quantity: 0,
        cost: 0,
        date: "",
        status: ""
    })
    let checkAdd: boolean = false

    if (id === "add") {
        checkAdd = true
    }

    useEffect(() => {
        getData()
    }, [])

    let getData = async () => {
        if (id === "add") return
        let response = await fetch(`/api/suppliers/${id}/`)
        let data = await response.json()
        setSupplierItem(data)
    }

    let addsuppliersItem = async () => {
        fetch(`/api/suppliers/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(supplierItem)
        })
    }

    let updateData = async () => {
        fetch(`/api/suppliers/${id}/update`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(supplierItem)
        })
    }

    let deleteData = async () => {
        fetch(`/api/suppliers/${id}/delete`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        navigate('/suppliers', { replace: true })
    }

    let handleSubmit = () => {
        if (checkAdd) {
            addsuppliersItem()
        }
        else updateData()
        navigate('/suppliers', { replace: true })
    }

    let handleCancel = () => {
        navigate('/suppliers')
    }

    let handleChanges = (key: string, e: React.ChangeEvent<HTMLInputElement>) => {
        setSupplierItem(supplierItem => ({ ...supplierItem!, [key]: e.target.value }))
    }

    return (
        <div className='fixed inset-0 flex justify-center items-center'>
            <div className="w-[600px] h-[732px] bg-white rounded-2xl drop-shadow-2xl">
                <div className=' page-title font-heading pb-4'>
                    suppliers
                </div>
                <div>
                    {supplierItem && Object.keys(supplierItem).map((key, index) => {
                        if (key !== "id") {
                            console.log(key)
                            return (
                                <div key={index} className=' flex flex-row justify-between px-8 py-2 text-xl'>
                                    <div className=' font-medium font-heading'>
                                        {dict[key]}
                                    </div>
                                    <input className=' font-normal font-body block w-72 h-12 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50'
                                        value={checkAdd ? undefined : supplierItem[key as keyof typeof supplierItem]}
                                        onChange={(e) => { handleChanges(key, e) }}>
                                    </input>

                                </div>
                            )
                        }
                        return null
                    }
                    )}
                </div>
                <div>
                    <div className=' flex flex-row justify-center pt-6'>
                        <div className=' pr-6' onClick={handleCancel}>
                            <CancelButton />
                        </div>
                        <div className=' pr-6' onClick={handleSubmit}>
                            <SaveButton />
                        </div>
                        <div onClick={deleteData} hidden={checkAdd}>
                            <DeleteButton />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SupplierItem