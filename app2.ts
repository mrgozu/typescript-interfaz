// Crear interfaces
interface auto{
  encender:boolean,
  velocidadMaxima:number,
  acelerar():void
}

interface Villano {
  reir?:boolean,
  comer?:boolean,
  llorar?:boolean
}

// Cree una interfaz para validar el auto (el valor enviado por parametro)
function conducirBatimovil( auto:auto ):void{
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
}

let batimovil:auto = {
  encender:false,
  velocidadMaxima:0,
  acelerar(){
    console.log("...... run!!!");
  }
}
batimovil.acelerar();
// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

let guason = {
  reir: true,
  comer:true,
  llorar:false
}

function reir( guason:Villano ):void{
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}

reir(guason);

// Cree una interfaz para la siguiente funcion

function ciudadGotica( ciudadanos:string[] ):number{
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
interface Obliga { 
  nombre:string;
  edad: number;
  sexo: string;
  estadoCivil:string;
  imprimirBio(): void
}