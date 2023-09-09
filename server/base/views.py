from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout

# Create your views here.

def loginPage(request):
    if request.user.is_authenticated:
        return True
    
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')

        try:
            user = User.objects.get(email = email)
        except:
            return False
        
        user = authenticate(request, email = email, password = password)

        if user is not None:
            login(request, user)
            return True
        
        else:
            return False
    
    return False

def registerPage(request):
    return null

def logoutUser(request):
    logout(request)
    return True

def homePage(request):
    return HttpResponse("Home page")