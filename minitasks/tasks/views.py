from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
student_list =  ['Ram','Aam','Sham','Kam','Nam']
# Create your views here.
@api_view(['GET'])
def hello_world(request):
    return JsonResponse({"Message":"Hello World"})

@api_view(['GET','POST'])
def students(request):
    if request.method == "GET":
        return JsonResponse({"Succes":True,"Stuents":student_list})
    if request.method == "POST":
        get_student = request.data 
        list_std = get_student["Student_list"]
        student_list.extend(list_std)
        return JsonResponse({"Succes":True,"Updated Stuents":student_list})
    