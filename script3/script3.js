// Función para generar texto aleatorio entre un rango de palabras
function generarTextoAleatorio(minimoPalabras, maximoPalabras) {
    const palabras = ["Lorem", "ipsum", "dolor", "taco", "pescado", "concatenar", "dom", "jefe", "sed", "for", "parrafo", "temporal", "aleatorio", "carro", "trabajo", "pelicula", "mercado", "magna", "agua."];
    const numeroPalabras = Math.floor(Math.random() * (maximoPalabras - minimoPalabras + 1)) + minimoPalabras;
    let texto = "";
    for (let i = 0; i < numeroPalabras; i++) {
        const randomIndex = Math.floor(Math.random() * palabras.length);
        texto += palabras[randomIndex] + " ";
    }
    return texto.trim();
}

// Función para generar párrafos con texto aleatorio
function generarParrafos(minimoPalabras, maximoPalabras) {
    const parrafos = [];
    for (let i = 0; i < 5; i++) {
        const parrafo = generarTextoAleatorio(minimoPalabras, maximoPalabras);
        parrafos.push(parrafo);
    }
    return parrafos;
}

// Obtener el elemento del cuerpo del documento HTML
const body = document.querySelector('body');

// Generar 5 párrafos con texto aleatorio y mostrar su longitud
const minimoPalabras = 50;
const maximoPalabras = 100;

const parrafos = generarParrafos(minimoPalabras, maximoPalabras);
parrafos.forEach((parrafo) => {
    const p = document.createElement('p');
    p.textContent = parrafo;
    const wordCount = parrafo.split(' ').length;
    p.textContent += ` [${wordCount} palabras]`;
    p.style.backgroundColor = 'lavenderblush'
    body.appendChild(p);
});
