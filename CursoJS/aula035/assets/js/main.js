const conteudo = document.querySelector('.container');
const div = document.createElement('div')
const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'section', texto: 'Frase 3'},
    {tag: 'footer', texto: 'Frase 4'},
];

for(let i=0; i<elementos.length; i++){
    const node = document.createElement(`${elementos[i].tag}`)
    node.innerText=elementos[i].texto
    div.appendChild(node)
}
conteudo.appendChild(div)