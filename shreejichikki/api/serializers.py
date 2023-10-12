from django.forms import ChoiceField
from rest_framework.serializers import ModelSerializer, ChoiceField
from .models import Inventory, Orders, OrderItems, Suppliers

class InventorySerializer(ModelSerializer):
    class Meta:
        model = Inventory
        fields = '__all__'

class OrdersSerializer(ModelSerializer):
    class Meta:
        model = Orders
        fields = '__all__'

class OrderItemsSerializer(ModelSerializer):
    class Meta:
        model = OrderItems
        fields = '__all__'

class SuppliersSerializer(ModelSerializer):
    status = ChoiceField(choices=Suppliers.STATUS)
    class Meta:
        model = Suppliers
        fields = '__all__'