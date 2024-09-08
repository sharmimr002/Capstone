from django.urls import path
from .views import login

urlpatterns = [
    path('api/protected/', login, name='login'),
]