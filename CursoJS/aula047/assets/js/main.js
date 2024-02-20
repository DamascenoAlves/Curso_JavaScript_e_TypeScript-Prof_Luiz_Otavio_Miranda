const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.parar');
const zerar = document.querySelector('.zerar');
let timer
iniciar.addEventListener('click', function(event){
    timer= setInterval(atualizaTimer,1000);//inicia contagem do timer
    relogio.style.color='#000'
})
pausar.addEventListener('click', function(event){
    clearInterval(timer);
    relogio.style.color='#FF0000'
    console.log(relogio)
})
zerar.addEventListener('click', function(event){
    relogio.innerText='00:00:00'
    relogio.style.color='#000'
})
const atualizaTimer = ()=>{
    let [hora,min,sec]=relogio.innerText.split(':')
    
    sec=Number(sec)
    min=Number(min)
    hora=Number(hora)
    console.log([hora,min,sec])
    const novoRelogio = atualizaHora(hora,min,sec);
    
    relogio.innerText=novoRelogio;
}
const atualizaHora= (hora,min,sec) =>{
    sec++;
    if(sec>=60){
     min++;
     sec=0;
     if(min>=60){
        hora++;
        min=0;
        if(hora>=24){
            hora=0;
            min=0;
            sec=0;
        }
     }
    }
    sec=trataNum(sec);
    min=trataNum(min);
    hora=trataNum(hora);
    return `${hora}:${min}:${sec}`;
}
const trataNum =(num) =>{
    return num<10? `0${num}`:`${num}`
}