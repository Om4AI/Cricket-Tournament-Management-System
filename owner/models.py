from django.db import models

# Create your models here.

GENDER_CHOICES = (
    ('Male', 'male'),
    ('Female', 'female'),
    ('Other', 'not specified'),
)

class Player(models.Model):
    player_id=models.CharField(max_length=15)
    name = models.CharField(max_length = 100, null = True, blank = True)
    dob = models.DateField()
    age = models.IntegerField(null = True, blank = True)
    player_type = models.CharField(max_length = 100, null = True, blank = True)
    img_src = models.URLField(max_length=50000)
    price=models.IntegerField(null = True)
    gender = models.CharField(max_length=6,choices=GENDER_CHOICES,null = True)
    password=models.CharField(max_length=20,default='abc123')


class News(models.Model):
    headline = models.CharField(max_length = 100, null = True, blank = True)
    img_src = models.URLField(max_length=50000)
    short_info = models.CharField(max_length = 100, null = True, blank = True)
    link = models.URLField(max_length=50000,null = True, blank = True)

class Own(models.Model):
    owner_id=models.CharField(max_length=15)
    img_src = models.URLField()
    name = models.CharField(max_length = 100, null = True, blank = True)
    dob = models.DateField()
    age = models.IntegerField(null = True, blank = True)
    #tournamentname=models.CharField(max_length = 100, null = True, blank = True)
    gender = models.CharField(max_length=6,choices=GENDER_CHOICES,null = True)
    password=models.CharField(max_length=20, default = 'abc123')

class Tournament(models.Model):
    # id = models.CharField(max_length=100, primary_key=True)
    Tnm=models.CharField(max_length = 100, primary_key=True)
    Ttype=models.CharField(max_length = 100, null = True, blank = True)
    Sdate=models.DateField()
    Edate=models.DateField()
    verified = models.BooleanField(default = True)
    players = models.ManyToManyField(to = Player)



    