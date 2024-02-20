function meuEscopo(){
    const form = document.querySelector('.form');
    const peso = document.querySelector('#peso');
    const altura = document.querySelector('#altura');
    const resultado = document.querySelector('.resultado');
    function calculaImc(event) {
        event.preventDefault();
        const pesoInserido = Number(peso.value);
        const alturaInserida = Number(altura.value);
        
        if(isNaN(alturaInserida)&&isNaN(pesoInserido)){
            resultado.innerHTML=`<p class="imc-invalido">Peso e altura inválidos.</p>`
        }else if(isNaN(pesoInserido) || pesoInserido===0)
        {
            resultado.innerHTML=`<p class="imc-invalido">Peso inválido.</p>`
        }else if (isNaN(alturaInserida)|| alturaInserida===0){
            resultado.innerHTML=`<p class="imc-invalido">Altura inválida.</p>`
        }else{
            const imc = pesoInserido/(alturaInserida**2)    
            let imcText;
            if(imc<18.5){
                imcText='(Abaixo do peso)'
            } else if(imc>=18.5 && imc<25) {
                imcText='(Peso normal)'
            } else if(imc>=25 && imc<30) {
                imcText='(Sobrepeso)'
            } else if(imc>=30 && imc<35) {
                imcText='(Obesidade grau 1)'
            } else if(imc>=35 && imc<40) {
                imcText='(Obesidade grau 2)'
            } else if(imc>=40) {
                imcText='(Obesidade grau pica)'
            }
            resultado.innerHTML=`<p class="imc-valido">Seu IMC é ${imc.toFixed(2)} ${imcText}</p>`
        }
    }
    form.addEventListener('submit', calculaImc)
};
meuEscopo();