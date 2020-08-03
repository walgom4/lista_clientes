from django.conf.urls import url, include
from rest_framework import routers
from mainapp.views import *
from django.urls import path

router = routers.DefaultRouter()
router.register(r'user', UserViewSet)
router.register(r'client', clientViewSet)
router.register(r'cardType', cardTypeViewSet)
router.register(r'creditCard', creditCardViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^auth/', include('rest_auth.urls')),
     ]