/*
Matheus Damasceno Alves tem 25 anos, pesa 84kg
tem 1.73 de altura e seu IMC é de 30.73941661933242
*/

const nome = 'Matheus';
const sobrenome = 'Damasceno Alves';
const idade = 26;
const peso = 92;
const alturaEmM = 1.73;

let indiceMassaCorporal; // imc  =  peso/(altura*altura)
let anoNascimento;

indiceMassaCorporal= peso/(alturaEmM*alturaEmM);
anoNascimento = 2024 -idade;
//Minha solução
console.log(nome,sobrenome,'tem',idade,'anos, pesa',peso,'kg');
console.log('tem',alturaEmM,'de altura e seu IMC é de', indiceMassaCorporal);
console.log(nome,'nasceu em',anoNascimento)


//Solução do professor
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);