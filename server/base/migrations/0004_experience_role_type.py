# Generated by Django 4.1.5 on 2023-09-11 15:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_experience_company_name_experience_company_role_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='experience',
            name='role_type',
            field=models.CharField(default=1, max_length=100),
            preserve_default=False,
        ),
    ]
