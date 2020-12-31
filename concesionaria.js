/* requerir módulo autos */
let autos = require('./autos');



const concesionaria = {
  autos: autos,
  buscarAuto: function(patente){
    for(let i = 0; i < autos.length; i++){
      if(autos[i].patente == patente){
        return autos[i];
      }else{
        return null
      }
    }
  },
  venderAuto: function(patente){
    let autoEncontrado = this.buscarAuto(patente);
    autoEncontrado ? autoEncontrado.vendido=true:"";
    return autoEncontrado.vendido;
  },
  autosParaLaVenta: function(){
    return autos.filter(auto => auto.vendido==false)
  }
}

// console.log(autos[1].patente)
// console.log(concesionaria.buscarAuto('APL123'));
// console.log(concesionaria.venderAuto('APL123'))

console.log(concesionaria.autosParaLaVenta())