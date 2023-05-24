from django.urls import path
from . import views 
urlpatterns = [
    path('', views.index, name='index'),
    # عايزين نجرب بعد كدا لو هينفع نغير اول اسم ارجيومينت
    path('add_studentfun/', views.add_studentfun, name='add_studentfun')
]