import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { InventoryProps, dict } from '../types/types'
import CancelButton from '../components/CancelButton'
import SaveButton from '../components/SaveButton'
import DeleteButton from '../components/DeleteButton'

const InventoryItem = () => {

    const { id } = useParams()
    let navigate = useNavigate()
    const [inventoryItem, setInventoryItem] = useState<InventoryProps>({
        id: 0,
        product: "",
        pricePerCarton: 0,
        packetsPerCarton: 0,
        quantity: 0
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
        let response = await fetch(`/api/inventory/${id}/`)
        let data = await response.json()
        setInventoryItem(data)
    }

    let addInventoryItem = async () => {
        fetch(`/api/inventory/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inventoryItem)
        })
    }

    let updateData = async () => {
        fetch(`/api/inventory/${id}/update`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inventoryItem)
        })
    }

    let deleteData = async () => {
        fetch(`/api/inventory/${id}/delete`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        navigate('/inventory', { replace: true })
    }

    let handleSubmit = () => {
        if (checkAdd) {
            addInventoryItem()
        }
        else updateData()
        navigate('/inventory', { replace: true })
    }

    let handleCancel = () => {
        navigate('/inventory')
    }

    let handleChanges = (key: string, e: React.ChangeEvent<HTMLInputElement>) => {
        setInventoryItem(inventoryItem => ({ ...inventoryItem!, [key]: e.target.value }))
    }

    return (
        <div className='fixed inset-0 flex justify-center items-center'>
            <div className="w-[600px] h-[732px] bg-white rounded-2xl drop-shadow-2xl">
                <div className=' page-title font-heading pb-4'>
                    Inventory
                </div>
                <div>
                    {inventoryItem && Object.keys(inventoryItem).map((key, index) => {
                        if (key !== "id") {
                            return (
                                <div key={index} className=' flex flex-row justify-between px-8 py-2 text-xl'>
                                    <div className=' font-medium font-heading'>
                                        {dict[key]}
                                    </div>
                                    <input className=' font-normal font-body block w-72 h-12 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50'
                                        value={checkAdd ? undefined : inventoryItem[key as keyof typeof inventoryItem]}
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

export default InventoryItem