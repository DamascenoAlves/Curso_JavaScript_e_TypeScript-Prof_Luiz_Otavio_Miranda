let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

const holdingValue=varA;
varA=varB;
varB=varC;
varC=holdingValue;

console.log(varA,varB,varC);