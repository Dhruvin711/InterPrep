# from django.shortcuts import render
# from django.http import HttpResponse
# from django.contrib.auth.models import User
# from rest_framework.response import Response
# from rest_framework.decorators import api_view
# from django.contrib.auth import authenticate, login, logout
# from .models import Experience
# from rest_framework.views import APIView
# from .serializers import ExperienceSerializer,UserLoginSerializer,UserRegisterSerializer
# from rest_framework import permissions,status
# from rest_framework.authentication import SessionAuthentication
# from .validations import custom_validation,validate_email,validate_password
# # Create your views here.

# # @api_view(['POST'])
# # def loginPage(request):

# #     success = [
# #         {
# #             'Endpoint': '/notes/',
# #             'method': 'GET',
# #             'body': None,
# #             'description': 'Returns an array of notes'
# #         },
# #         {
# #             'Endpoint': '/notes/id',
# #             'method': 'GET',
# #             'body': None,
# #             'description': 'Returns a single note object'
# #         }
# #     ]

#     # nsuccess = [
#     #     {
#     #         'Endpoint': '/notes/',
#     #         'method': 'GET',
#     #         'body': None,
#     #         'description': 'Returns an array of notes'
#     #     },

#     # ]

    
# #     return Response(nsuccess)
# #     # if request.user.is_authenticated:
# #     #     return Response(success)
    
# #     # if request.method == 'POST':
# #     #     email = request.POST.get('email')
# #     #     password = request.POST.get('password')

# #     #     try:
# #     #         user = User.objects.get(email = email)
# #     #     except:
# #     #         return Response(nsuccess)
        
# #     #     user = authenticate(request, email = email, password = password)

# #     #     if user is not None:
# #     #         login(request, user)
# #     #         return 
        
# #     #     else:
# #     #         return Response(nsuccess)
    

# # def registerPage(request):
# #     return True

# # def logoutUser(request):
# #     logout(request)
# #     return True





# class UserRegister(APIView):
#     permission_classes = (permissions.AllowAny,)
#     def post(self,request):
#         clean_data = custom_validation(request.data)
#         serializer = UserRegisterSerializer(data=clean_data)
#         if serializer.is_valid(raise_exception=True):
#             user = serializer.create(clean_data)
#             if user:
#                 return Response(serializer.data,status=status.HTTP_201_CREATED)
#             return Response(status=status.HTTP_400_BAD_REQUEST)

# class UserLogin(APIView):
   
#     # permission_classes = (permissions.AllowAny,)
#     # authentication_classes = (SessionAuthentication,)
 
#     # def post(self,request):
#     #     data = request.data
#     #     assert validate_email(data)
#     #     assert validate_password(data)
#     #     serializer = UserLoginSerializer(data=data)
#     #     if serializer.is_valid(raise_exception=True):
#     #         user = serializer.check_user(data)
#     #         login(request,user)
#     #     return Response(serializer.data,status=status.HTTP_200_OK)
#     permission_classes = (permissions.AllowAny,)

#     def post(self, request, format=None):
#         serializer = UserLoginSerializer(data=self.request.data,
#             context={ 'request': self.request })
#         serializer.is_valid(raise_exception=True)
#         user = serializer.validated_data['user']
#         login(request, user)
#         return Response(None, status=status.HTTP_202_ACCEPTED)


# class UserLogout(APIView):
#     def post(self,request):
#         logout(request)
#         return Response(status=status.HTTP_200_OK)


# accounts/views.py

from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .serializers import ExperienceSerializer
from .models import Experience
from rest_framework import status
from django.core.exceptions import ObjectDoesNotExist
from .models import CustomUser
from .serializers import UserSerializer

@api_view(['POST'])
def register_user(request):
    if request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def user_login(request):
    if request.method == 'POST':
        username = request.data.get('username')
        password = request.data.get('password')

        user = None
        if '@' in username:
            try:
                user = CustomUser.objects.get(email=username)
            except ObjectDoesNotExist:
                pass

        if not user:
            user = authenticate(username=username, password=password)

        if user:
            token, _ = Token.objects.get_or_create(user=user)
            return Response({'token': token.key,'message' : 'Chal Gya'}, status=status.HTTP_200_OK)

        return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def user_logout(request):
    if request.method == 'POST':
        try:
            # Delete the user's token to logout
            request.user.auth_token.delete()
            return Response({'message': 'Successfully logged out.'}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET'])
def homePage(request):
    experience = Experience.objects.all()
    serializer = ExperienceSerializer(experience, many=True)
    return Response(serializer.data)