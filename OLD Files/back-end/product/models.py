from django.db import models
from autoslug import AutoSlugField


class Tag(models.Model):
    name = models.CharField(max_length=244)

    def __str__(self):
        return self.name


class Product(models.Model):
    GENDER_CHOICES = [
        ("Female", 'Female'),
        ("Male", 'Male')
    ]
    name = models.CharField(null=False, blank=False, max_length=244)
    body = models.TextField(null=True)
    price = models.DecimalField(max_digits=9, decimal_places=2)
    slug = AutoSlugField(populate_from='name', unique=True)
    img_main = models.ImageField(upload_to='product_images/')
    gender = models.CharField(max_length=144, choices=GENDER_CHOICES)
    tags = models.ManyToManyField(Tag)
    accessories = models.BooleanField(default=False, null=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['id']
