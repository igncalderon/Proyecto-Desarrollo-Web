// let productos = [
//     {
//         id: 1,
//         name: 'mochila',
//         imagen: 'https://http2.mlstatic.com/D_NQ_NP_851177-MPE32058933198_092019-O.jpg',
//         precio: 340
//     },
//     {
//         id: 2,
//         name: 'frenos',
//         imagen: 'https://www.thebikecompany.com.ar/img/articulos/freno_a_disco_hidraulico_shimano_deore_m6000_trasero_imagen1.jpg',
//         precio: 700
//     },
//     {
//         id: 3,
//         name: 'velocimetro',
//         imagen: 'data:image/jpeg;base64,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',
//         precio: 340
//     },
//     {
//         id: 4,
//         name: 'portabotellas',
//         imagen: 'data:image/jpeg;base64,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',
//         precio: 80
//     },
//     {
//         id: 5,
//         name: 'guantes',
//         imagen: 'https://labicikleta.com/wp-content/uploads/2019/04/GiroRemedy.jpg',
//         precio: 250
//     },
//     {
//         id: 6,
//         name: 'casco profesional',
//         imagen: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/628/448/products/ktm-factory-youth-01-8d0c8fabf156f46fe915258806367423-640-0.jpg',
//         precio: 340
//     },
//     {
//         id: 7,
//         name: 'luces recargables',
//         imagen: 'https://http2.mlstatic.com/D_NQ_NP_657857-MLC31877395825_082019-O.jpg',
//         precio: 340
//     },
//     {
//         id: 8,
//         name: 'luces',
//         imagen: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/628/448/products/703654-mla26249859045_102017-o-ac456edc14451801bb15110259457932-640-0.jpg',
//         precio: 340
//     },
//     {
//         id: 9,
//         name: 'linga + llaves',
//         imagen: 'https://borabikes.com.ar/62565-large_default/casco-bicicleta-mtb-fox-flux-helmet-muy-liviano-nuevo-modelo.jpg',
//         precio: 340
//     },
//     {
//         id: 10,
//         name: 'casco',
//         imagen: 'https://www.thebikecompany.com.ar/img/articulos/freno_a_disco_hidraulico_shimano_deore_m6000_trasero_imagen1.jpg',
//         precio: 200
//     },
// ]
// let carro = []
// console.log(productos)

$.getJSON('../json/data.json', (productosJSON) => {
   
    console.log(productosJSON)
    let productos = productosJSON
    for(producto of productos){
        $(".section-cards").prepend(
            `<div class="card__accesorios" data-value=${producto.id}>
            <div class="image-section">
               <img src=${producto.img} alt="">
            </div>
            <div class="description">
               <h1 class="nombre-articulo">${producto.title}</h1>
               <p><b>Precio</b><span>${producto.precio}</span><del>$370</del></p>  
            </div>
            <div class="button-group">
               <a href="compra.html" class="buy" id=${producto.id} onclick=comprar(this.id)>Comprar</a>
               
               <!-- <a href="" onclick=carrito(this.id) id=${producto.id} class="cart">Añadir al carro</a> -->
               <button onclick=carrito(this.id) id=${producto.id} class="cart">Añadir al carro</button>
            </div>
            <div class="star-icons">
               <a href=""><i class="fas fa-star"></i></a>
               <a href=""><i class="fas fa-star"></i></a>
               <a href=""><i class="fas fa-star-half-alt"></i></a>
            </div>
         </div>`
        )
    }
    
    
})

// const mostrarProductos = (array) => {
//     console.log(array)
// }


carrito = (id) =>{
    let cart = document.getElementById('cart_menu_oculto');
    console.log(cart)
    console.log(id)
    for (let i = 0; i <productos.length; i++){
        if(id == productos[i].id){
           carro.push(productos[i]) 
        }

    }
    if(carro.length == 1){
        cart.setAttribute('id', 'cart_menu_num')
    }else{
        let cartCantidad = document.getElementById('cart_menu_num')
        cartCantidad.textContent = carro.length
    }
    console.log(carro)
    
}