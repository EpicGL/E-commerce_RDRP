from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import ProductSerializer
from product.models import Product


@api_view(['GET'])
def get_products(request):
    product = Product.objects.all()
    serializer = ProductSerializer(product, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_product(request, slug):
    product = Product.objects.get(slug=slug)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def get_filter_product(request):
    try:
        startprice = request.query_params.get('startingprice')
        endprice = request.query_params.get('endprice')
        accessories = request.query_params.get('accessories')
        gender = request.query_params.get('gender')

        if startprice is not None and endprice is not None:
            products = Product.objects.filter(
                price__range=(startprice, endprice))

        print(accessories)
        if accessories is not None:
            products = products.filter(accessories=accessories)

        print(gender)
        if gender is not None:
            products = products.filter(gender=gender)

        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
    except:
        return Response(status=400)
