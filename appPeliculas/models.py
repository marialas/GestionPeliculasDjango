import os
from django.db import models
from django.dispatch import receiver

# Create your models here.

class Genero(models.Model):
    nombre = models.CharField(max_length=50)

    def __str__(self):
        return self.nombre

class Pelicula(models.Model):
    titulo = models.CharField(max_length=100)
    descripcion = models.TextField()
    imagen = models.ImageField(upload_to='peliculas/')
    genero = models.ForeignKey(Genero, on_delete=models.CASCADE)

    def __str__(self):
        return self.titulo

def delete(self, *args, **kwargs):
        # Borra la imagen del sistema de archivos
        if self.imagen and os.path.isfile(self.imagen.path):
            os.remove(self.imagen.path)
        super().delete(*args, **kwargs)