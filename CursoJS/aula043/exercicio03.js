const fizzBuzz = (num) =>{
    let fizz= checkFizz(num);
    let buzz= checkBuzz(num);
    if(isNaN(num)||(!fizz&&!buzz)) return num;
    return `${fizz}${buzz}`
}

const checkFizz=(numero)=>{
   return ((numero%3)===0) ? 'Fizz':''   //fizz
}

const checkBuzz=(numero)=>{
    return ((numero%5)===0) ? 'Buzz':''   //fizz
}
for (let index = 0; index < 100; index++) {
    console.log(index,fizzBuzz(index));   
}