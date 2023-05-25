from django.urls import path
from . import views 
urlpatterns = [
    path('', views.index, name='index'),
    path('vieww/', views.vieww, name='vieww'),
    path('assign_dep/<str:id>',views.assign_dep),
    path('update-department/<str:id>/',views.update_dep),
    # عايزين نجرب بعد كدا لو هينفع نغير اول اسم ارجيومينت
    path('add_studentfun/', views.add_studentfun, name='add_studentfun')
]