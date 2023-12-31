from django.urls import path
from .views import productViews
from .views import cartViews
from myauth.auth_views import MyTokenObtainPairSerializer
from myauth import auth_views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


urlpatterns = [
    path('products/', productViews.get_products, name='products'),
    path('product/<str:slug>', productViews.get_product, name='product'),
    path('products/filter/', productViews.get_filter_product, name='filter_product'),

    # Auth login, verify token and refresh token
    path('token/', TokenObtainPairView.as_view(
        serializer_class=MyTokenObtainPairSerializer), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/verify/', auth_views.verify, name='verify_token'),


    path('cart/', cartViews.add_or_to_cart, name='add_or_to_cart'),


]
