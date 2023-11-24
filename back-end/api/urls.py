from django.urls import path
from .views import productViews
from myauth.auth_views import MyTokenObtainPairSerializer

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


urlpatterns = [
    path('products/', productViews.get_products, name='products'),
    path('product/<str:slug>', productViews.get_product, name='product'),
    path('products/filter/', productViews.get_filter_product, name='filter_product'),

    path('token/', TokenObtainPairView.as_view(
        serializer_class=MyTokenObtainPairSerializer), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
