
from django.contrib import admin
from django.urls import path,include
from tasks import views

urlpatterns = [
    path('hello/',views.hello_world,name="helloworld"),
    path('students/',views.students,name="studentsview"),
]