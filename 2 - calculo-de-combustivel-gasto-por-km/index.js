let calculo = require("./calculo")
var readlineSync = require('readline-sync');



var distancia = parseFloat(readlineSync.question("qual a distância a ser percorrida em metros?: "))


let combustivel = parseInt(readlineSync.question("qual combustivel você deseja escolher? se for gasolina, digite 1, se for etanol, digite 2. "))
     
    if (combustivel = 1){
        console.log(`o gasto necessário de gasolina para rodar ${distancia}m é: `, calculo.cGasolina(distancia/16000)+" litros.")
    }else{
        console.log(`o gasto necessário de etanol para rodar ${distancia}m é: `, calculo.cEtanol(distancia/11000)+" litros.")
    }



//CORRIGIR NÚMERO DE RESULTADO.. EX: 0.00009551953125
//É PRA SER POR EXEMPLO: 95.0L