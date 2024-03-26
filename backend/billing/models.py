from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db import models

class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)

    # Add related_name attributes to resolve conflicts
    groups = models.ManyToManyField(Group, related_name='customuser_set')
    user_permissions = models.ManyToManyField(
        Permission, related_name='customuser_set')

    def __str__(self):
        return self.username
