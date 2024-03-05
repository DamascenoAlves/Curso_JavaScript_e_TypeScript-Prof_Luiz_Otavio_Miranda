// 705.484.450-52 070.987.720-03
/*
7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.

7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10  9  8  7  6  5  4  3  2
77  0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.
*/

function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function () {
            return cpfEnviado.replace(/\D+/g, '')
        }
    });
}

ValidaCPF.prototype.valida = function () {
    if (typeof this.cpfLimpo === 'undefined') return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequencia()) return false;
    cpfLimpoArray = Array.from(this.cpfLimpo)
    const digitosCalculado = this.criaDigitos(cpfLimpoArray)
    const validacao = this.comparaDigitos(digitosCalculado,cpfLimpoArray.slice(-2))
    return validacao
}

ValidaCPF.prototype.criaDigitos = function (cpfLimpo) {
    const cpfDigitosValidacao = cpfLimpo.slice(0, 9)

    const totalPrimeiroDigito = cpfDigitosValidacao.reduce((ac, val, index) => ac + (Number(val) * (10 - index)), 0)
    const primeiroDigito = this.validaDigito(totalPrimeiroDigito)
    cpfDigitosValidacao.push(`${primeiroDigito}`)
    const totalSegundoDigito = cpfDigitosValidacao.reduce((ac, val, index) => ac + (Number(val) * (11 - index)), 0)
    const segundoDigito = this.validaDigito(totalSegundoDigito)
        
    return [`${primeiroDigito}`,`${segundoDigito}`]

}

ValidaCPF.prototype.validaDigito = function (digito) {
    const digitoCalculado = 11 - (digito % 11)
    return (digitoCalculado % 11) >= 9 ? 0 : digitoCalculado
}

ValidaCPF.prototype.comparaDigitos = function(digitoCalculado,digitoInserido){
    return (digitoCalculado.toString()===digitoInserido.toString())
}
ValidaCPF.prototype.isSequencia = function(){
    return this.cpfLimpo[0].repeat(this.cpfLimpo.length)===this.cpfLimpo;
}

//cpfDigitosValidacao.push(`${primeiroDigito}`)
//cpfDigitosValidacao.push(`${segundoDigito}`)



let cpf = new ValidaCPF('705.484.450-52');
console.log(cpf.valida())


// if(cpfDigitosOriginais.toString()!==cpfDigitosCalculados.toString()){
//     console.log('CPF inválido')
// }else{console.log('CPF válido')}
// function validaDigito(total) { return (total % 11) >= 9 ? 0 : total % 11 }
// function calculaDigitos(digitosCpf) {
//     const totalPrimeiroDigito = digitosCpf.reduce((ac, val, index) => ac + (Number(val) * (10 - index)), 0)
//     const primeiroDigito = validaDigito(totalPrimeiroDigito)
//     const totalSegundoDigito = digitosCpf.reduce((ac, val, index) => ac + (Number(val) * (11 - index)), 0)
//     const segundoDigito = validaDigito(totalSegundoDigito)
//     return [`${primeiroDigito}`, `${segundoDigito}`]
// }