##DataLovers Studio Ghibli

###Descripcíon

Página web enfocada al estudio Ghibli y a su público. Los principales usuarios de la página son fans del Studio Ghibli que buscan conocer datos concretos de  las películas, sus personajes, locaciones etc  y algún dato curioso sobre el estudio.

Esta página ofrece las siguientes funcionalidades:

- Visualizar
- Ordenar
- Filtrar
- Calcular

Estas funciones seran alternadas dentro de las secciones de la pagina divididas en las siguientes Pestañas (Menú):

- Películas
- Personajes
- Locaciones
- vehículos
- curiosidades

> Cada pestaña tendrá su propia barra de navegación para buscar un dato en concreto y se podrá ordenar la data alfabéticamente.




##Detalle de funciones

####Funcion Filtrar

- Películas ➡️ productor y  director
- Productor ➡️ Films
- Director ➡️ Films
- Personajes ➡️ género, especies y películas
- Locaciones ➡️ clima y tipo de terreno


####Funcion Ordenar

Se podra ordenar de forma alfabetica (ascendente y descendente). Disponible para:

- Peliculas
- Personajes
- Locaciones
- Vehículos

Video Demo：<https://github.com> ejemplo





#Proceso del proyecto

####Prototipos de interfaz:

Se llevaron a cabo prototipos de la visualización de la página; uno de baja y otro de alta fidelidad.

Prototipo de baja fidelidad (se hizo a lápiz y papel)

~~(Irían las imágenes de los prototipos)~~

Prototipo de alta fidelidad (se hizo en Figma)

~~(Irían las imágenes de los prototipos)~~


#Historia de usuario
El proyecto fue dividido en cuatro HU.
####Historia 1.

**Objetivo:** Visualizacion de la data, basada en los diseños de Interfaz.

La visualizacion de  la seccion principal sera en formato de grilla.
La informacion a mostrar para las peliculas sera la siguiente:

- reseña
- fecha de lanzamiento
- rating
- director y productor

Estos datos seran mostraran con un tooltip que se desplegara al momento de pasar el cursor sobre la imagen de la pelicula.

####Historia 2.

**Objetivo:** Ordenar data

La data de (películas, personajes, vehículos y locaciones) se podra ordenar en orden alfabético, tanto ascendentemente como descendentemente.

La data de películas también se ordenarán por fecha de lanzamiento (más reciente a más antigua y más antigua a más reciente).


####Historia 3.

**Objetivo:** Filtrar data

En la seccion películas podra filtrar por:
- Productor y director.

En la seccion personajes se podra filtrar por:
- género, especie y titulo de película.

En la seccion locaciones se podra filtrar por:
- Clima y tipo de terreno.


> Se agrego una funcion extra para permitir que los filtros trabajaran en conjunto.

####Historia 4.

**Objetivo:** Calcular y graficar data.


Estos datos se mostraran en la seccion "Trivia" y se basan en el porcentaje de exito de las producciones, tanto como para directores y productores.

- Porcentaje de éxito total por la cantiad de peliculas
- Cantidad de peliculas por director
- Cantidad de peliculas por productor


> Estos datos seran visualizados con gráficos de barras laterales, mostrando por barra el detalle.


#Tests unitarios

Para confirmar la funcionalidad en diferentes situaciones del proyecto, se crearon tests para validar la correcta ejecucion de las funciones.

- Ordenar
- Calcular
- Filtrar

A continuación un video de los tests:

(Aquí iría un grabación de los tests corriéndose en VSC)

####Al pasar los tests se detectaron dos problemáticas:

- Las funciones de orden no se ejecutaron correctamente, los datos  estaban en minúsculas y mayúsculas.

- Las funciones de filtro no tenían una condición si  no hubiesen datos disponibles en el momento de uso.

> Ambas problemáticas fueron identificadas y resueltas gracias a los tests.

