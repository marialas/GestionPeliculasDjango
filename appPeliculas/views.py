from django.shortcuts import render, redirect, get_object_or_404
from .models import Genero, Pelicula
from django.http import HttpResponse

# Create your views here.
def inicio(request):
    return render(request, 'inicio.html')

def agregar_genero(request):
    if request.method == 'POST':
        nombre = request.POST['nombre']
        Genero.objects.create(nombre=nombre)
        return redirect('inicio')
    return render(request, 'agregarGenero.html', {'mensaje': 'Género agregado exitosamente'})

def agregar_pelicula(request):
    generos = Genero.objects.all()
    if request.method == 'POST':
        titulo = request.POST['titulo']
        descripcion = request.POST['descripcion']
        imagen = request.FILES['imagen']
        genero_id = request.POST['genero']
        genero = Genero.objects.get(id=genero_id)
        Pelicula.objects.create(titulo=titulo, descripcion=descripcion, imagen=imagen, genero=genero)
        return redirect('listar_peliculas')
    return render(request, 'agregarPelicula.html', {'generos': generos, 'mensaje': 'Película agregada exitosamente'})

def listar_peliculas(request):
    peliculas = Pelicula.objects.all()
    return render(request, 'listarPeliculas.html', {'peliculas': peliculas})

def editar_pelicula(request, id):
    pelicula = get_object_or_404(Pelicula, id=id)
    generos = Genero.objects.all()
    if request.method == 'POST':
        pelicula.titulo = request.POST['titulo']
        pelicula.descripcion = request.POST['descripcion']
        if 'imagen' in request.FILES:
            pelicula.imagen = request.FILES['imagen']
        genero_id = request.POST['genero']
        pelicula.genero = Genero.objects.get(id=genero_id)
        pelicula.save()
        return redirect('listar_peliculas')
    return render(request, 'actualizarPelicula.html', {'pelicula': pelicula, 'generos': generos})

def eliminar_pelicula(request, id):
    pelicula = get_object_or_404(Pelicula, id=id)
    pelicula.delete()
    return redirect('listar_peliculas')
