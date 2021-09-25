# Ejercicio

## Consideraciones generales

El objetivo es crear un script que permita ejectuar acciones determinadas sobre archivos del proyecto.

Se debe utilizar unicamente los metodos nativos de Node JS, no se solicita usar librerias de NPM.


### Resultado en pantalla

Cuando se ingrese por consola el siguiente parámetro:

> node fs count

Debe mostrar en consola la cantidad total de archivos existentes en la carpeta files

### Tamaño por archivo

Cuando el comando ejecutado sea:

> node fs size

Deberá volcar en el archivo "summary.txt" una linea por cada archivo indicando el nombre y el peso del archivo en kb. Ejemplo:

```txt
a.txt 564 kb
b.txt 36 kb
c.txt 756 kb
d.txt 1464 kb
e.txt 947 kb
f.txt 193 kb
```

### Cantidad de caracteres

Cuando el comando ejecutado sea:

> node fs length

Deberá volcar en el archivo "summary.txt" una linea por cada archivo indicando el nombre y la cantidad total de caracteres que contiene. Y al final una linea mas que indique la cantidad total de caracteres que suman todos los valores anteriores. Ejemplo:

```txt
a.txt 564 chars
b.txt 36 chars
c.txt 756 chars
d.txt 1464 chars
e.txt 947 chars
f.txt 193 chars

3960 chars
```

### Busqueda de texto

Cuando el comando ejecutado sea:

> node fs search "ipsum"

Deberá mostrar en pantalla los nombres de los archivos que contengan en cualquier parte del texto la palabra indicada en el ultimo parametro.


### Respuesta por defecto

Cuando se ejecute el comando con un parámetro por defecto que no sea válido, imprimirá en consola el mensaje `El comando "estecomandonoexiste" no se reconoce. Los comandos validos son: count, size, length, search`

> node fs estecomandonoexiste

