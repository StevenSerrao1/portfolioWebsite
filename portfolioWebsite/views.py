from django.shortcuts import render

# Create your views here.
# myapp/views.py
from django.shortcuts import render


def homepage(request):
    return render(request, 'static/homepage.html')

def index(request):
    return render(request, 'static/index.html')

def projects(request):
    return render(request, 'static/projects.html')

def contact(request):
    return render(request, 'static/contact-me.html')

def insights(request):
    return render(request, 'static/insights.html')

def extras(request):
    return render(request, 'static/extras.html')