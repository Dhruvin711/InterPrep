from django.contrib import admin

# Register your models here.
from .models import Experience
from .models import CustomUser

admin.site.register(Experience)
admin.site.register(CustomUser)