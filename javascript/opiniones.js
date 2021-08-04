
const url='../json/review.json';
$.getJSON(url, function (respuesta, estado) {
    if(estado === "success"){
      let opiniones = respuesta;
     
      for (const opinion of opiniones) {
        $("#card-opinion").prepend(`<div class="col-md-6 col-lg-4 item">
        <div class="box">
            <p class="description">${opinion.review}</p>
        </div>
        <div class="author"><img class="rounded-circle" src="${opinion.imagen}">
            <h5 class="name">${opinion.nombre}</h5>
            
        </div>
    </div>`)
      }  
    }
    });
