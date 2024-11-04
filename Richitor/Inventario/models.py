from django.db import models

class Producto(models.Model):
    nombre = models.CharField(max_length=100)
    tipo = models.CharField(max_length=50, choices=[('gaseosa', 'Gaseosa'), ('alcoholica', 'Alcohólica'), ('agua', 'Agua')])
    marca = models.CharField(max_length=100)
    volumen = models.IntegerField()
    contenido_alcoholico = models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)
    descripcion = models.TextField(null=True, blank=True)
    imagen = models.ImageField(upload_to='productos/', blank=True, null=True)

    def __str__(self):
        return f"{self.nombre} - {self.marca}"
    

class LoteProducto(models.Model):
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
    cantidad = models.PositiveIntegerField() 
    fecha_vencimiento = models.DateField()
    proveedor = models.CharField(max_length=100)

    def __str__(self):
        return f"Lote de {self.producto.nombre} - Cantidad: {self.cantidad}"


class MovimientoInventario(models.Model):
    TIPO_MOVIMIENTO_CHOICES = [
        ('entrada', 'Entrada'),
        ('salida', 'Salida')
    ]
    lote = models.ForeignKey(LoteProducto, on_delete=models.CASCADE)
    tipo_movimiento = models.CharField(max_length=10, choices=TIPO_MOVIMIENTO_CHOICES)
    cantidad = models.PositiveIntegerField() 
    fecha = models.DateField(auto_now_add=True)
    descripcion = models.TextField(null=True, blank=True)

    def __str__(self):
        return f"{self.tipo_movimiento.capitalize()} de {self.cantidad} - {self.lote.producto.nombre}"
