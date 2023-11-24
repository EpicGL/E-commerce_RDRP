from django.urls import path
from .views import productViews

urlpatterns = [
    path('products/', productViews.get_products, name='products'),
    path('product/<str:slug>', productViews.get_product, name='product'),
    path('products/filter/', productViews.get_filter_product, name='filter_product')
]
