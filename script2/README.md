# Script2
### Exercise 2

In this folder you will find two files:

* index2.html:

The functionality of this file is to create a web page where the JavaScript file can be viewed.

```html
<script src="/JSEscuela/js/Bloque2/script2.js" defer></script>
```
In that part of the html code, make sure to link the 'script2.js' file correctly according to where you have it in your files

* script2.js :

The .js file is very similar to exercise 1, unlike the previous one, here we declare a larger array, which has 20 different colors.

```javascript
const colors = ['red', 'purple', 'green', 'beige', 'aqua', 'brown', 'darkviolet', 'cornflowerblue', 'darkcyan', 'darkslateblue', 'lavenderblush', 'pink', 'midnightblue', 'violet', 'yellow', 'yellowgreen', 'tomato', 'springgreen', 'sienna', 'mediumorchid'];
```
Likewise, you can change them, remove them or add more as you wish.

A function is also added which does not allow colors to be repeated.
```javascript
let usedColors = [];

function obtenerColores() {
    let newColor;
    do {
        newColor = colors[Math.floor(Math.random() * colors.length)];
    } while (usedColors.includes(newColor));
    usedColors.push(newColor);
    return newColor;
}
```

You can do your own tests by changing the following parameters:
```javascript
for (let i = 0; i < 10; i++) {
    div.style.height = '100px';
    div.style.margin = '0.8rem 0px';
}
```
If you want more containers you can modify the number '10' within the for loop, or also change the height and margin of the containers.
