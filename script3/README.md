# Script3
### Exercise 3

In this folder you will find two files:

* index3.html:

The functionality of this file is to create a web page where the JavaScript file can be viewed.

```html
<script src="/JSEscuela/js/Bloque2/script3.js" defer></script>
```
In that part of the html code, make sure to link the 'script3.js' file correctly according to where you have it in your files

* script3.js :

This script generates five paragraphs with random text with words defined within an array.
```javascript
const palabras = ["Lorem", "ipsum", "dolor", "taco", "pescado", "concatenar", "dom", "jefe", "sed", "for", "parrafo", "temporal", "aleatorio", "carro", "trabajo", "pelicula", "mercado", "magna", "agua."];
```
You can form your own words by adding or changing the words already defined in this arrangement.

The default text size will be between 50 and 100 words, but you can modify it by changing the values of the variables 'minimoPalabras' and 'maximoPalabras'.
```javascript
const minimoPalabras = 50;
const maximoPalabras = 100;
```
You can also generate more than five paragraphs by changing the value '5' inside the for loop.
```javascript
for (let i = 0; i < 5; i++) {
        const parrafo = generarTextoAleatorio(minimoPalabras, maximoPalabras);
        parrafos.push(parrafo);
    }
    return parrafos;
```
At the end of the paragraph the number of characters used will be displayed
