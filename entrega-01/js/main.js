const lista = [];

lista[0] = 1;
lista[1] = 2;
lista[2] = 3;

console.log(lista);

const lista2 = new Array();

lista2[0] = "Soy el primer elemento del Array";
lista2[1] = "Soy el segundo elemento del Array";
lista2[2] = "Soy el tercer elemento del Array";

console.log(lista2);

const listaGeneral = [lista, lista2];
console.log(listaGeneral);

const movil = {
	nombre: "Motorola",
	modelo: "Moto Play 6 ",
	altura: 12,
	anchura: 6,
	tarteta: {
		memoria: 36,
		ram: 2,
	},
};

console.log(movil.tarteta);

movil.año = 2016;
console.log(movil);

// FECHAS

const fechaActual = new Date()

console.log(fechaActual);

const fechaValores = new Date(2002, 0, 5)
console.log(fechaValores);

// DIA

const dia = fechaActual.getDate() ;
const mes = fechaActual.getMonth() + 1;
const year = fechaActual.getFullYear();

console.log(`Dia: ${dia} / Mes: ${mes} / Año: ${year}`);