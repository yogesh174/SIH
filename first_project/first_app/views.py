from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def index(request):
    dic = {'insert_content':"This is from first_app"}
    return render(request,'first_app/index.html',context=dic)
def index1(request):
    return render(request, 'first_app/index1.html')

