function cGasolina (distancia, kmRodado){
   return distancia / 16000 
}
function cEtanol (distancia, kmRodado){
   return distancia / 11000 
}


module.exports = {cGasolina, cEtanol}   