from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from django.views.decorators.csrf import csrf_protect
from .models import students
# def index(request):
#     return HttpResponse("Hello, world. You're at the students index.")
# Create your views here.

def index(request):
    template = loader.get_template('addStudent.html')
    return HttpResponse(template.render())

def add_studentfun(request):
    if request.method == "POST":
        fname = request.POST['fname']
        lname = request.POST['lname']
        ID = request.POST['ID']
        email = request.POST['email']
        GPA = request.POST['GPA']
        phone_number = request.POST['phone_number']
        level = request.POST['level']
        dob = request.POST['DOB']
        department = request.POST['department']
        gender = request.POST['gender']
        status = request.POST['status']
        
        student = students(
            first_name=fname,
            last_name=lname,
            student_id=ID,
            email=email,
            gpa=GPA,
            phone_number=phone_number,
            level=level,
            date_of_birth=dob,
            department=department,
            gender=gender,
            status=status
        )
        student.save()
        return render(request, 'addStudent.html')
    else:
        return  render(request, 'addStudent.html')