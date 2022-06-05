
//Declaración de variables
let arrayCliente = []

//Proceso principal
let nombreNuevo = prompt("Ingrese su nombre")
let apellidoNuevo = prompt("Ingrese su apellido")
let edadNueva = prompt("Ingrese su edad")
let documentoNuevo = prompt("Ingrese su documento")

//const clienteNuevo = new cliente(nombreNuevo, apellidoNuevo, edadNueva, documentoNuevo);

const clienteNuevo = {
  nombre: nombreNuevo,
  apellido: apellidoNuevo,
  edad: edadNueva,
  documento: documentoNuevo
}

console.log(clienteNuevo.apellido)
console.log(clienteNuevo.nombre)
console.log(clienteNuevo.edad)
console.log(clienteNuevo.documento)


arrayCliente.push(clienteNuevo)
console.log(arrayCliente)

if (arrayCliente.length > 0)
{
  arrayCliente.forEach(persona => {
    let vueloCliente = definirVuelo(persona)
    let hotelCliente = calcularHotel(persona)
    let autoCliente = definirAuto(persona) 
    
    calcularViaje(vueloCliente,hotelCliente,autoCliente, persona)
  });
}

function definirVuelo (persona){
    const primeraClase = 500;
    const claseEconamica = 200;
    let vuelo = Number(prompt( persona.nombre + ' ' + persona.apellido + ` que tipo de vuelo desea:  1.Primera Clase $500
                                                         2.Economica  $200`))
    let costoVuelo;
    if(vuelo == 1){
      costoVuelo = primeraClase;
    }else if(vuelo == 2){
      costoVuelo = claseEconamica
    }else{
      alert("datos no validos elija una opcion correcta")
    }
    return costoVuelo
  }
  
  function calcularHotel(persona){
    let hotelEstrellas = Number(prompt(persona.nombre + ' ' + persona.apellido + ` de cuantas estrellas desea su hotel?
                                            3 $100
                                            4 $200
                                            5 $300`))
    if(hotelEstrellas === 3){
      costoHotel = 100;
    }
    else if(hotelEstrellas === 4){
      costoHotel = 200;
    }
    else if(hotelEstrellas === 5){
      costoHotel = 300
    }
    else{
      alert("datos no validos elija una opcion correcta")
    }
    let cantidadDeNoches = Number(prompt("cuantas noches desea pasar?"))
    let resultado = cantidadDeNoches*costoHotel;
    return resultado
  }
  
  function definirAuto(persona){
  let auto = Number(prompt(persona.nombre + ' ' + persona.apellido + ` que auto desea: 1 chico $200  
                                            2 mediano $250
                                            3 grande $300`))
  if(auto === 1){
  costoAuto = 200;
  }
  else if(auto === 2){
  costoAuto = 250;
  }
  else if(auto === 3){
  costoAuto = 300                                        
  }
  else{
      alert("datos no validos elija una opcion correcta")
    }
  let cantidadDeDias = Number(prompt(`cuantos dias lo quiere alquilar?`))
  let resultado = cantidadDeDias*costoAuto;
  return resultado
  }  

  function calcularViaje (vuelo,hotelEstrellas,auto, persona){
    let costoTotal = vuelo + hotelEstrellas + auto;
    alert(persona.nombre + ' ' + persona.apellido + ` su viaje cuesta ${costoTotal} dolares`)
  }
