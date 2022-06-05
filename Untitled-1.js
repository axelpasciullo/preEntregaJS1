

  let datos = []

class cliente{
  costructor(nombre, apellido, edad, documento)
  {
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    this.documento = documento 
  }
}

    let nombreNuevo = prompt("Ingrese su nombre")
    let apellidoNuevo = prompt("Ingrese su apellido")
    let edadNueva = prompt("Ingrese su edad")
    let documentoNuevo = prompt("Ingrese su documento")
    const cliente1 =  new cliente(nombreNuevo, apellidoNuevo, edadNueva, documentoNuevo)
    alert(cliente1)








/*const cliente1 = new cliente (1, "axel", "pasciullo", 31, 3568985, )
  console.log(cliente1)*/






function definirVuelo (){
    const primeraClase = 500;
    const claseEconamica = 200;
    let vuelo = Number(prompt(`que tipo de vuelo desea:  1.Primera Clase $500
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
  
  function calcularHotel(){
    let hotelEstrellas = Number(prompt(`de cuantas estrellas desea su hotel?
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
  
  function definirAuto(){
  let auto = Number(prompt(`que auto desea: 1 chico $200  
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


   
   let vueloCliente = definirVuelo()
   let hotelCliente = calcularHotel()
   let autoCliente = definirAuto() 
   
   function calcularViaje (vuelo,hotelEstrellas,auto){
     let costoTotal = vuelo + hotelEstrellas + auto;
     alert(`su viaje cuesta ${costoTotal} dolares`)
   }
   calcularViaje(vueloCliente,hotelCliente,autoCliente)

   //...............................................................

   /*const cliente = []

   class datosCliente {

    constructor(id, nombre, apellido) {
    
    this.id = id;
    
    this.nombre = nombre;
    
    this.apellido = apellido;
    
    }
    
    }

    let dato0 = prompt(“ingrese su nombre”); cliente.push(dato)

    let dato1 = prompt(“ingrese su apellido”); cliente.push(dato)

    let dato2 = prompt(“ingrese su documento”); cliente.push(dato)*/













   



