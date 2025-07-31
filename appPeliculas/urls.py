from django.urls import path
from . import views

urlpatterns = [
    path('', views.inicio, name='inicio'),
    path('agregar-genero/', views.agregar_genero, name='agregar_genero'),
    path('agregar-pelicula/', views.agregar_pelicula, name='agregar_pelicula'),
    path('listar-peliculas/', views.listar_peliculas, name='listar_peliculas'),
    path('editar-pelicula/<int:id>/', views.editar_pelicula, name='editar_pelicula'),
    path('eliminar-pelicula/<int:id>/', views.eliminar_pelicula, name='eliminar_pelicula'),
]
