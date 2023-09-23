from rest_framework.response import Response
from rest_framework.decorators import api_view
from product.models import Product
from .serializer import ProductSerializer

@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response (serializer.data, status=200)