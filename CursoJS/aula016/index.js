//               0       1        2          3      4
let alunos = ['Luiz', 'Maria', 'João']; // Luiza, Eduardo 
//alunos = 123;

console.log(typeof alunos); //Retorna objeto caso alunos seja um array
console.log(alunos instanceof Array);

// alunos.push('Luiza');        //Adiciona elementos ao fim do array
// alunos.push('Eduardo');      

// console.log(alunos.slice(0, -2)); //O negativo usa o tamanho do array menos o valor        

// console.log(alunos[50]);         // retorna undefined caso o array não tenha a quantidade de itens do índice solicitado

// delete alunos[1];          //Remove o item no indice 1, mas não altera a posição dos outros      
// console.log(alunos[1]);          

// const removido = alunos.shift(); //remove o primeiro elemento do array
// const removido = alunos.pop(); //remove o ultimo elemento do array
// console.log(removido);
// console.log(alunos);

// alunos.unshift('Fábio'); // Adiciona no começo do array
// alunos.unshift('Luiza');


// alunos.push('Luiza'); // Adiciona no fim do array
// alunos.push('Fábio');

// alunos[alunos.length] = 'Luiza';  // Adiciona no fim do array
// alunos[alunos.length] = 'Fábio';
// alunos[alunos.length] = 'Luana';

// alunos[0] = 'Eduardo'; // Altera
// alunos[3] = 'Luiza'; // Adicionando, mas é necessário saber o tamanho dp array para não alterar

// console.log(alunos);
// console.log(alunos[0]);
// console.log(alunos[2]);