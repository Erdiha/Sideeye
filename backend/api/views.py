from django.http import HttpResponse
from django.shortcuts import render


# Create your views here.
def main(request):
    return HttpResponse("this is the homepage")


# def about(request):
#     return render(request, "about.html")
