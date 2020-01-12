from todo.models import Todo
from rest_framework import serializers


class TodoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Todo
        fields = ('id','name', 'unit', 'sum','startDate','updateDate')

      