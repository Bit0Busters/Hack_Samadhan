from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from .models import *
student_list2 =  ['Ram','Aam','Sham','Kam','Nam']
# Create your views here.
@api_view(['GET'])
def hello_world(request):
    return JsonResponse({"Message":"Hello World"})



def student_list():
    l =[]
    stds = Student.objects.all()
    for s in stds:
        l.append(s.name)
    return l 

@api_view(['GET','POST','PUT','DELETE'])
def students(request):
    if request.method == "GET":
        l = student_list()
        return JsonResponse({"Succes":True,"Stuents":l})
    if request.method == "POST":
        get_student = request.data 
        list_std = get_student["Student_list"]
        for d in list_std:
            s = Student()
            s.name = d["name"] if "name" in d else None 
            s.age = d["age"] if "age" in d else None 
            s.class_name = d["class"] if "class" in d else None 
            s.save()

        
        l = student_list()

        return JsonResponse({"Succes":True,"Updated Stuents":l})
    
    



    
    