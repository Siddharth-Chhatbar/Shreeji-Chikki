from django.urls import path
from . import views

urlpatterns = [
    path("", views.getRoutes, name="routes"),
    path("inventory/", views.getInventory, name="get-inventory"),
    path("inventory/add", views.addInventoryItem, name="add-inventory-item"),
    path("inventory/<str:pk>/update", views.updateInventoryItem, name="update-inventory-item"),
    path("inventory/<str:pk>/delete", views.deleteInventoryItem, name="delete-inventory-item"),
    path("inventory/<str:pk>/", views.getInventoryItem, name="get-inventory-item"),
    path("suppliers/", views.getSuppliers, name="get-suppliers"),
    path("suppliers/add", views.addSupplier, name="add-supplier"),
    path("suppliers/<str:pk>/update", views.updateSupplier, name="update-supplier"),
    path("suppliers/<str:pk>/delete", views.deleteSupplier, name="delete-supplier"),
    path("suppliers/<str:pk>/", views.getSupplierItem, name="get-supplier"),
]