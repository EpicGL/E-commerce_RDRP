from rest_framework.response import Response
from rest_framework.decorators import api_view
from product.models import Product
from cart.models import Order, OrderItem
from .serializers import ProductSerializer
