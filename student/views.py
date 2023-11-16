from django.shortcuts import render
from .serializers import StudentSerializer
from .models import Student

from rest_framework.decorators import api_view 
from rest_framework.response import Response 

@api_view(['GET'])
def getAllStudents(request):
    students = Student.objects.all()
    ser = StudentSerializer(students, many=True)
    return Response(ser.data)
