from django.urls import path

from . import views

urlpatterns = [
    path('predict/', views.create_entries, name='predict'),
    # path('recommend/', views.recommend, name='recommend'),
]
