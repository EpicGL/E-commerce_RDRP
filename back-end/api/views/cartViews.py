from rest_framework.response import Response
from rest_framework.decorators import api_view
from product.models import Product
from cart.models import Order, OrderItem
from .serializers import ProductSerializer


@api_view(['GET'])
def add_or_to_cart(request):
    orderId = request.query_params.get('order')
    action = request.query_params.get('action')
    productId = request.query_params.get('product')

    try:
        product = Product.objects.get(id=productId)
    except:
        return Response({"No Product Found with this id "})

    try:
        if orderId:
            try:
                order = Order.objects.get(id=orderId)
            except Order.DoesNotExist:
                order = Order.objects.create()
        else:
            order = Order.objects.create()

        existing_order_item = OrderItem.objects.filter(
            item=productId, order=order).first()

        try:
            if existing_order_item:
                if action == 'increment':
                    existing_order_item.quantity += 1
                    existing_order_item.save()
                    order_item = existing_order_item
                    return Response({"Item added"})
                elif action == 'decrement':
                    if existing_order_item.quantity > 1:
                        existing_order_item.quantity -= 1
                        existing_order_item.save()
                        order_item = existing_order_item
                        return Response({"Item removed"})
                    else:
                        existing_order_item.delete()
                        return Response({"Item was removed from cart"})
                else:
                    return Response({"wrong action"})
            else:
                order_item = OrderItem.objects.create(
                    order=order, item=product)
                return Response({'Order'}, status=200)
        except:
            return Response({"fuck this shit"})
    except:
        return Response({'no product'}, status=404)
