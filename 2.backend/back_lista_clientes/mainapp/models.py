from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import ugettext_lazy as _

# Create your models here.
class User(AbstractUser):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=50, unique=True)
    identification = models.CharField(max_length=50, null=True, blank=True)
    email = models.EmailField(_('email address'), unique=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email', 'first_name', 'last_name']

    def __str__(self):
        return "{}".format(self.id)

class client(models.Model):
    id = models.AutoField(primary_key=True)
    identification = models.CharField(max_length=50, null=True, blank=True)
    email = models.CharField(max_length=50)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    phone = models.CharField(max_length=50, null=True, blank=True)
    address = models.CharField(max_length=50, null=True, blank=True)
    web = models.CharField(max_length=50, null=True, blank=True)
    notes = models.CharField(max_length=250, null=True, blank=True)
    fk_user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return "{}".format(self.id)

class cardType(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)

    def __str__(self):
        return "{}".format(self.id)

class creditCard(models.Model):
    id = models.AutoField(primary_key=True)
    numberCard = models.CharField(max_length=16)
    fk_cardType = models.ForeignKey(cardType, on_delete=models.CASCADE, null=True)
    fk_client = models.ForeignKey(client, on_delete=models.CASCADE, null=True)
    date = models.DateField()
    cvv = models.CharField(max_length=3)

    def __str__(self):
        return "{}".format(self.id)



