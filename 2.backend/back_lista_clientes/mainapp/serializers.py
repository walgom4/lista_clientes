from rest_framework import serializers
from mainapp.models import User, client, creditCard, cardType

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'id', 'username', 'identification', 'email', 
        'password', 'first_name', 'last_name')
        extra_kwargs = {'password': {'write_only': True}}

class clientSerializer (serializers.ModelSerializer):
    class Meta:
        model = client
        fields = ('url', 'id', 'identification', 'email', 'first_name', 
        'last_name', 'phone', 'address', 'web', 'notes', 'fk_user')

class creditCardSerializer (serializers.ModelSerializer):
    class Meta:
        model = cardType
        fields = ('url', 'id', 'number', 'fk_cardType', 'fk_client', 'date', 'cvv')

class cardTypeSerializer (serializers.ModelSerializer):
    class Meta:
        model = cardType
        fields = ('url', 'id', 'name')

