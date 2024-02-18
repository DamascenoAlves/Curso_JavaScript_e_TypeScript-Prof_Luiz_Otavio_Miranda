function meuEscopo(){
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado') //seleciona a div resultados

    const pessoas = [];

    // form.onsubmit = function(evento){
    //      evento.preventDefault();
    // };
    
    function recebeEventoForm(event){
        event.preventDefault();                                 //previne envio do formulário
        const nome = form.querySelector('.nome');               //seleciona o campo nome do formulário
        const sobrenome = form.querySelector('.sobrenome');     //seleciona o campo sobrenome do formulário
        const peso = form.querySelector('.peso');               //seleciona o campo peso do formulário
        const altura = form.querySelector('.altura');           //seleciona o campo altura do formulário
        const perfil={nome:nome.value, sobrenome:sobrenome.value, peso:peso.value, altura:altura.value};    //cria o objeto com os valores
        pessoas.push(perfil);                                   //incrementa o valor do perfil ao ultimo indice do array pessoas
        resultado.innerHTML+=`<p>${perfil.nome} ${perfil.sobrenome} ${perfil.peso} ${perfil.altura}</p>`;   //Escreve o perfil dentro da div resultado
        console.log(pessoas);                                   //exibe o valor do objeto para o console
    }


    form.addEventListener('submit', recebeEventoForm);


}

meuEscopo();