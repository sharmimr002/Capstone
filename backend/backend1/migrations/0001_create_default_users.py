from django.db import migrations
from django.contrib.auth.models import User

def create_default_users(apps, schema_editor):
    User = apps.get_model('auth', 'User')
    # Create default users
    User.objects.create_superuser(
        username='admin',
        email='admin@example.com',
        password='adminpassword'
    )
    User.objects.create_user(
        username='user1',
        email='user1@example.com',
        password='user1password'
    )
    User.objects.create_user(
        username='user2',
        email='user2@example.com',
        password='user2password'
    )

class Migration(migrations.Migration):

    # dependencies = [
    #     ('backend'),
    # ]

    operations = [
        migrations.RunPython(create_default_users),
    ]
