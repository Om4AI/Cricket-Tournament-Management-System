from django.shortcuts import render
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from owner.models import Player, News, Own, Tournament
from .serializers import PlayerSerializer, NewsSerializer, OwnSerializer, TournamentSerializer

# Create your views here.

@api_view(['POST',])
def delPlayerfromTournament(request):
    print(request.data)
    player_id = request.data.get('player_id')
    tournament_name = request.data.get('tournament_name')

    tnm = Tournament.objects.get(Tnm = tournament_name)

    player = Player.objects.get(pk=player_id)

    try:
        tnm.players.remove(player)
    except:
        pass
    
    return Response(status = status.HTTP_200_OK)

@api_view(['POST',])
def add_player(request):
    if request.method == "POST":

        player_serializer = PlayerSerializer(data = request.data)
        
        if not player_serializer.is_valid():
            print(player_serializer.errors)
            return Response(player_serializer.errors, status = status.HTTP_400_BAD_REQUEST)

        player_serializer.save()

        data = {
            'message': 'Player Added Successfully!',
            'data': player_serializer.data
        }
        

        return Response(data, status = status.HTTP_200_OK)

@api_view(['GET',])
def get_player(request):
    if request.method == "GET":

        players = Player.objects.all()
        player_serializer = PlayerSerializer(players, many = True)

        data = {
            'data': player_serializer.data
        }
        return Response(player_serializer.data, status = status.HTTP_200_OK)

@api_view(['POST',])
def del_player(request):

        
        instance = Player.objects.get(pk=request.data['player_id'])
        instance.delete()
        return Response(status = status.HTTP_200_OK)


@api_view(['POST',])
def add_news(request):
    if request.method == "POST":

        news_serializer = NewsSerializer(data = request.data)
        
        if not news_serializer.is_valid():
            print(news_serializer.errors)
            return Response(news_serializer.errors, status = status.HTTP_400_BAD_REQUEST)

        news_serializer.save()

        data = {
            'message': 'News Added Successfully!',
            'data': news_serializer.data
        }

        return Response(data, status = status.HTTP_200_OK)

@api_view(['GET',])
def get_news(request):
    if request.method == "GET":

        news = News.objects.all()
        news_serializer = NewsSerializer(news, many = True)

        data = {
            'data': news_serializer.data
        }
        return Response(news_serializer.data, status = status.HTTP_200_OK)

@api_view(['POST',])
def del_news(request):

        print(request.data)
        instance = News.objects.get(pk=request.data['id'])
        instance.delete()
        return Response(status = status.HTTP_200_OK)

@api_view(['POST',])
def add_own(request):
    if request.method == "POST":
        print(request.data)
        own_serializer = OwnSerializer(data = request.data)
        
        if not own_serializer.is_valid():
            print(own_serializer.errors)
            return Response(own_serializer.errors, status = status.HTTP_400_BAD_REQUEST)

        
        own_serializer.save()
        print(own_serializer.data)

        data = {
            'message': 'Owner Added Successfully!',
            'data': own_serializer.data
        }
        

        return Response(data, status = status.HTTP_200_OK)
         
@api_view(['GET',])
def get_own(request):
    if request.method == "GET":

        own = Own.objects.all()
        own_serializer = OwnSerializer(own, many = True)

        data = {
            'data': own_serializer.data
        }
        return Response(own_serializer.data, status = status.HTTP_200_OK)   

@api_view(['POST',])
def del_own(request):

        print(request.data)
        Own.objects.filter(owner_id=request.data['owner_id']).delete()
        # instance.delete()
        return Response(status = status.HTTP_200_OK)         

@api_view(['POST',])
def add_tournament(request):
    if request.method == "POST":

        # tournament_serializer = TournamentSerializer(data = request.data)
        
        # if not tournament_serializer.is_valid():
        #     print(tournament_serializer.errors)
        #     return Response(tournament_serializer.errors, status = status.HTTP_400_BAD_REQUEST)

        # tournament_serializer.save()
        t = Tournament.objects.create(Ttype = request.data['Ttype'],Tnm = request.data['Tnm'], Sdate = request.data['Sdate'], Edate = request.data['Edate'] )
        print(request.data['list'])
        player_ids = request.data['list']
        # print(t)
        # tournament = Tournament.objects.get(pk = t.pk)
        # print(tournament)
        # t = Tournament.objects.get(Tnm=request.data['Tnm'])
        print(Player.objects.all())
        for elem in player_ids:
            instance = Player.objects.get(player_id = elem)
            print(instance)
            t.players.add(instance)
            # t.save()

        print(t.Ttype)
        print(t.players)
        data = {
            'message': 'Tournament Added Successfully!',
            # 'data': tournament_serializer.data
        }
        

        return Response(data, status = status.HTTP_200_OK)

@api_view(['GET',])
def get_tournament(request):
    if request.method == "GET":

        tournament = Tournament.objects.filter(verified=True)
        tournament_serializer = TournamentSerializer(tournament, many = True)

        data = {
            'data': tournament_serializer.data
        }
        return Response(tournament_serializer.data, status = status.HTTP_200_OK)

@api_view(['POST',])
def del_tournament(request):

        # print(request.data)
        Tournament.objects.filter(Tnm=request.data['id']).delete()
        # instance.delete()
        return Response(status = status.HTTP_200_OK)        
    
@api_view(['POST',])
def login(request):
    if request.method == "POST":
        email_id = request.data.get('email_id')
        password = request.data.get('password')
        print(request.data)

        try:
            user = Player.objects.get(player_id = email_id , password = password)
            data = {
            'id': user.pk,
            'message': 'player'
            }
            return Response(data, status = status.HTTP_200_OK)

        except:
            pass
        print(1)
        try:
            user = Own.objects.get(owner_id = email_id , password = password)
            data = {
            'id': user.pk,
            'message': 'owner'
            }
            return Response(data, status = status.HTTP_200_OK)

        except:
            data = {
                'message': 'User Does not exist or Password Incorrect!'
            }
            return Response(data, status = status.HTTP_400_BAD_REQUEST)

# @api_view(['POST',])
# def add_tournament_player(request):
#     player_id = request.data['player_id']
#     player = Player.objects.get(player_id = player_id)

            

