import React, { useEffect, useState } from 'react'
import { ColumnDef } from '@tanstack/react-table'
import BasicTable from '../components/BasicTable'
import { InventoryProps } from '../types/types'

const Inventory = () => {

    let [data, setData] = useState<InventoryProps[]>([])

    useEffect(() => {
        getData()
    }, [])

    let getData = async () => {
        let response = await fetch('/api/inventory/')
        let data = await response.json()
        setData(data)
    }

    const columns: ColumnDef<any>[] = [
        {
            header: 'Product',
            accessorKey: 'product'
        },
        {
            header: 'Price per Carton',
            accessorKey: 'pricePerCarton'
        },
        {
            header: 'Packets per Carton',
            accessorKey: 'packetsPerCarton'
        },
        {
            header: 'Quantity',
            accessorKey: 'quantity',
            cell: (props) => {
                const qty = props.getValue() as number
                return (
                    <p style={{ color: qty === 0 ? "#B02A2A" : qty > 0 && qty <= 10 ? "#B0A32A" : "#35B02A" }}>
                        {qty}
                    </p>
                );
            }
        }
    ]

    return (
        <div>
            <BasicTable data={data} columns={columns} tableName={"Inventory"} rowNum={12} />
        </div>
    )
}

export default Inventory