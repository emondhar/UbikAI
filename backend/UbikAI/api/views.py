from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
# Location

def main(request):
    return HttpResponse("hello")