from rest_framework import serializers
from .models import Student, Grade, SchoolClass

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'
        depth = 1

# TODO Grade- és SchoolClassSerializer