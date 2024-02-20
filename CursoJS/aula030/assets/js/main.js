


function carregaData() {
    const data= document.querySelector(".container h1")
    const dataAtual = new Date();
    const diaSemana = avaliaDiaSemana(dataAtual);
    console.log(diaSemana)
    const dia = dataAtual.getDate();
    const mes = avaliaMes(dataAtual);
    const ano = dataAtual.getFullYear();
    const hora = checaZero(dataAtual.getHours());
    const min = checaZero(dataAtual.getMinutes());

    data.innerHTML = `${diaSemana}, ${dia} de ${mes} de ${ano} <br> ${hora}:${min}`
}
carregaData()

function avaliaDiaSemana(data) {
    const dia = data.getDay();
    switch (dia) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda-feira';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-feira';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-feira';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = '';
            return diaSemanaTexto;
    }
}
function avaliaMes(data) {
    const mes = data.getMonth();
    switch (mes) {
        case 0:
            diaSemanaTexto = 'Janeiro';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Fevereiro';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Março';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Abril';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'JMaio';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Junho';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Julho';
            return diaSemanaTexto;
        case 7:
            diaSemanaTexto = 'Agosto';
            return diaSemanaTexto;
        case 8:
            diaSemanaTexto = 'Setembro';
            return diaSemanaTexto;
        case 9:
            diaSemanaTexto = 'Outubro';
            return diaSemanaTexto;
        case 10:
            diaSemanaTexto = 'Novembro';
            return diaSemanaTexto;
        case 11:
            diaSemanaTexto = 'Dezembro';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = '';
            return diaSemanaTexto;
    }
}
function checaZero(data){
    return data>=10?`${data}`:`0${data}`
}