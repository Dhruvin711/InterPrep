from django.db import models
from django.contrib.auth.models import User
# from django.contrib.auth.models import AbstractUser
# from django.contrib.postgres.fields import ArrayField

# Create your models here.

User._meta.get_field('email')._unique = True

class Experience(models.Model):
    company_name = models.CharField(max_length=100)
    company_year = models.IntegerField()
    company_role = models.CharField(max_length=200)
    role_type = models.CharField(max_length=100)

    post_username = models.CharField(max_length=100)
    post_time = models.CharField(max_length=100)

    # rounds = ArrayField(
    #     ArrayField(
    #         models.TextField(), size = 2,
    #     )
    # )
    tips = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.company_name