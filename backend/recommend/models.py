from django.db import models


class Career(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    required_skills = models.TextField()  # A list of skills or qualifications
    average_salary = models.DecimalField(max_digits=10, decimal_places=2)
    related_roadmap = models.TextField()  # Path to pursue this career
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class Roadmap(models.Model):
    career = models.ForeignKey(Career, on_delete=models.CASCADE)
    # Stage in the career path (e.g., "Junior Developer")
    stage_name = models.CharField(max_length=200)
    description = models.TextField()
    # Estimated time to complete the stage
    time_to_complete = models.DurationField()
    skills_required = models.TextField()  # Skills to be acquired in this stage

    def __str__(self):
        return f"{self.career.name} - {self.stage_name}"


class Resource(models.Model):
    career = models.ForeignKey(Career, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    link = models.URLField()
    description = models.TextField()
    # e.g., 'Course', 'Article', 'Book'
    resource_type = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.title} for {self.career.name}"
