let calculo = require("./calculo")
var readlineSync = require('readline-sync');



var distancia = parseInt(readlineSync.question("qual a distância a ser percorrida em metros?: "))
distancia.toFixed()

let combustivel = parseInt(readlineSync.question("qual combustivel você deseja escolher? se for gasolina, digite 1, se for etanol, digite 2. "))
     
    if (combustivel = 1){
        console.log(`o gasto necessário de gasolina para rodar ${distancia}m é: `, calculo.cGasolina(distancia/16000))
        console.log(`o gasto necessário de etanol para rodar ${distancia}m é: `, calculo.cEtanol(distancia/11000),)
    }



/*if(distancia != (Number)){
    console.log('Digite a distância em formato numerico.')

    let combustivel = String(readlineSync.question("e qual o tipo de combustível? álcool ou gasolina?: "))

    switch (calculo.cGasolina, calculo.cEtanol) {
    case etanol:
        console.log (calculo.cEtanol)
        break;

    default:
        console.log (calculo.cGasolina)
        break;
}
}*/