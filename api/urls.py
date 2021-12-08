from django.urls import path
from . import views 

app_name = 'api'

urlpatterns = [
    path('addPlayer', views.add_player, name = 'add_player'),
    path('getPlayer', views.get_player, name = 'get_player'),
    path('delPlayer', views.del_player, name = 'del_player'),
    path('addNews', views.add_news, name = 'add_news'),
    path('getNews', views.get_news, name = 'get_news'),
    path('delNews', views.del_news, name = 'del_news'),
    path('addOwn', views.add_own, name = 'add_own'),
    path('getOwn', views.get_own, name = 'get_own'),
    path('delOwn', views.del_own, name = 'del_own'),
    path('delPlayerfromTournament', views.delPlayerfromTournament, name = "delPlayerfromTournament"),
    path('addTournament', views.add_tournament, name = 'add_tournament'),
    path('getTournament', views.get_tournament, name = 'get_tournament'),
    # path('addTournamentPlayer', views.add_tournament_player, name = 'add_tournament_player'),
    path('delTournament', views.del_tournament, name = 'del_tournament'),
    path('login', views.login, name = "login")
]