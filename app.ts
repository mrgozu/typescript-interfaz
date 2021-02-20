
interface Xmen {
    nombre:string,
    poder?:string,
    regenerar( nombreReal:string):void;
}

function enviarMision(xmen:Xmen){
    console.log(`Enviando a: ${xmen.nombre}`);
    xmen.regenerar('logan');
}

let wolverine:Xmen = {
    nombre: 'wolverine',
    poder: 'Regeneracion',
    regenerar(x:string){
        console.log('se ha regenerado '+ x);
    }
}

enviarMision(wolverine);

class Mutante implements Xmen {
    nombre:string;
    regenerar (nombre:string){
        console.log(`Hola ${nombre}`);
    }
    constructor ( nombre:string){
        this.nombre = nombre;
    }
    
}

let wolv = new Mutante('wolverine');
wolv.regenerar('wolv');


interface DosNumerosFunc{
    (num1:number, num2:number) : number
}

let sumar:DosNumerosFunc;
sumar = (a:number, b:number)=>{
    return a + b;
}
console.log(sumar(1,2));