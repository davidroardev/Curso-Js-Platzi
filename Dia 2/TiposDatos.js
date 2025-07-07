String = 'Cadena de texto';
Number = 32;
Boolean = true;



//Declaración de variables
//VAR LET CONST
var Num = 15;// Puede ser usada y reasignada en cualquier parte del código
let Num2 = 20;// Puede ser usada y reasignada en el bloque donde fue declarada
const Num3 = 25;//no puede ser reasignada, es una constante

//definir e inicializar variables
let numeroDefinido;//Declaración de variable sin Inicialización
numeroDefinido = 10;//Inicialización de variable

numeroDefinido = 23;//Reasignación de variable

//const numeroConstante;
//numeroConstante = 10; // Esto causará un error porque no se puede reasignar una constante

//creacion de multiples variables
let num1 = 10, num2 = 20, num3 = 30;

//undefined null y nan

let numeroUndefined; // Variable declarada pero no inicializada
let numeroNull = null; // Variable inicializada con valor nulo
let numeroNaN = String * Num2; // Variable inicializada con Not a Number
console.log(numeroNaN); // Imprime: undefined