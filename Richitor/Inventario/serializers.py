from rest_framework import serializers
from .models import Producto, LoteProducto, MovimientoInventario

class ProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producto
        fields = '__all__'

class LoteProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = LoteProducto
        fields = '__all__'

class MovimientoInventarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = MovimientoInventario
        fields = '__all__'
