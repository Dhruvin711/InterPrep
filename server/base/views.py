from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .serializers import ExperienceSerializer
from .models import Experience
from rest_framework import status
from django.core.exceptions import ObjectDoesNotExist
from django.contrib.auth.models import User
from .serializers import UserSerializer
from django.db.models import Q

#Route for registering a user


@api_view(['POST'])
def register_user(request):
    if request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()

            return Response({
                                'user':{
                                    'name': serializer.data.get('first_name'),
                                    'email': serializer.data.get('email')
                                },
                                'success': True,
                                'message': 'User registered Successfully'
                            }, status=status.HTTP_201_CREATED)
        return Response({
                            'success': False,
                            'message': 'User already exist'
                        }, status=status.HTTP_400_BAD_REQUEST)

# Route for Login 
@api_view(['POST'])
def user_login(request):
    if request.method == 'POST':
        email = request.data.get('email')
        password = request.data.get('password')

        try:
            User.objects.get(email=email)
            
        except ObjectDoesNotExist:
            return Response({
                                'success': False, 
                                'message': 'Email is not registered'
                            }, status=status.HTTP_401_UNAUTHORIZED)

        username = User.objects.get(email=email).username
        name = User.objects.get(email=email).first_name
        user = authenticate(username=username, password=password)

        if user:
            return Response({
                                'user': {
                                            'name':name, 
                                            'email':email
                                        }, 
                                'success': True, 
                                'message' : 'Successfully Login'
                            }, status=status.HTTP_200_OK)

        return Response({
                            'success': False,
                            'message': 'Invalid credentials'
                        }, status=status.HTTP_401_UNAUTHORIZED)

# Route for Logging out a user
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

# Route for getting all Experiences 
@api_view(['GET'])
def homePage(request):
    department_query = request.data.get('department') if request.data.get('department') else ''
    company_query = request.data.get('company_name') if request.data.get('company_name') else ''
    company_year_query = request.data.get('comapny_year') if request.data.get('comapny_year') else ''
    company_role_query = request.data.get('company_role') if request.data.get('company_role') else ''
    post_username_query = request.data.get('post_username') if request.data.get('post_username') else ''

    experience = Experience.objects.all()
    serializer = ExperienceSerializer(experience, many=True)
    return Response(serializer.data)

# Route for creating Experience 
@api_view(['POST'])
def createExperience(request):
    data = request.data
    experience = Experience.objects.create(
            company_name = data['company_name'],
            company_year = data['company_year'],
            company_role = data['company_role'],
            role_type = data['role_type'],
            post_username = data['post_username'],
            post_time = data['post_time'],
            tips = data['tips']
        )
    serializer = ExperienceSerializer(experience,many=False)
    return Response({'Success'})