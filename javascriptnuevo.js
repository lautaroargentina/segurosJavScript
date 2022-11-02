const carrito = [];


//class moldeadora de objetos productos
class Seguro {
    constructor(id, nombre, precio, cobertura,img) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.cobertura = cobertura;
        this.img = img;
    }
}

//instanciamos (creamos) objetos manualmente
const seguro0 = new Seguro(0, "Cobertura A", 2500, "Resp Civil $23.000.000","casa.jpg");
const seguro1 = new Seguro(1, "Cobertura B", 4000, "Resp Civil $23.000.000 + Robo e Incendio");
const seguro2 = new Seguro(2, "Cobertura C", 5000, "Resp Civil $23.000.000 + Robo e Incendio Total y Parcial");
const seguro3 = new Seguro(3, "3ro completo", 6500, "Cobertura C + Cristales y granizo");
const seguro4 = new Seguro(4, "Todo Riesgo", 8500, "Todo Riesgo Franquicia $15000");
const seguroCasa1 = new Seguro(5, "Incendio", 1000, "Incendio Edificio","casa.jpg");
const seguroCasa2 = new Seguro(6, "Comb Fliar Enlatado", 2100, "Incendio + Robo","amigos.jpg");
const seguroCasa3 = new Seguro(7, "Comb Fliar Tradicional", 3500, "Incendio+Robo+Golpe de Tension","SORTEO.jpg");




//creamos un array y le asignamos 3 de los productos de nuestra tienda
const misSegurosAuto = [seguro0, seguro1, seguro2, seguro3, seguro4]
const misSegurosCasa =  [seguroCasa1, seguroCasa2, seguroCasa3]

let hogar = document.getElementById("casa") 

let bodyindex= document.getElementById ("bodyindex")
let hogar1= document.createElement ("div")
bodyindex.append(hogar1) 
hogar1.className= "col-sm-2"


//Alt Gr+C(al lado del enter) x 2 = ``
for (const elementos of misSegurosCasa){
    hogar1.innerHTML+=`
    <div class="card col-sm-2"  style = "width: 40rem;">
        <img src="./img/${elementos.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${elementos.nombre}</h5>
                <p class="card-text">${elementos.cobertura}</p>
                <a href="#" id='btn${elementos.id}'  class="btn btn-primary">CONTRATAR</a>
            </div>
    </div>
    `
}



//eventos


    //EVENTOS
    misSegurosCasa.forEach((elementos)=>{
        //evento para cada boton
        document.getElementById(`btn${elementos.id}`).addEventListener("click",function(){
        segurosAContratar(elementos);
        });
    });



function segurosAContratar(segurosDeInteres){
    carrito.push(segurosDeInteres);
    console.table(carrito);
    alert("Seguro "+segurosDeInteres.nombre+" agregado al carro!");
    document.getElementById("pepe").innerHTML+= `
        <tr>
            <td>${segurosDeInteres.id}</td>
            <td>${segurosDeInteres.nombre}</td>
            <td>${segurosDeInteres.precio}</td>
        </tr>
    `;
        let totalCarrito = carrito.reduce((acumulador,prod)=>acumulador+prod.precio,0);
        document.getElementById("total").innerText = "Total a pagar $: "+totalCarrito;
    }





