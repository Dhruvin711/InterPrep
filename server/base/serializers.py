from rest_framework import serializers
from .models import Experience
from rest_framework.serializers import ModelSerializer
from django.contrib.auth.models import User


# Serializer for Custom User Model
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User(
            email = validated_data['email'],
            first_name = validated_data['first_name']
        )
        user.username = user.email
        user.set_password(validated_data['password'])
        user.save()
        return user

# serializer for Experience model
class ExperienceSerializer(ModelSerializer):
    class Meta:
        model = Experience
        fields = '__all__'