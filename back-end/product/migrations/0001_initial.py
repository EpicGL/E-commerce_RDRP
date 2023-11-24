# Generated by Django 4.2.7 on 2023-11-23 06:04

import autoslug.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=244)),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=244)),
                ('body', models.TextField(null=True)),
                ('price', models.DecimalField(decimal_places=2, max_digits=9)),
                ('slug', autoslug.fields.AutoSlugField(editable=False, populate_from='name', unique=True)),
                ('orginal_img', models.ImageField(upload_to='product_images/orginal_imgs/')),
                ('thumbnail', models.ImageField(upload_to='product_images/thumbnails/')),
                ('gender', models.CharField(choices=[('Female', 'Female'), ('Male', 'Male')], max_length=144)),
                ('accessories', models.BooleanField(default=False, null=True)),
                ('tags', models.ManyToManyField(to='product.tag')),
            ],
            options={
                'ordering': ['id'],
            },
        ),
    ]
