from . import views
from django.urls import path
from .views import register_user, user_login, user_logout,createExperience

urlpatterns = [
    path('register/', register_user, name='register'),
    path('login/', user_login, name='login'),
    path('logout/', user_logout, name='logout'),
    path('createExperience/', createExperience, name='create-experience'),
    path('', views.homePage, name='home'),
]