from rest_framework.routers import DefaultRouter
from .views import ProductoViewSet, LoteProductoViewSet, MovimientoInventarioViewSet

router = DefaultRouter()
router.register(r'productos', ProductoViewSet)
router.register(r'lotes', LoteProductoViewSet)
router.register(r'movimientos', MovimientoInventarioViewSet)

urlpatterns = router.urls
