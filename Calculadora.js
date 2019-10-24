'use strict'

/*
CALCULADORA
-----------------

-pida dos numeros por pantalla
-si metemos uno mal que nos lo vuelva a pedir
-en el cuerpo de la pagina,muestro el resultado de 
sumar,restar,multiplicar,dividir esas dos cifras
*/

var numero1= parseInt(prompt("introduce el primer numero:",1));
var numero2= parseInt(prompt("introduce el segundo numero:",1));

// dentro del el while pones una condicion ,si en caso de no cumplirla ,volvera a pedir los valores 

while(numero1<0 || numero2<0 || isNaN(numero1)|| isNaN(numero2)){
    numero1= parseInt(prompt("introduce el primer numero:",1));
    numero2= parseInt(prompt("introduce el segundo numero:",1));
}


//aca  hacemos las operaciones
document.write("<h1>Tabla de Multiplicar</h1>")
var resultado= "la suma es:"+(numero1+numero2)+"<br>"+
                "la resta es:"+(numero1-numero2)+"<br>"+
                "la multiplicacion es:"+(numero1+numero2)+"<br>"+
                "la divicion es:"+(numero1/numero2)+"<br>";
                
// lo mostramos al resultado en la pagina

document.write(resultado);