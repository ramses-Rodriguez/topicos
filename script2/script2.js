const body = document.querySelector('body');
const colors = ['red', 'purple', 'green', 'beige', 'aqua', 'brown', 'darkviolet', 'cornflowerblue', 'darkcyan', 'darkslateblue', 'lavenderblush', 'pink', 'midnightblue', 'violet', 'yellow', 'yellowgreen', 'tomato', 'springgreen', 'sienna', 'mediumorchid'];
let usedColors = [];

// Función para obtener un color no utilizado
function obtenerColores() {
    let newColor;
    do {
        newColor = colors[Math.floor(Math.random() * colors.length)];
    } while (usedColors.includes(newColor));
    usedColors.push(newColor);
    return newColor;
}

for (let i = 0; i < 10; i++) {
    const div = document.createElement('div');
    div.style.height = '100px';
    div.style.margin = '0.8rem 0px';
    const color = obtenerColores();
    div.style.backgroundColor = color;
    body.appendChild(div);
}

