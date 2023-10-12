# Generated by Django 4.2.4 on 2023-08-19 06:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Inventory",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("product", models.CharField(blank=True, max_length=200, null=True)),
                ("quantity", models.IntegerField(blank=True, null=True)),
                ("pricePerCarton", models.FloatField(blank=True, null=True)),
                ("packetsPerCarton", models.IntegerField(blank=True, null=True)),
                ("cartons", models.IntegerField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name="Orders",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("clientName", models.CharField(blank=True, max_length=200, null=True)),
                ("order", models.CharField(blank=True, max_length=200, null=True)),
                ("orderValue", models.FloatField(blank=True, null=True)),
                ("date", models.DateTimeField(auto_now_add=True)),
                ("status", models.CharField(blank=True, max_length=200, null=True)),
            ],
        ),
        migrations.CreateModel(
            name="Suppliers",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "supplierName",
                    models.CharField(blank=True, max_length=200, null=True),
                ),
                ("product", models.CharField(blank=True, max_length=200, null=True)),
                ("quantity", models.IntegerField(blank=True, null=True)),
                ("cost", models.FloatField(blank=True, null=True)),
                ("date", models.DateTimeField(auto_now_add=True)),
                ("status", models.CharField(blank=True, max_length=200, null=True)),
            ],
        ),
        migrations.CreateModel(
            name="OrderItems",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("product", models.CharField(blank=True, max_length=200, null=True)),
                ("quantity", models.IntegerField(blank=True, null=True)),
                ("pricePerCarton", models.FloatField(blank=True, null=True)),
                ("packetsPerCarton", models.IntegerField(blank=True, null=True)),
                ("cartons", models.IntegerField(blank=True, null=True)),
                (
                    "order",
                    models.ForeignKey(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        to="api.orders",
                    ),
                ),
            ],
        ),
    ]
