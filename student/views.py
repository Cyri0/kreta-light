from django.shortcuts import render, redirect
from .serializers import StudentSerializer
from .models import Student, Grade

from rest_framework.decorators import api_view 
from rest_framework.response import Response 

@api_view(['GET'])
def getAllStudents(request):
    students = Student.objects.all()
    ser = StudentSerializer(students, many=True)
    return Response(ser.data)

@api_view(['POST'])
def doGrading(request):
    id = request.POST['student']
    grade = request.POST['grade']
    subject = request.POST['subject']
    date = request.POST['date']

    student = Student.objects.get(id = id)
    print("Diak: ", student)

    g = Grade(value = grade, subject = subject, date = date)
    g.save()

    student.grades.add(g)
    student.save()

    return redirect('main')
