import React, { useEffect, useState } from 'react'
import BasicTable from '../components/BasicTable'
import { SupplierProps } from '../types/types'
import { ColumnDef } from '@tanstack/react-table'

const Suppliers = () => {
    let [data, setData] = useState<SupplierProps[]>([])

    useEffect(() => {
        getData()
    }, [])

    let getData = async () => {
        let response = await fetch('/api/suppliers/')
        let data = await response.json()
        setData(data)
    }

    const columns: ColumnDef<any>[] = [
        {
            header: 'Supplier Name',
            accessorKey: 'supplierName'
        },
        {
            header: 'Product',
            accessorKey: 'product'
        },
        {
            header: 'Quantity',
            accessorKey: 'quantity'
        },
        {
            header: 'Cost',
            accessorKey: 'cost'
        },
        {
            header: 'Status',
            accessorKey: 'status',
            cell: (props) => {
                const _status = props.getValue() as string
                return (
                    <p style={{ color: _status === "Delayed" ? "#B02A2A" : _status === "On the Way" ? "#B0A32A" : "#35B02A" }}>
                        {_status}
                    </p>
                );
            }
        }

    ]
    return (
        <div>
            <BasicTable data={data} columns={columns} tableName={"Suppliers"} rowNum={12} />
        </div>
    )
}

export default Suppliers