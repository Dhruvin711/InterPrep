# Generated by Django 4.1.5 on 2023-09-09 12:24

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0004_experince_rounds'),
    ]

    operations = [
        migrations.AlterField(
            model_name='experince',
            name='rounds',
            field=django.contrib.postgres.fields.ArrayField(base_field=django.contrib.postgres.fields.ArrayField(base_field=models.TextField(), size=2), size=None),
        ),
    ]
