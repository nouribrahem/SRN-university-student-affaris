from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .models import students
from django.http import JsonResponse
import json
# def index(request):
#     return HttpResponse("Hello, world. You're at the students index.")
# Create your views here.

# def index(request):
#     template = loader.get_template('haha.html')
#     return HttpResponse(template.render())

def index(request):
    student_list = students.objects.all(). values()
    output = ""
    for x in student_list:
        output += x["fname"]
        output+=" "
    return HttpResponse(output)

def assign_dep(request,id):
    student_info = students.objects.get(id=id)
    content = {
        'id': student_info.id,
        'name': student_info.fname + ' ' + student_info.lname,
        'level':student_info.level,
        'gpa':student_info.gpa,
        'department':student_info.department,
    }
    department_options = ["Computer Science", "Information System", "Information Technology", "Decision Support",
                          "Artificial Intelligence", "Software Engineering", "Bioinformatics", "Data Science", "General"]
    dep_page_info = render(request, 'AssignDepartment.html', context={'content': content, 'department_options': department_options})
    return HttpResponse(dep_page_info)

def update_dep(request,id):
    if request.method == 'POST':
        data = json.loads(request.body) 
        print(data)
        dep = data.get('department')
        print(dep)
        stud = students.objects.get(id=id)    
        stud.department = dep
        stud.save()
        return JsonResponse({'message': 'Update successful'})
    return JsonResponse({'message': 'Invalid request'})