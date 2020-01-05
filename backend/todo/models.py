from django.db import models

class Todo(models.Model):
    name = models.CharField(max_length=30)
    unit = models.IntegerField()
    sum = models.IntegerField()
    startDate = models.DateTimeField()
    def __str__(self): 
        return self.name

