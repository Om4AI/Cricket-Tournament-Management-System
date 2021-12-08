from rest_framework import fields, serializers

from owner.models import Player, News, Own, Tournament


class PlayerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Player
        fields = '__all__'


class NewsSerializer(serializers.ModelSerializer):

    class Meta:
        model = News
        fields = '__all__'

class OwnSerializer(serializers.ModelSerializer):

    class Meta:
        model = Own
        fields = '__all__'

class TournamentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tournament
        fields = '__all__'