# Generated by Django 4.2.16 on 2024-11-03 22:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Inventario', '0002_producto_imagen'),
    ]

    operations = [
        migrations.AlterField(
            model_name='producto',
            name='tipo',
            field=models.CharField(choices=[('gaseosa', 'Gaseosa'), ('alcoholica', 'Alcohólica'), ('agua', 'Agua')], max_length=50),
        ),
    ]
