
from django.urls import path
from auth import views

urlpatterns = [
    path('signIn/', views.signIn , name="sign-in"),

]
