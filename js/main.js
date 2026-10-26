/* Base para nuevos productos */

class Producto {
    constructor(nombre,id,stock,precio) {
        this.nombre = nombre
        this.id = Number(id)
        this.stock = Number(stock)
        this.precio = Number(precio)
    }


    obtenerDetalle() {
        return `Producto: ${this.nombre} | ID: ${this.id} | Stock: ${this.stock} unidades | Precio: $${this.precio}`;
    }

    calcularDescuento(porcentaje) {
        let descuento = this.precio * (porcentaje / 100);
        return this.precio - descuento;
    }
}

/* funciones */

const saludar = (texto) => {alert (texto)} /* saludos */






let productos = [] /* Mi array de productos totales, donde se guardan los objetos */

/* Agregando primeros productos internamente antes de preguntar al usuario */

productos.push (new Producto ("Zapatilla",1,12,70000))
productos.push (new Producto ("Bolso",2,20,40000))
productos.push (new Producto ("Cartera",3,7,20000))

/* Comienza el simulador */

saludar("Buenas tardes administrador")

/* Enumera los productos que ya existen antes de preguntar al usuario si quiere agreggar mas */

let listadoInicial = "";

for (const p of productos) {
    listadoInicial += `\n- ${p.nombre} (ID: ${p.id}) | Stock: ${p.stock} | Precio: $${p.precio}`;
}

alert("Actualmente hay estos productos cargados en el sistema:" + listadoInicial);

let continuar = confirm("Administrador, desea agregar productos a la tienda?")


if (continuar===null) {
    saludar()
    
} 

    while (continuar) {

    let nuevoProd = new Producto(
        prompt("Que producto desea agregar"),
        prompt("con que id?"),
        prompt("cuanto stock hay disponible"),
        prompt("a que precio?")
    );

    productos.push(nuevoProd)

    console.table(productos)

    alert("Se ha agregado con éxito:\n" + nuevoProd.obtenerDetalle());

    continuar = confirm("Desea agregar mas productos?")
} 

if (productos.length>=3) {
    alert("No se agregaron productos al inventario")
} else {

    let resumen = ""

    for (const producto of productos) {

    resumen += `\n- ${producto.nombre} (ID: ${producto.id}) | Stock: ${producto.stock} | Precio: $${producto.precio}`;

    }

alert("Se han agregado: " + productos.length + " productos al inventario" + resumen)


let descuentoEfectivo = confirm("Quiere agregar a los productos un descuento si el usuario paga en efectivo?");

if (descuentoEfectivo) {
    let porcentaje = Number(prompt("Ingrese el porcentaje de descuento (ej: 10 para 10%):"));
    
    let resumenConDescuento = "";

    for (const producto of productos) {
        let precioFinal = producto.calcularDescuento(porcentaje);
        resumenConDescuento += `\n- ${producto.nombre} | Precio original: $${producto.precio} | Precio con ${porcentaje}% off: $${precioFinal}`;
    }

    alert("Precios actualizados con descuento:\n" + resumenConDescuento);
}
}




saludar("Que tenga buen dia!")


