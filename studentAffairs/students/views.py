from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .models import Students
# def index(request):
#     return HttpResponse("Hello, world. You're at the students index.")
# Create your views here.

# def index(request):
#     template = loader.get_template('haha.html')
#     return HttpResponse(template.render())

def index(request):
    student_list = Students.objects.all(). values()
    output = ""
    for x in student_list:
        output += x["firstname"]
        output+=" "
    return HttpResponse(output)  