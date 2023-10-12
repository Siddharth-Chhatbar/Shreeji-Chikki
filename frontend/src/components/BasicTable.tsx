import AddButton from './AddButton'
import FilterButton from './FilterButton'
import DownloadButton from './DownloadButton'
import PreviousButton from './PreviousButton'
import NextButton from './NextButton'
import { useReactTable, getCoreRowModel, flexRender, getPaginationRowModel, getSortedRowModel, SortingState, getFilteredRowModel } from '@tanstack/react-table'
import { TableProps } from '../types/types'
import { Link } from 'react-router-dom'
import { useState } from 'react'



const BasicTable = ({ data, columns, tableName, rowNum }: TableProps) => {
    let card_padding: string;
    let table_card: string;
    let page: string
    if (tableName === "Orders") {
        card_padding = "card-s-padding";
        table_card = "table-card-s";
        page = "orders";
    }
    else {
        card_padding = "card-padding";
        table_card = "table-card";
        if (tableName === "Suppliers") {
            page = "suppliers";
        }
        else {
            page = "inventory";
        }
    }
    const [sorting, setSorting] = useState<SortingState>([])
    const [show, setShow] = useState<Boolean>(false)
    const [filtering, setFiltering] = useState('')

    const showSearchBox = () => {
        setShow(!show)
    }

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        initialState: {
            pagination: {
                pageSize: rowNum,
            },
        },
        getSortedRowModel: getSortedRowModel(),
        state: {
            sorting: sorting,
            globalFilter: filtering
        },
        onSortingChange: setSorting,
        getFilteredRowModel: getFilteredRowModel(),
        onGlobalFilterChange: setFiltering
    })

    return (
        <div className={card_padding}>
            <div className={table_card}>
                <div className="flex flex-row">
                    <div className=' page-title font-heading'>
                        {tableName}
                    </div>
                    <div className=' pt-4 pl-[692px] flex flex-row'>
                        <div>
                            <AddButton page={page} />
                        </div>
                        <div className=' pl-6' onClick={showSearchBox}>
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
                            {table.getHeaderGroups().map(headerGroup => (
                                <tr key={headerGroup.id}>
                                    {headerGroup.headers.map(header => (
                                        <th key={header.id} onClick={header.column.getToggleSortingHandler()}>
                                            {flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                            {{
                                                asc: ' 🔼',
                                                desc: ' 🔽',
                                            }[header.column.getIsSorted() as string] ?? null}
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody>
                            {table.getRowModel().rows.map(row => (
                                <tr key={row.id} className=' h-12 border-b-2'>
                                    {row.getVisibleCells().map(cell => (
                                        <td key={cell.id} >
                                            <Link to={`/${page}/${row.original.id}`}>
                                                {
                                                    flexRender(cell.column.columnDef.cell,
                                                        cell.getContext())
                                                }
                                            </Link>
                                        </td>

                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className=" grid grid-cols-3 content-center pt-12 px-8">
                    <div>
                        <button disabled={!table.getCanPreviousPage()} onClick={() => table.previousPage()}>
                            <PreviousButton />
                        </button>
                    </div>
                    <div className=' pl-[21px]'>
                        {show && <input type="text" className='block w-96 h-12 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50'
                            value={filtering} onChange={(e) => setFiltering(e.target.value)} />}
                    </div>
                    <div className='pl-[282px]'>
                        <button disabled={!table.getCanNextPage()} onClick={() => table.nextPage()}>
                            <NextButton />
                        </button>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default BasicTable