from rest_framework import serializers
from .models import CustomUser
from .models import Experience
from rest_framework.serializers import ModelSerializer


# Serializer for Custom User Model
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

# serializer for Experience model
class ExperienceSerializer(ModelSerializer):
    class Meta:
        model = Experience
        fields = '__all__'