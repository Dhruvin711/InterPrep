# Generated by Django 4.1.5 on 2023-09-11 13:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0002_remove_experience_company_name_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='experience',
            name='company_name',
            field=models.CharField(default=1, max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='experience',
            name='company_role',
            field=models.CharField(default=1, max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='experience',
            name='company_year',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='experience',
            name='post_time',
            field=models.CharField(default=1, max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='experience',
            name='post_username',
            field=models.CharField(default=1, max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='experience',
            name='tips',
            field=models.TextField(blank=True, null=True),
        ),
    ]
