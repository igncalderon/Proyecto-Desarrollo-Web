const categorias = document.querySelectorAll('#categorias .categoria');
const contenedorPreguntas = document.querySelectorAll('.contenedor-preguntas');
let categoriaActiva = null;
let Registrados = []

categorias.forEach((categoria) => {
	categoria.addEventListener('click', (e) => {
		categorias.forEach((elemento) => {
			elemento.classList.remove('activa');
		});

		e.currentTarget.classList.toggle('activa');
		categoriaActiva = categoria.dataset.categoria;


		// Activamos el contenedor de preguntas que corresponde
		contenedorPreguntas.forEach((contenedor) => {
			if(contenedor.dataset.categoria === categoriaActiva){
				contenedor.classList.add('activo');
			} else {
				contenedor.classList.remove('activo');
			}
		});
	});
});


const preguntas = document.querySelectorAll('.preguntas .contenedor-pregunta');
preguntas.forEach((pregunta) => {
	pregunta.addEventListener('click', (e) => {
		e.currentTarget.classList.toggle('activa');

		const respuesta = pregunta.querySelector('.respuesta');
		const alturaRealRespuesta = respuesta.scrollHeight;
		
		if(!respuesta.style.maxHeight){
			// Si esta vacio el maxHeight entonces ponemos un valor.
			respuesta.style.maxHeight = alturaRealRespuesta + 'px';
		} else {
			respuesta.style.maxHeight = null;
		}

		// [Opcional] Reiniciamos las demas preguntas
		preguntas.forEach((elemento) => {
			// Solamente queremos ejecutar el codigo para las preguntas que no 
			// sean la pregunta a la que le dimos click.
			if(pregunta !== elemento){
				elemento.classList.remove('activa');
				elemento.querySelector('.respuesta').style.maxHeight = null;
			}
		});


	});
});


// ANIMACION JQUERY PARA QUE SCROLLEE CUANDO REDIRECCIONO EN LA MISMA PAGINA

$(function(){

    $('a[href*=#]').click(function() {

    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {

            var $target = $(this.hash);

            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');

            if ($target.length) {

                var targetOffset = $target.offset().top;

                $('html,body').animate({scrollTop: targetOffset}, 1000);

                return false;

           }

      }

  });

});

function carrito(){
	alert("Producto agregado al carrito");
}



// PAGOS

function comprar(){
	alert("Pago realizado, a la brevedad te va a llegar un mail con la confirmación");
}
function descuento(){
	alert("Descuento aplicado");
}

// VALIDACION FORMULARIOS


function validarNombreFormulario(){
	const expRegNombre=/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
	let $obtenerNombre = document.querySelector('#nombre-formulario');
	
	if(!$obtenerNombre.value){
		alert("El campo Nombre es requerido");
		$obtenerNombre.focus();
		return false;
	}else if(!expRegNombre.exec($obtenerNombre.value)){
		alert("El campo Nombre no tiene el formato correcto")
	}else{
		var objeto = [true,$obtenerNombre];
		return objeto;
	}
	
}
function validarApellidoFormulario(){
	const expRegApellidos=/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
	let $obtenerApellido = document.querySelector('#apellido-formulario');

	if(!$obtenerApellido.value){
		alert("El campo Apellido es requerido");
		$obtenerApellido.focus();
		return false;
	}else if(!expRegApellidos.exec($obtenerApellido.value)){
		alert("El campo Apellido no tiene el formato correcto");
		$obtenerApellido.focus();
		return false;
	}else{return true}
}
function validarEmailFormulario(){
	const expRegCorreo=/^\w+@(\w+\.)+\w{2,4}$/; 
	let $obtenerEmail = document.querySelector('#email-formulario')
	
	if(!$obtenerEmail.value){
		alert("El campo Email es requerido");
		$obtenerEmail.focus();
		return false;
	}else if(!expRegCorreo.exec($obtenerEmail.value)){
		alert("El campo correo no tiene el formato correcto");
		$obtenerEmail.focus();
		return false;
	}else{return true}
}
function validarTelefonoFormulario(){
	const expRegNumber = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
	let $obtenerTelefono = document.querySelector('#telefono-formulario');

	if(!$obtenerEmail.value){
		alert("El campo Teléfono es requerido");
		$obtenerTelefono.focus();
		return false;
	}else if(!expRegNumber.exec($obtenerTelefono.value)){
		alert("El campo teléfono no tiene el formato correcto");
		$obtenerTelefono.focus();
		return false;
	}else{return true}
}
function validarConsultaFormulario(){
	const $obtenerConsulta = document.querySelector('#consulta-formulario');
	let longConsulta = $obtenerConsulta.value
	console.log(longConsulta.length)

	if((longConsulta.length + 1) <= 10 ){
		alert("El campo debe tener mas de 10 caracteres");
		$obtenerConsulta.focus();
		return false;
	}else{ return true }

}
function enviarFormulario(){
	if(!validarNombreFormulario() || !validarApellidoFormulario() || !validarEmailFormulario() || !validarConsultaFormulario()){
		console.log("No se envio")
	}else{
		let $obtenerNombre = document.querySelector('#nombre-formulario').value
		alert(`${$obtenerNombre}, tu consulta fue enviada correctamente. A la brevedad nos contactaremos con usted`)
	}
}

function RegistrarFormulario(){
	
	const nombreRegister = document.querySelector("#registerNombre");
	nombreRegisterValue = nombreRegister.value;
	
	const apellidoRegister = document.querySelector("#registerApellido");
	apellidoRegisterValue = apellidoRegister.value;
	const emailRegister = document.querySelector("#registerApellido");
	emailRegisterValue = emailRegister.value;
	const contrasenaRegister = document.querySelector("#registerContrasena");
	contrasenaRegisterValue = contrasenaRegister.value;
	class Usuario{
		constructor(nombre, apellido, email, contrasena) { 
			this.nombre = nombre;
			this.apellido = apellido;
			this.email = email;
			this.contrasena = contrasena; 
		}
	usuarioRegistrado(){
		alert(`Registrado correctamente ${this.nombre}`)
	}
}
	
	let usuarioNuevo = new Usuario(nombreRegisterValue, apellidoRegisterValue, emailRegisterValue, contrasenaRegisterValue);
	usuarioNuevo.usuarioRegistrado();
	Registrados.push(usuarioNuevo);
	console.log(Registrados);

}