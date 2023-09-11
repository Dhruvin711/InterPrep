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
from django.contrib.auth.decorators import login_required


#Route for registering a user
@api_view(['POST'])
def register_user(request):
    if request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Route for Login 
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
            return Response({'token': token.key,'message' : 'Success'}, status=status.HTTP_200_OK)
        return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

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
    experience = Experience.objects.all()
    serializer = ExperienceSerializer(experience, many=True)
    return Response(serializer.data)

# Route for creating Experience 
@login_required
@api_view(['POST'])
def createExperience(request):
    data = request.data
    experience = Experience.objects.create(
        company_name = data['company_name'],
        company_year = data['company_year'],
        post_username = data['post_username'],
        post_time = data['post_time'],
        tips = data['tips']
    )
    serializer = ExperienceSerializer(experience,many=False)
    return Response({'Success'})