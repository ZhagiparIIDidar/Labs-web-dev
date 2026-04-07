from .fbv import products_list, product_detail
from .cbv import ProductsListAPIView, ProductDetailAPIView
from .mixins import ProductListCreateMixinAPIView, ProductRetrieveUpdateDestroyMixinAPIView
from .generics import ProductListCreateGenericAPIView, ProductRetrieveUpdateDestroyGenericAPIView

__all__ = [
    "products_list",
    "product_detail",
    "ProductsListAPIView",
    "ProductDetailAPIView",
    "ProductListCreateMixinAPIView",
    "ProductRetrieveUpdateDestroyMixinAPIView",
    "ProductListCreateGenericAPIView",
    "ProductRetrieveUpdateDestroyGenericAPIView",
]