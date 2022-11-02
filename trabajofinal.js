/* El trabajo se trata sobre una aseguradora, que permite loguearse a su sistema y poder cotizar
en linea los productos o al menos indicarle cual es la cobertura maxima que puede contratar */

/* let posicion = listaAlumnos.indexOf("Lopez");
console.log(posicion);

posicion = listaAlumnos.indexOf("Herrera");
console.log(posicion);

let apellido = prompt("Ingresa el apellido buscado");
posicion = listaAlumnos.indexOf(apellido);
if(posicion!=-1){
    alert("El alumno "+listaAlumnos[posicion]+" se encuentra en el curso");
}else{
    alert("El alumno no se encuentra en el curso");
} */

/* 

let opcionesA= prompt("***LOGIN*** \n Elija la opcion que desea elegir  (elegir la opcion con el numero solamente)\n Opcion 1 - Ingresar \n Opcion 2 - Actualizar contraseña" )


let usuario 
let clave 
const listaUsuarios = ["Perez","Centeno","Lopez","Rodriguez","Burocco"];

if (opcionesA=="1"){
    for (let i=1; i<=3;i++){
        usuario = prompt ("Ingrese su nombre de usuario (cliente)")
        clave = prompt ("Ingrese su clave para el usuario " + usuario + "(111)")

        if ((usuario=="cliente") && (clave= "111")){
            alert ("Bienvenido al sistema Cotizador");
            break;
        } 
        else{
            alert ("Usuario y/o contraseña invalida. Restan " + (3-i) + "intentos");
        }
} 
}

else if (opcionesA=="2"){
    class clave{
        constructor(usuario1,clave1){
            this.usuario1=usuario1;
            this.clave1=clave1;
        }
        //metodos
        mostrarUsuario(){
            return "Usuario: "+this.usuario1+"\nClave: "+this.clave1;
        }
        actualizarContrasenia(nuevaClave){
            this.clave1=nuevaClave;
            console.log("Contraseña actualizada!");
        }
    }

    const usuario1=new clave("Valei","123456");
    const usuario2=new clave("pepe","444444");
    

    console.log(usuario1);
    console.log(usuario2.mostrarUsuario());
    
    usuario2.actualizarContrasenia(prompt("Ingresa nueva contraseña"));
    console.log(usuario2.mostrarUsuario()); 
}


//funcion Auto
const vigente=2022
function AñoAuto (año){
    return vigente-año;
}

//Funcion casa
const ValorM2=300000
const valorDelseguro=0.0001
function Metros2(tamaño){
    return tamaño*ValorM2
}




let opciones= prompt("***COTIZADOR*** \n Elija el seguro que desea cotizar (elegir la opcion con el numero solamente)\n Opcion 1 - Auto \n Opcion 2 - Casa" )

if (opciones=="1"){
    let Modelo= parseInt (prompt("Ingrese el año de su auto y le indicaremos la antiguedad del mismo"))
    let cobertura= AñoAuto (Modelo);
    alert ("La antiguedad del auto es de " + cobertura + "años")
    if (cobertura<6) { alert ("Cobertura Maxima posible - todo Riesgo")
        
    } else if (cobertura<15 ){ alert ("Cobertura Maxima posible - 3ro completo")
        
    } else if (cobertura<=30 ){ alert ("Cobertura Maxima posible - Responsabilidad Civil")  }
    else{ alert ("Antiguedad mayor a 30 años, fuera de pauta de suscripcion")
    }    
}

else if (opciones=="2"){
    let m2= parseInt (prompt("Ingrese los m2 de su casa y le indicaremos el valor del seguro de Incendio"))
    let cobertura2= Metros2 (m2);
    alert ("La suma asegurada recomendada para su casa en funcion de los metros cuadrados declarados es de $ " + cobertura2);    
    alert("el precio del seguro para la suma asegurada de $ "+cobertura2+ " es de $ "+ (cobertura2*valorDelseguro) + "por mes")
}

else {
    alert ("opcion no valida, debe elegir opcion 1 o 2")
} 

function Auto (parametrosAuto){
    this.marca= parametrosAuto.marca;
    this.modelo = parametrosAuto.modelo;
    this.anio = parametrosAuto.anio;    
}

const miAuto = {
    marca:"Ford",
    modelo:"ka",
    anio:"2018",
    }

const miAuto2 = {
    marca: prompt ("Indique la marca de su auto"),
    modelo:prompt ("Indique el modelo de su auto"),
    anio:parseInt (prompt("Ingrese elaño de su auto"))
}
const Auto1= new Auto (miAuto);
const Auto2= new Auto (miAuto2);

console.log(Auto1)
console.log(Auto2)


//otro ejemplo de objetos//

function CasaTradicional(zona, m2, pisos){
    this.zona=zona;
    this.m2=m2;
    this.pisos=pisos;
    
    //metodo para Mascota
    this.mostrarCasa=function(){
        console.log("Mi casa esta ubicada en "+this.zona+" tiene "+this.m2+" m2 y la cantidad de pisos que tengo es de " +this.pisos);
    }
}
*/
/* const casa1=new CasaTradicional( "La Plata","45","2"); 

const casa1=new CasaTradicional( prompt ("indique la zona de su casa"),parseInt (prompt ("indique los m2")),parseInt (prompt ("indique la cantidad de pisos")));


casa1.mostrarCasa();

for (const property in casa1){
    console.log (property)
}
 */

const listaSeguros = ["Auto","Casa","Moto","ART","AP","Bicicleta"];
console.log(listaSeguros);

const SegurosAutos = [
    {
        id:1,
        nombre:"Cobertura A- Resp Civil",
        Cobertura:"Resp Civil $23.000.000",
        precio:2000
    },
    {
        id:2,
        nombre:"Cobertura B",
        Cobertura:"Resp Civil $23.000.000 + Robo e Incendio",
        precio:3000
    },
    {
        id:3,
        nombre:"Cobertura C",
        Cobertura:"Resp Civil $23.000.000 + Robo e Incendio Total y Parcial",
        precio:4000
    }
];

 //forEach
SegurosAutos.forEach((tipos) => console.log(tipos.nombre));

const segurosEconomicos = SegurosAutos.filter((tipos) => tipos.precio < 2500);
console.log(segurosEconomicos);