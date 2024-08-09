// Inicializar la variable para el total a pagar
let totalApagar = 0;

// Crear un arreglo para almacenar los productos
let productos = [];

// Bucle para solicitar los datos de cada producto y calcular el subtotal
for (let index = 1; index <= 3; index++) {
    const nombre = prompt(`Ingrese el nombre del producto ${index}:`);
    let cantidad = Number(prompt(`Ingrese la cantidad de ${nombre}:`));
    let precio = Number(prompt(`Ingrese el precio de cada ${nombre}:`));

    const subtotal = cantidad * precio;
    totalApagar += subtotal;

    // Agregar el producto a la lista de productos
    productos.push({ nombre, cantidad, precio, subtotal });
}

// Mostrar la lista de productos y el total a pagar en la consola
console.log("Lista de productos:");
productos.forEach(producto => {
    console.log(`Producto: ${producto.nombre}, Cantidad: ${producto.cantidad}, Precio: $${producto.precio}, Subtotal: $${producto.subtotal}`);
});

console.log(`El total a pagar es: $${totalApagar}`);