from rest_framework import serializers
from mainapp.models import User, client, creditCard, cardType

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'id', 'username', 'identification', 'email', 
        'password', 'first_name', 'last_name', 'is_active', 'is_staff')
        extra_kwargs = {'password': {'write_only': True}}
    
    def create(self, validated_data):
        password = validated_data.pop('password')
        user = User(**validated_data)
        user.is_active = True
        user.set_password(password)
        user.save()
        #send email here
        return user

class clientSerializer (serializers.ModelSerializer):
    class Meta:
        model = client
        fields = ('url', 'id', 'identification', 'email', 'first_name', 
        'last_name', 'phone', 'address', 'web', 'notes', 'fk_user')

class creditCardSerializer (serializers.ModelSerializer):
    class Meta:
        model = creditCard
        fields = ('url', 'id', 'numberCard', 'fk_cardType', 'fk_client', 'date', 'cvv')

class cardTypeSerializer (serializers.ModelSerializer):
    class Meta:
        model = cardType
        fields = ('url', 'id', 'name')

