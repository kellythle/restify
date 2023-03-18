from django.urls import path
from .views import AddProperty, EditProperty, DeleteProperty, OrderSortProperties, EditPropertyImages
from .views import CreateReservation, EditReservation, DeleteReservation, HostReservation, GuestReservation

app_name = 'properties'
urlpatterns = [
    path('addproperty/', AddProperty.as_view(), name='createproperty'),
    path('editproperty/<int:pk>', EditProperty.as_view(), name='editproperty'),
    path('editimgproperty/<int:pk>',
         EditPropertyImages.as_view(), name='editimgproperty'),
    path('deleteproperty/<int:pk>',
         DeleteProperty.as_view(), name='deleteproperty'),
    path('all/', OrderSortProperties.as_view(), name='ordersort'),

    path('createreservation/', CreateReservation.as_view(),
         name='createreservation'),
    path('deletereservation/<int:pk>/',
         DeleteReservation.as_view(), name='deletereservation'),
    path('guestreservation/',
         EditReservation.as_view(), name='editreservation'),
    path('hostreservation/',
         HostReservation.as_view(), name='hostreservation'),
    path('editreservation/<int:pk>',
         GuestReservation.as_view(), name='guestreservation'),
]
