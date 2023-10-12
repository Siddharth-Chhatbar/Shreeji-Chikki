import { ColumnDef } from "@tanstack/react-table";

export type InventoryProps = {
    id: number;
    product: string;
    pricePerCarton: number;
    packetsPerCarton: number;
    quantity: number;
}

export type SupplierProps = {
    id: number;
    supplierName: string;
    product: string;
    quantity: number;
    cost: number;
    date: string;
    status: string;
}

export type OrderProps = {
    id: number;
    client_name: string;
    order: string;
    order_value: string;
    status: string;
}

export type TableProps = {
    data: any;
    columns: ColumnDef<any>[];
    tableName: String;
    rowNum: number;
}

export type PopUpProps = {
    visible: boolean;
    onClose: () => void;
    addName: String;
}

export type TableItemProps = {
    row: InventoryProps | SupplierProps | OrderProps;
    tableName: String;
}

export type AddProps = {
    page: string;
}


export var dict: { [key: string]: string } = {
    "product": "Product",
    "quantity": "Quantity",
    "pricePerCarton": "Price Per Carton",
    "packetsPerCarton": "Packets Per Carton",
    "supplierName": "Supplier Name",
    "cost": "Cost",
    "status": "Status",
    "clientName": "Client Name",
    "order": "Order",
    "orderValue": "Order Value",
}