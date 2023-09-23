from django.db import models
from autoslug import AutoSlugField

class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Tag(models.Model):
    name = models.CharField(max_length=50)
    slug = AutoSlugField(populate_from='name', unique=True)

    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=244)
    body = models.TextField(max_length=5000, blank=True, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    slug = AutoSlugField(populate_from='name', unique=True)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, blank=True)
    tags = models.ManyToManyField(Tag)
    date = models.DateField(auto_now=True, null=True, blank=True)
    updated = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    class Meta:
        ordering = ['id']

    def __str__(self):
        return self.name

class ProductImage(models.Model):
    image = models.ImageField(upload_to='product_image/')
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    
    class Meta:
        ordering = ['id']

    def __str__(self):
        return f"image of {self.product.name}"
    
    @property
    def imageURL(self):
        try:
            url = self.image.url
        except:
            url = ''
        return url

