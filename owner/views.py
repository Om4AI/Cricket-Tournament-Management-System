from django.shortcuts import render
from django.http import HttpResponse

from .models import Player, News, Own, Tournament

def index(request):
    return HttpResponse("hello world")

