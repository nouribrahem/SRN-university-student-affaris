from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from django.views.decorators.csrf import csrf_protect
from .models import students
from django.http import JsonResponse
import json
# def index(request):
#     return HttpResponse("Hello, world. You're at the students index.")
# Create your views here.

def index(request):
    template = loader.get_template('addStudent.html')
    return HttpResponse(template.render())

def add_studentfun(request):
        First_name = request.POST['fname']
        Last_name = request.POST['lname']
        Student_id = request.POST['ID']
        #Student_email = request.POST['email']
        Student_gpa = request.POST['GPA']
        #Student_phone = request.POST['phone_number']
        Student_level = request.POST['level']
        #Student_dob = request.POST['DOB']
        Student_dep = request.POST['department']
        #Student_gender = request.POST['gender']
        Student_status = request.POST['status']
        
        student = students(
            student = students(
            fname=First_name,
            lname=Last_name,
            id=Student_id,
            #email=Student_email,
            gpa=Student_gpa,
            #phone_number=Student_phone,
            level=Student_level,
            #date_of_birth=Student_dob,
            department=Student_dep,
            #gender=Student_gender,
            status=Student_status
        )
        )
        student.save()
        return JsonResponse({'message': 'Update successful'})

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

def vieww(request):
  our_students = students.objects.all().values()
  template = loader.get_template('view.html')
  context = {
    'our_students': our_students,
  }
  return HttpResponse(template.render(context, request))

def update_student(request, id):
    
    if request.method == "POST":
        fname = request.POST['fname']
        lname = request.POST['lname']
        
        #email = request.POST['email']
        GPA = request.POST['GPA']
        #phone_number = request.POST['phone_number']
        level = request.POST['level']
        #dob = request.POST['DOB']
        #gender = request.POST['gender']
        student = students.objects.get(id = id)
        
        student.fname =fname
        student.lname =lname
        #student.email=email
        student.gpa = GPA
        #student.phone_number=phone_number  
        student.level=level
        #student.dob = dob
        #student.gender = gender
        student.save()
    
    template = loader.get_template('UpdateStudent.html')
    stud = students.objects.get(id=id)
    context = {
            'our_students': stud,
        }
    return HttpResponse(template.render(context, request))
    


