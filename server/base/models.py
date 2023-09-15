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
    cse = models.BooleanField(default=False)
    ece = models.BooleanField(default=False)
    ee = models.BooleanField(default=False)
    ce = models.BooleanField(default=False)
    me = models.BooleanField(default=False)
    che = models.BooleanField(default=False)
    ai = models.BooleanField(default=False)

    round1_title = models.CharField(max_length=100)
    round1_body = models.TextField(null=True)
    round2_title = models.CharField(max_length=100)
    round2_body = models.TextField(null=True)
    round3_title = models.CharField(max_length=100)
    round3_body = models.TextField(null=True)
    round4_title = models.CharField(max_length=100)
    round4_body = models.TextField(null=True)
    round5_title = models.CharField(max_length=100)
    round5_body = models.TextField(null=True)
    round6_title = models.CharField(max_length=100)
    round6_body = models.TextField(null=True)
    # rounds = ArrayField(
    #     ArrayField(
    #         models.TextField(), size = 2,
    #     )
    # )
    tips = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.company_name