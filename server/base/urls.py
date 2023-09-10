# from django.contrib import admin
# from django.urls import path, include
# from . import views
# from django.conf import settings

# urlpatterns = [
#     path('login/', views.UserLogin.as_view(), name='login'),
#     path('register/', views.UserRegister.as_view(), name='register'),
#     path('logout/', views.UserLogout.as_view(), name='logout'),
#     path('', views.homePage, name='home'),
# ]

from . import views
from django.urls import path
from .views import register_user, user_login, user_logout

urlpatterns = [
    path('register/', register_user, name='register'),
    path('login/', user_login, name='login'),
    path('logout/', user_logout, name='logout'),
    path('', views.homePage, name='home'),
]