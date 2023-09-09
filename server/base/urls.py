from django.contrib import admin
from django.urls import path, include
from . import views
from django.conf import settings

urlpatterns = [
    path('login/', views.loginPage, name='login'),
    path('register/', views.registerPage, name='register'),
    path('logout/', views.logoutUser, name='logout'),
    path('', views.homePage, name='home'),
]