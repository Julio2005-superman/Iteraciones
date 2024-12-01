/*Una funcion es un fragmento de código
  independiente del programa principal
Requisitos
    -Declarar la funcón
    -Llamado de la función
*Tipos de de funciones 
    -Función que no recibe parametro(s) y no 
    regresa valor
    -Función que recibe parametro(s) y no
    regresa valor
    -Función que no recibe parametro(s) y  
    regresa un valor
    -Función que recibe parametro(s) y 
    si regresa un valor
*/
//4 formas de implementar una función(método)
//función por nombre
function sumar(numero1,numero2){
    let resultado=numero1+numero2;
    return resultado;
}
let valor=sumar(7,8);
console.log('valor=${valor}');
console.log('resultado${sumar(50.5,60.5)}');
//funcion por referencia
let raiz=function raizCuadrada(numero){
    return Math.sqrt(numero);
}
//llamada de la función
console.log('Raiz Cuadrada=${raiz(25.0)}');
//función Anonima
let potencia=function(numero,exponente){
    return Math.pow(numero,exponente);
}
console.log('Potencia=${(2,8)}');
//funcion tipo flecha
let invertir = (nombre) =>{
    let inv="";
    let car='\0';
}
let invertir = (nombre) =>{
    let inv="";
    let car="\0";
    int index=nombre.length-1;
    while(index>=0){
        car=nombre.charAt(index);
        inv=inv+car;
        index--;
    }
    return inv;
}
console.log('Invertir:${invertir('Valery Nicol')}');