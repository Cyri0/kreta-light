from django.db import models

class SchoolClass(models.Model):
    grade = models.IntegerField()
    code = models.CharField(max_length=5)

    def __str__(self):
        return f"{self.grade}.{self.code}"

class Grade(models.Model):
    value = models.IntegerField()
    subject = models.CharField(max_length=255, null=True, blank=True)
    date = models.DateField()

class Student(models.Model):
    name = models.CharField(max_length=255)
    school_class = models.ForeignKey(SchoolClass, on_delete=models.CASCADE)
    grades = models.ManyToManyField(Grade)

    def __str__(self):
        return f"{self.name} ({self.school_class.__str__()})"