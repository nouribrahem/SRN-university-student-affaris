from django.urls import path
from . import views 
urlpatterns = [
    path('', views.index, name='index'),
    path('assign_dep/<str:id>',views.assign_dep),
    path('update-department/<str:id>/',views.update_dep),
]