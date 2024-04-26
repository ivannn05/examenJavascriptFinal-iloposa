/**
 * 
 */
var array = [];
var pedido;
//Metodo el cual se encarga de aniadir a la lista los clientes 
function aniadir() {


	var user = prompt("Escriba su nombre")
	var coste = prompt("Escriba coste")



	var dia = prompt("Escriba su dia de la fecha de entrada ")
	var mes = prompt("Escriba su mes de la fecha de entrada")
	var anio = prompt("Escriba su anio de la fecha de entrada")
	dia = Number(dia)
	mes = Number(mes)
	anio = Number(anio)


	let fechaEntrada = new Date(anio, (mes - 1), dia);
	let fechaSalida = new Date(fechaEntrada);
	fechaSalida.setDate(fechaEntrada.getDate() + 5);

	if (fechaEntrada.getDay() === 0) {

		fecha.setDate(fechaEntrada.getDate() + 1);
	}
	pedido = { user, coste, fechaEntrada: fechaEntrada.toLocaleDateString(), fechaSalida };


	array.push(pedido);



	var muestra =  pedido.user + " "+ pedido.coste + " "+  fechaEntrada + " "+ fechaSalida + " " +"<br>"
	let aux="";
	for (let i = 0; i < array.length; i++) {
		 aux =  array[i].user + " "+ array[i].coste + " "+  array[i].fechaEntrada + " "+ array[i].fechaSalida + " " +"<br>"
	muestra=muestra+aux
	
}

	document.getElementById("muestraAqui").innerHTML = (muestra)
}

//Metodo el cual se encarga de eliminar de la lista los clientes 
function eliminar() {
	let nombreAEliminar = prompt("Ingrese el nombre por el que quiere eliminar");

	console.log(pedido)
	let posicion = -1;
	for (let i = 0; i < array.length; i++) {

		if (array[i].user === nombreAEliminar) {

			posicion = i;

			array.splice(posicion);
			document.getElementById("muestraAqui").innerHTML = ("")
			break;
		}
	}

}




