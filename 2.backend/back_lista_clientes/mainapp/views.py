import django_filters.rest_framework
import json
from django.shortcuts import render
from mainapp.serializers import *
from rest_framework.permissions import AllowAny
from rest_framework.decorators import api_view, schema
from rest_framework import viewsets, generics
from rest_framework.response import Response
from rest_framework.filters import OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_permissions(self):
        permission_classes = []
        if self.action == 'create':
            permission_classes = [AllowAny]
        elif self.action == 'retrieve' or self.action == 'update' or self.action == 'partial_update':
            permission_classes = [AllowAny]
        elif self.action == 'list':
            permission_classes = [AllowAny]

        return [permission() for permission in permission_classes]

    def get_queryset(self):
        if self.action == 'list':
            return self.queryset.filter(id=self.request.user.id)
        return self.queryset

class clientViewSet(viewsets.ModelViewSet):
    queryset = client.objects.all()
    serializer_class = clientSerializer
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_fields = ['id', 'identification', 'email', 'first_name', 
        'last_name', 'phone', 'address', 'web', 'notes', 'fk_user']
    ordering_fields = ['id', 'identification', 'email', 'first_name', 
        'last_name', 'phone', 'address', 'web', 'notes', 'fk_user']

    # permisos
    def get_permissions(self):
        permission_classes = []
        if self.action == 'list' or self.action == 'retrieve':
            permission_classes = [AllowAny]#todo cambiar esto
        else:
            permission_classes = [AllowAny]#todo cambiar esto
        return [permission() for permission in permission_classes]

class creditCardViewSet(viewsets.ModelViewSet):
    queryset = creditCard.objects.all()
    serializer_class = creditCardSerializer
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_fields = ['id', 'number', 'fk_cardType', 'fk_client', 'date', 'cvv']
    ordering_fields = ['id', 'number', 'fk_cardType', 'fk_client', 'date', 'cvv']

    # permisos
    def get_permissions(self):
        permission_classes = []
        if self.action == 'list' or self.action == 'retrieve':
            permission_classes = [AllowAny]
        else:
            permission_classes = [AllowAny]
        return [permission() for permission in permission_classes]

class cardTypeViewSet(viewsets.ModelViewSet):
    queryset = cardType.objects.all()
    serializer_class = cardTypeSerializer
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_fields = ['id', 'name']
    ordering_fields = ['id', 'name']

    # permisos
    def get_permissions(self):
        permission_classes = []
        if self.action == 'list' or self.action == 'retrieve':
            permission_classes = [AllowAny]
        else:
            permission_classes = [AllowAny]
        return [permission() for permission in permission_classes]