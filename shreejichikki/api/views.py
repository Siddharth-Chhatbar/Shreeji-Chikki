from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Inventory, Orders, OrderItems, Suppliers
from .serializers import InventorySerializer, OrdersSerializer, OrderItemsSerializer, SuppliersSerializer

# Create your views here.

@api_view(["GET"])
def getRoutes(request):
    routes = [
        {
            "Endpoint": "/inventory/",
            "method": "GET",
            "body": None,
            "description": "Returns an array of inventory"
        },
        {
            "Endpoint": "/orders/",
            "method": "GET",
            "body": None,
            "description": "Returns an array of orders"
        },
        {
            "Endpoint": "/orderitems/",
            "method": "GET",
            "body": None,
            "description": "Returns an array of order items"
        },
        {
            "Endpoint": "/suppliers/",
            "method": "GET",
            "body": None,
            "description": "Returns an array of suppliers"
        },
        {
            "Endpoint": "/inventory/add",
            "method": "POST",
            "body": {"body": "required"},
            "description": "Creates a new inventory item with data sent in POST request"
        },
        {
            "Endpoint": "/inventory/<str:pk>/update",
            "method": "PUT",
            "body": {"body": "required"},
            "description": "Updates an existing inventory item with data sent in PUT request"
        },
        {
            "Endpoint": "/inventory/<str:pk>/delete",
            "method": "DELETE",
            "body": None,
            "description": "Deletes an existing inventory item"
        },
        {
            "Endpoint": "/inventory/<str:pk>/",
            "method": "GET",
            "body": None,
            "description": "Returns an existing inventory item"
        },
        {
            "Endpoint": "/orders/add",
            "method": "POST",
            "body": {"body": "required"},
            "description": "Creates a new order with data sent in POST request"
        },
        {
            "Endpoint": "/orders/<str:pk>/update",
            "method": "PUT",
            "body": {"body": "required"},
            "description": "Updates an existing order with data sent in PUT request"
        },
        {
            "Endpoint": "/orders/<str:pk>/delete",
            "method": "DELETE",
            "body": None,
            "description": "Deletes an existing order"
        },
        {
            "Endpoint": "/orders/<str:pk>/",
            "method": "GET",
            "body": None,
            "description": "Returns an existing order"
        },
        {
            "Endpoint": "/orderitems/add",
            "method": "POST",
            "body": {"body": "required"},
            "description": "Creates a new order item with data sent in POST request"
        },
        {
            "Endpoint": "/orderitems/<str:pk>/update",
            "method": "PUT",
            "body": {"body": "required"},
            "description": "Updates an existing order item with data sent in PUT request"
        },
        {
            "Endpoint": "/orderitems/<str:pk>/delete",
            "method": "DELETE",
            "body": None,
            "description": "Deletes an existing order item"
        },
        {
            "Endpoint": "/orderitems/<str:pk>/",
            "method": "GET",
            "body": None,
            "description": "Returns an existing order item"
        },
        {
            "Endpoint": "/suppliers/add",
            "method": "POST",
            "body": {"body": "required"},
            "description": "Creates a new supplier with data sent in POST request"
        },
        {
            "Endpoint": "/suppliers/<str:pk>/update",
            "method": "PUT",
            "body": {"body": "required"},
            "description": "Updates an existing supplier with data sent in PUT request"
        },
        {
            "Endpoint": "/suppliers/<str:pk>/delete",
            "method": "DELETE",
            "body": None,
            "description": "Deletes an existing supplier"
        },
        {
            "Endpoint": "/suppliers/<str:pk>/",
            "method": "GET",
            "body": None,
            "description": "Returns an existing supplier"
        }
    ]
    return Response(routes)

@api_view(["GET"])
def getInventory(request):
    inventory = Inventory.objects.all()
    serializer = InventorySerializer(inventory, many=True)
    return Response(serializer.data)

@api_view(["GET"])
def getInventoryItem(request, pk):
    inventory = Inventory.objects.get(id=pk)
    serializer = InventorySerializer(inventory, many=False)
    return Response(serializer.data)

@api_view(["PUT"])
def updateInventoryItem(request, pk):
    data = request.data
    inventory = Inventory.objects.get(id=pk)
    serializer = InventorySerializer(instance=inventory, data=data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(["DELETE"])
def deleteInventoryItem(request, pk):
    inventory = Inventory.objects.get(id=pk)
    inventory.delete()
    return Response("Item deleted successfully")

@api_view(["POST"])
def addInventoryItem(request):
    data = request.data
    inventory = Inventory.objects.create(
        product=data["product"],
        pricePerCarton=data["pricePerCarton"],
        packetsPerCarton=data["packetsPerCarton"],
        quantity=data["quantity"]
    )
    serializer = InventorySerializer(inventory, many=False)
    return Response(serializer.data)

@api_view(["GET"])
def getSuppliers(request):
    suppliers = Suppliers.objects.all()
    serializer = SuppliersSerializer(suppliers, many=True)
    return Response(serializer.data)

@api_view(["GET"])
def getSupplierItem(request, pk):
    supplier = Suppliers.objects.get(id=pk)
    serializer = SuppliersSerializer(supplier, many=False)
    return Response(serializer.data)

@api_view(["PUT"])
def updateSupplier(request, pk):
    data = request.data
    supplier = Suppliers.objects.get(id=pk)
    serializer = SuppliersSerializer(instance=supplier, data=data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(["DELETE"])
def deleteSupplier(request, pk):
    supplier = Suppliers.objects.get(id=pk)
    supplier.delete()
    return Response("Supplier deleted successfully")

@api_view(["POST"])
def addSupplier(request):
    data = request.data
    supplier = Suppliers.objects.create(
        supplierName=data["supplierName"],
        product=data["product"],
        quantity=data["quantity"],
        cost=data["cost"]
    )
    serializer = SuppliersSerializer(supplier, many=False)
    return Response(serializer.data)