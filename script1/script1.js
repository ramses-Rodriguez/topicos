const body = document.querySelector('body')
const colors = ['red', 'purple', 'green', 'beige', 'aqua', 'brown', 'darkviolet']

for (let i=0 ; i<10 ; i++) {
    const div = document.createElement('div')
    div.style.height = '100px'
    div.style.margin = '0.8rem 0px'
    div.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)]
    body.appendChild(div)
}