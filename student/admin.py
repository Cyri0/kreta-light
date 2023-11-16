from django.contrib import admin
from .models import Student, Grade, SchoolClass
# Register your models here.

admin.site.register(Student)
admin.site.register(Grade)
admin.site.register(SchoolClass)

