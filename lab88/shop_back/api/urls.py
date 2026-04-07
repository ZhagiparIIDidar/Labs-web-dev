from django.urls import path
from rest_framework.routers import DefaultRouter

from .viewsets import CategoryViewSet, ProductViewSet
from .views import (
    products_list,
    product_detail,
    ProductsListAPIView,
    ProductDetailAPIView,
    ProductListCreateMixinAPIView,
    ProductRetrieveUpdateDestroyMixinAPIView,
    ProductListCreateGenericAPIView,
    ProductRetrieveUpdateDestroyGenericAPIView,
)

router = DefaultRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'products', ProductViewSet)

urlpatterns = [
    path('fbv/products/', products_list, name='fbv-products-list'),
    path('fbv/products/<int:pk>/', product_detail, name='fbv-product-detail'),
    path('cbv/products/', ProductsListAPIView.as_view(), name='cbv-products-list'),
    path('cbv/products/<int:pk>/', ProductDetailAPIView.as_view(), name='cbv-product-detail'),
    path('mixins/products/', ProductListCreateMixinAPIView.as_view(), name='mixins-products-list'),
    path('mixins/products/<int:pk>/', ProductRetrieveUpdateDestroyMixinAPIView.as_view(), name='mixins-product-detail'),
    path('generics/products/', ProductListCreateGenericAPIView.as_view(), name='generics-products-list'),
    path('generics/products/<int:pk>/', ProductRetrieveUpdateDestroyGenericAPIView.as_view(), name='generics-product-detail'),
] + router.urls
    