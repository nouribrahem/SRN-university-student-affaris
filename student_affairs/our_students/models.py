from django.db import models
class students(models.Model):
    fname = models.CharField(max_length=255)
    lname = models.CharField(max_length=255)
    id = models.CharField(max_length=255,primary_key=True) 
    status = models.CharField(max_length=255)
    level = models.IntegerField()
    department = models.CharField(max_length=20)
    gpa = models.DecimalField(max_digits=3,decimal_places=2)