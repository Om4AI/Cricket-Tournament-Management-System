from django.contrib import admin

# Register your models here.
from .models import Player, News, Own, Tournament

admin.site.register(Player)
admin.site.register(News)
admin.site.register(Own)
admin.site.register(Tournament)