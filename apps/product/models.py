from django.db import models
from autoslug import AutoSlugField
from django.utils.text import slugify



class Category(models.Model):
    name = models.CharField(max_length=244)
    slug = AutoSlugField(unique=True, populate_from='name')

    def __str__(self):
        return self.name
    
    
    def save(self, *args, **kwargs):
        if not Category.objects.exists:
            defult_category = Category(name='defult')
            defult_category.save()
        super(Category,self.save(*args, **kwargs))

    def generate_unique_slug(self):
        base_slug = slugify(self.name)
        slug = base_slug
        counter = 1

        while Product.objects.filter(slug=slug).exists():
            slug = f"{base_slug}-{counter}"
            counter += 1

        return slug

    @property
    def slugURL(self):
        try:
            return self.slug
        except AttributeError:
            self.slug = self.generate_unique_slug()
            self.save()
            return self.slug
            
        
    class Meta:
        ordering = ['id']

class Tag(models.Model):
    name = models.CharField(max_length=50)



class Product(models.Model):
    title = models.CharField(max_length=244)
    description = models.TextField(max_length=1000, blank=True, null=True)
    slug = AutoSlugField( unique=True, populate_from='title')
    category = models.ForeignKey(Category, default='defult', on_delete=models.SET_DEFAULT)
    tags = models.ManyToManyField(Tag)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
    
    @property
    def imageURL(self):
        try:
            url = self.image.url
        except ValueError:
            url = ''
        return url

    def generate_unique_slug(self):
        base_slug = slugify(self.title)
        slug = base_slug
        counter = 1

        while Product.objects.filter(slug=slug).exists():
            slug = f"{base_slug}-{counter}"
            counter += 1

        return slug

    @property
    def slugURL(self):
        try:
            return self.slug
        except AttributeError:
            # If the product doesn't have a slug, generate one and save the model
            self.slug = self.generate_unique_slug()
            self.save()
            return self.slug

    class Meta:
        ordering = ['title']



class ProductImage(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='media/product_photos/',default='media/product_photos/default.jpg', height_field=300, width_field=280)

    def __str__(self):
        return f'image of {self.product.title}'

    @property
    def imageURL(self):
        try:
            url = self.image.url
        except ValueError:
            url = 'media/product_photos/default.jpg'
        return url