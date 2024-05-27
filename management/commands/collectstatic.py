# myapp/management/commands/collectstatic.py
import os
import shutil
from django.core.management.base import BaseCommand
from django.conf import settings


class Command(BaseCommand):
    help = 'Collects static files from React build'

    def handle(self, *args, **kwargs):
        react_build_path = os.path.join(settings.BASE_DIR, 'frontend', 'build')
        static_root_path = settings.STATIC_ROOT

        if os.path.exists(react_build_path):
            shutil.copytree(react_build_path, static_root_path, dirs_exist_ok=True)
            self.stdout.write(self.style.SUCCESS('Successfully collected React static files.'))
        else:
            self.stdout.write(self.style.ERROR('React build directory does not exist.'))
