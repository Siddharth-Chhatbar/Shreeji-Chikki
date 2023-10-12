from django.db import models

# Create your models here.
# Reduce quantity from inventory when ordered

class Inventory(models.Model):
    product = models.CharField(max_length=200, null=True, blank=True)
    pricePerCarton = models.FloatField(null=True, blank=True)
    packetsPerCarton = models.IntegerField(null=True, blank=True)
    quantity = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return self.product
        

class Orders(models.Model):
    clientName = models.CharField(max_length=200, null=True, blank=True)
    order = models.CharField(max_length=200, null=True, blank=True)
    orderValue = models.FloatField(null=True, blank=True)
    date = models.DateTimeField(auto_now_add=True)
    STATUS = (
        ('Delayed', 'Delayed'),
        ('Delivered', 'Delivered'),
        ('On the Way', 'On the Way')
    )
    status = models.CharField(max_length=200, null=True, blank=True, choices=STATUS)

# Product is the choice from available inventory

class OrderItems(models.Model):
    order = models.ForeignKey(Orders, on_delete=models.CASCADE, null=True, blank=True)
    products = [(p, p) for p in Inventory.objects.all()]
    product = models.CharField(max_length=200, null=True, blank=True, choices=products)
    quantity = models.IntegerField(null=True, blank=True)

class Suppliers(models.Model):
    supplierName = models.CharField(max_length=200, null=True, blank=True)
    product = models.CharField(max_length=200, null=True, blank=True)
    quantity = models.IntegerField(null=True, blank=True)
    cost = models.FloatField(null=True, blank=True)
    date = models.DateTimeField(auto_now_add=True)
    STATUS = (
        ('Delayed', 'Delayed'),
        ('Received', 'Received'),
        ('On the Way', 'On the Way')
    )
    status = models.CharField(max_length=200, null=True, blank=True, choices=STATUS)

    def __str__(self):
        return self.supplierName
