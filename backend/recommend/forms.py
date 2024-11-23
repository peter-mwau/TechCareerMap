from django import forms
from .models import Career, Roadmap, Resource


class CareerForm(forms.ModelForm):
    class Meta:
        model = Career
        fields = ['name', 'description', 'required_skills',
                  'average_salary', 'related_roadmap']


class RoadmapForm(forms.ModelForm):
    class Meta:
        model = Roadmap
        fields = ['career', 'stage_name', 'description',
                  'time_to_complete', 'skills_required']


class ResourceForm(forms.ModelForm):
    class Meta:
        model = Resource
        fields = ['career', 'title', 'link', 'description', 'resource_type']
