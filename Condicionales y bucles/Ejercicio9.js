//Se trata de crear una aplicación que calcule la suma de todos los números enteros positivos entre 0 y el número tecleado por el usuario. El resultado será de la fomra "Los números enteros de 0 a n  suman suma".
let num = parseInt(prompt("Introduce un número para el programa: "));
let suma=0;

for(let i=0; i<=num; i++){
    suma+=i;
}
alert("El resultado de la suma es: "+suma)