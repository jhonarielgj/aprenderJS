## Titulos

Va hasta 6 niveles y se usa # antes de cada título desde # hasta ######

# Título 1

## Título 2

### Título 3

#### Título 4

##### Título 5

###### Título 6

---

## Modificadores al Texto

Texto en _cursiva_ usando \_ texto \_

Texto en **negrita** usando \*\* texto \*\*

Texto ~~tachado~~ usando \-- texto --

## Listas

Para hacer un salto de línea se usa un enter entre líneas.

### Lista desordenada

Se hacen con \* + tab o espacio

- a
- b
  - Este es un subítem (tab y \*)
- c

### Lista ordenada

Se hace con 1. + tab o espacio

1. Item 1
   1. Sub ítem numérico
   - Sub ítem desordenado
2. Item 2

## Enlaces

[texto a mostrar](dirección del enlace "Título a mostrar al hacer mouse over")

[Alandra Postres](www.alandra.com.co "Página principal de Alandra Postres")

## Línea divisora:

Se hace con ---

---

### Línea de código:

Se encienrra en comilla simple invertida: \` línea de código `. Ej:

`Esto es una línea código`

### Bloques de código:

Se encierra en triple comilla simple invertida: \``` Acá va el bloque de código ```. Ej:

```
function accion(cuadrosDeTexto) {
  console.log("Click");
  console.log("cuadrosDeTexto: ", cuadrosDeTexto[0].innerHTML);
}
```

**Poner color al código**: En el bloque de código, si indico al principio el lenguaje, mostrará en colores resaltado dicho código:

_Código en JavaScript_

```javascript
function accion(cuadrosDeTexto) {
  console.log("Click");
  console.log("cuadrosDeTexto: ", cuadrosDeTexto[0].innerHTML);
}
```

_Código de Phyton_

```python
print('Hello world')
```

_Código de HTML_

```html
<h1>Este es un título</h1>
```

_Código CSS_

```css
.botones {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

### Tablas

Se usa | para generar las columnas y enter (nueva línea) para generar las filas

| Col 1  | Col 2   | Col3  |
| ------ | ------- | ----- |
| Tema n | n + 1   | n + 2 |
| Fila 2 | F 2 C 2 | f2 c3 |

## Imágenes

Funciona igual que los enlaces, pero se agrega ! al inicio.

![Alandra Postres](https://www.alandra.com.co/wp-content/uploads/2019/07/cropped-ALANDRA-CUADRADO-2019.jpg "Página principal de Alandra Postres")

Si el archivo se encuentra en el disco local, se puede dar la ruta local.

![Bebé](baby.jpg "Foto de bebé")

# Reglas Markdown para GitHub

## Lista de chequeo

[ ] Item 1

[x] Item 2 chequeado

[ ] Item 3

[x] Item 4 Chequeado
