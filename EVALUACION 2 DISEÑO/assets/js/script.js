const productos = [
    {
        tipo: "venta",
        nombre: "Máscara de Luchador 'El Santo'",
        precio: 35000,
        estado: "Nuevo",
        img: "/assets/img/venta1.jpg"
    },
    {
        tipo: "venta",
        nombre: "Máscara de Luchador 'El Perro'",
        precio: 32000,
        estado: "Nuevo",
        img: "/assets/img/venta2.jpg"
    },
    {
        tipo: "venta",
        nombre: "Máscara de Luchador 'Mascaras Todo Tipo'",
        precio: 19000,
        estado: "Nuevo",
        img: "/assets/img/venta3.jpg"
    },
    {
        tipo: "arriendo",
        nombre: "Servicio Decoración Cumpleaños",
        precio: 45000,
        estado: " Contrata este servicio",
        img: "/assets/img/servicio1.jpg"
    },
    {
        tipo: "arriendo",
        nombre: "Cotillón Temática Lucha Libre",
        precio: 40000,
        estado: "Contrata este servicio",
        img: "/assets/img/servicio2.jpg"
    },
    {
        tipo: "arriendo",
        nombre: "Servicio pasteleria temática Lucha Libre",
        precio: 45000,
        estado: "Contrata este servicio",
        img: "/assets/img/servicio3.jpg"
    },
];

function crearTarjetas(productos, tipo) {
    return productos
        .filter(producto => producto.tipo === tipo)
        .map(producto => `
            <div class="col-md-4">
                <div class="card">
                    <img src="${producto.img}" alt="${producto.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="precio">$${producto.precio.toLocaleString()}</p>
                        <p class="estado">${producto.estado}</p>
                    </div>
                </div>
            </div>
        `).join('');
}

function cargarTodo() {
    const productosContainer = document.getElementById('productos-container');
    productosContainer.innerHTML = `
        <h2>Productos en Venta</h2>
        <div class="row">${crearTarjetas(productos, "venta")}</div>
        <hr>
        <h2>Productos en Arriendo</h2>
        <div class="row">${crearTarjetas(productos, "arriendo")}</div>
    `;
}

function cargarVenta() {
    const productosContainer = document.getElementById('productos-container');
    productosContainer.innerHTML = `
        <h2>Productos en Venta</h2>
        <div class="row">${crearTarjetas(productos, "venta")}</div>
    `;
}

function cargarArriendo() {
    const productosContainer = document.getElementById('productos-container');
    productosContainer.innerHTML = `
        <h2>Productos en Arriendo</h2>
        <div class="row">${crearTarjetas(productos, "arriendo")}</div>
    `;
}

document.addEventListener('DOMContentLoaded', cargarTodo);
