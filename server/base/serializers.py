# from rest_framework.serializers import ModelSerializer
# from rest_framework import serializers
# from .models import Experience
# from django.core.exceptions import ValidationError
# from django.contrib.auth import authenticate
# from django.contrib.auth.models import User

# class ExperienceSerializer(ModelSerializer):
#     class Meta:
#         model = Experience
#         fields = '__all__'

# class UserRegisterSerializer(ModelSerializer):
#     class Meta:
#         model = User
#         fields = '__all__'
#     def create(self,clean_data):
#         user_obj = User.objects.create_user(email=clean_data['email'],password=clean_data['password'],username = clean_data['username'])
#         user_obj.save()
#         return user_obj

# class UserLoginSerializer(serializers.Serializer):
#     username = serializers.CharField(
#         label="Username",
#         write_only=True
#     )
#     password = serializers.CharField(
#         label="Password",
#         # This will be used when the DRF browsable API is enabled
#         style={'input_type': 'password'},
#         trim_whitespace=False,
#         write_only=True
#     )

#     def validate(self, attrs):
#         # Take username and password from request
#         username = attrs.get('username')
#         password = attrs.get('password')

#         if username and password:
#             # Try to authenticate the user using Django auth framework.
#             user = authenticate(request=self.context.get('request'),
#                                 username=username, password=password)
#             if not user:
#                 # If we don't have a regular user, raise a ValidationError
#                 msg = 'Access denied: wrong username or password.'
#                 raise serializers.ValidationError(msg, code='authorization')
#         else:
#             msg = 'Both "username" and "password" are required.'
#             raise serializers.ValidationError(msg, code='authorization')
#         # We have a valid user, put it in the serializer's validated_data.
#         # It will be used in the view.
#         attrs['user'] = user
#         return attrs



from rest_framework import serializers
from .models import CustomUser
from .models import Experience
from rest_framework.serializers import ModelSerializer



class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['username', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = CustomUser(
            username=validated_data['username'],
            email=validated_data['email']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

class ExperienceSerializer(ModelSerializer):
    class Meta:
        model = Experience
        fields = '__all__'