from django.shortcuts import render
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import viewsets
from .models import Producto, LoteProducto, MovimientoInventario
from .serializers import ProductoSerializer, LoteProductoSerializer, MovimientoInventarioSerializer

class ProductoViewSet(viewsets.ModelViewSet):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer
    parser_classes = (MultiPartParser, FormParser)

class LoteProductoViewSet(viewsets.ModelViewSet):
    queryset = LoteProducto.objects.all()
    serializer_class = LoteProductoSerializer

class MovimientoInventarioViewSet(viewsets.ModelViewSet):
    queryset = MovimientoInventario.objects.all()
    serializer_class = MovimientoInventarioSerializer
