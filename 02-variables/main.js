'use strict' //MODO ESTRICTO//

/* VARIABLES
es un contenedor de informacion, de cualquier tipo de dato
*/

var pais = "Argentina";
var continente = "America";
var antiguedad = "1810";

console.log(pais, continente, antiguedad);

// LET y VAR //
//PRUEBA CON VAR//

var numero = 40;
console.log(numero); //valor 40//

if(true){
    var numero = 50;
    console.log(numero); //valor 50//
};

console.log(numero); //valor 50//

if(numero=50){
    let numero = 30;
    console.log(numero); //valor 30//
}
console.log(numero); // valor 50//
/*
TIPOS DE VARIABLES


--VAR--

SII se define una variable con "var" entonces esta podra tomar distintos valores en nuestro programa
independientemente del valor que se le haya asignado inicialmente 

--LET--

SII se define una variable con "let" esta solo podra tomar el valor que fue asigando inicialmente
, si quisieramos re-declararle un valor no podriamos ya que el programa nos diria que el valor de 
la variable ya fue declarado. "...has already been declared..." si podriamos modificarlas dentro de su ambito
ES muy utilizada dentro de bucles, para reasignar un valor a una variable definida anteriormente, pero 
que este valor solo pertenezca a su ambito

ACLARACION----> si una variable la definimos con "var", podemos cambiarle el valor y asignarle uno fijo con "let"
En cambio si usaramos la reciproca, esta no se cumpliria.


--CONST--

Es un tipo de variable con la cualidad de que su valor nunca puede cambiar


*/


//CONST//

var web = "www.ndalfonsin.com"
const ip = "192.88.0.12"

//Si quisieramos reasignarle el valor a ip, no podriamos tal que esta es una constante//

