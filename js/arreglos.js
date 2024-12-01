/*
Es una coleccion de elementos del mismo tipo ó
de diferente tipo
Para manipular la colección se hace mediante un solo
nombre de variable y un indice (posicion)*/
//Declaracion de un arreglo
let arreglo=[]; //arreglo vacio
let numeros=[7,40,20,-10,40,3,2];
let datos=new Array(5);
//Imprimir el arreglo 
console.log(arreglo);
console.log(numeros);
console.log(datos);
//Agregar datos
arreglo[0]=100;
arreglo[1]=20;
arreglo[2]=40;
console.log(arreglo);
//función para generar números aleatorios
let generar = (tam) =>{
    let aux=[];
    let i=0;
    while(i<tam){
        aux[i++]=Math.random()*99+1;
    }
    return aux;
} 
//llamada del arreglo
arreglo=generar(10);
console.log(arreglo);
console.log('Numero Mayor:${mayor(arreglo)}');
console.log('Suma de Elementos:${suma(arreglo)}');
console.log(sumarPorImpar(arreglo));
let mayor=(arreglo)=>{
    let mayor=arreglo[0];//asunmir que es el mayor
    let i=0;
    while(i<arreglo.length){
        if(arreglo[i]>mayor){
            mayor=arreglo[i];
        }
        i++;
    }
    return mayor;
}
let suma=(arreglo)=>{
    let suma=0;
    let i=0;
    while (i<arreglo.length){
        suma+=arreglo[i++];
    }
    return suma;
}
let sumarPorImpar=(arreglo)=>{
    let spar=0, simpar=0;
    let i=0;
    while (i<arreglo.length) {
        if (arreglo[i]%2==0) {
            spar+=arreglo[i];
        }else{
            simpar+=arreglo[i];
        }
        i++;
    }
    return 'suma Par=${spar}\nSuma Impar=${simpar}';
}
//en el js obtener la referencia del "id"
let table = document.querySelector("#Tabla");
let raiz=(numero)=>{
    return Math.sqrt(numero);
}
let TablaNumeros=(arreglo)=>{
    let table="<table class='table table-bordered'>";
    tabla+="<thead><tr><th>Numeros</th></tr></thead>";
    tabla+="<thbody>";
    for (let elemento of arreglo) {
        tabla+='<tr>';
        tabla+='<td>${elemento}</td><td>${raiz(elemento)}</td>';
        tabla+='</tr>';           
    }
    tabla+="</tbody>";
    tabla+"</table>";
    return tabla;
}
tabla.innerHTML=TablaNumeros(arreglo);
let binario=(numero)=>{
    let bin="";
    let digito=0;
    while (numero>0) {
        digito=numero%2;
        numero=Math.trunc(numero/2);
        bin=digito+bin;
    }
    return bin;
}
let octal=(numero)=>{
    let oct="";
    let digito=0;
    while (numero>0) {
        digito=numero%8;
        numero=Math.trunc(numero/8);
        oct=digito+oct;
    }
    return oct;
}