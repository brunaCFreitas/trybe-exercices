let fruits = [3, 4, 10, 1, 12];

let soma = 0;

for(let index = 0; index < fruits.length; index += 1) {
    soma += fruits[index];

    if(soma > 15 ) {
        console.log(`O valor de soma é ${soma}`);
    } else {
        console.log(`Valor menor que 16`);
    }
}

