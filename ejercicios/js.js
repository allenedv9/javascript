function f1(){
    alert("Hola Mundo");
}

function f2(){
    var num = document.getElementById('ejer2').value;
   
    if(num == ""){
        alert("Debe introducir un número");
    }else{

        if(num % 2 == 0){
            alert("El número "+ num + " ES divisible entre 2");
        }else{
            alert("El número " + num + " NO ES divisible entre 2");
        }
    }
}

function f3(){

    var area = document.getElementById('ejer3');
             
    for ( var x = 0; x < 100; x++){
      if(x%2 != 0){
        area.value += x + " , ";
      }
      
    }
}

function f4() {
    
    var alumnos = ['Sánchez', 'Sánchez', 'López', 'Cuesta', 'Álvarez', 'Zambrano', 'Sevilla', 'Álvarez', 'Cuesta',                       'Álvarez', 'Sevilla', 'López', 'Jiménez'];

   var alum = alumnos;

    
   document.getElementById('a').innerHTML = alumnos;

    // for (var x = 0; x < alumnos.length; x++) {
        
        
    // }
}

function f5() {
    
    var numeros = [4,0,3,4,7,3,5,8,1,8,8,0,2,3,1,2,5,7,3,2,5,1];
    var numBus = [5,6,8,13];
    
    for (let x = 0; x < numBus.length; x++) {
       var conf = numeros.includes(numBus[x]);
       if(conf == true){
           var pos = numeros.indexOf(numBus[x]);
            document.getElementById('b').innerHTML += "La posición de: " + numBus[x] + " es: " + pos + "<br>"; 
       }else{
           alert("el numero " + numBus[x]+ "no se encuentra");
       }

        
    }
   
}

function f6(){

    var numeros = [4,0,3,4,7,3,5,8,1,8,8,0,2,3,1,2,5,7,3,2,5,1];
    var par = [];
    var impar = [];

    for (let x = 0; x < numeros.length; x++) {
       if(numeros[x]%2 == 0){
            par.push(numeros[x]);
       }else{
           impar.push(numeros[x]);
       }
        
    }
    par.sort();
    impar.sort();

    document.getElementById('c').innerHTML = impar+","+par;
}

function f7(){

    var dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

    for (let x = 0; x < dias.length; x++) {
       dias[x] =  dias[x].charAt(0).toLowerCase() + dias[x].slice(1);
        
    }
    document.getElementById('d').innerHTML = dias;
}


function f8(){
    var numeros = [43,0,34,4,743,-45,3,5,8,13,8,344,0,23,3,1233,2,5,734,3,2234,5,1];

    document.getElementById('f').innerHTML = "Array original: " + numeros;
      for(var m = 0; m < numeros.length; m++){
        for(var y = 0; y < (numeros.length+m); y++){
            if(numeros[y] > numeros[y-1]){
                z = numeros[y-1];
                numeros[y-1] = numeros[y];
                numeros[y] = z;
            }
        }
    }
     document.getElementById('e').innerHTML = "<b>Array ordenado: </b>" +
     numeros;
 }
    
  function f9() {
      
    var numeros=[43,0,34,4,743,-45,3,5,8,13,8,344,0,23,3,1233,2,5,734,3,2234,5,1];
    var ordenado = [];

    for (let x = 0; x < numeros.length; x++) {
      
        var max = Math.max(...numeros);
        ordenado.push(max);
        d = numeros.indexOf(max);
        numeros.splice(d,1);
        x--;
       
    }

    document.getElementById('g').innerHTML = ordenado;

  } 

  /*************************************************************************
                        OBJETOS
  *************************************************************************/

//  var persona = new Persona();

 
    class Persona{
        constructor(){

            this.nombre = "Allende";
            this.apellido = "Edv";
            this.dni = "789654123c";
            this.direccion = "springfield";
            this.telefono = "789654123";
        }



    verNombre(){
        alert (this.nombre);
   
    }
    verApe (){
        alert (this.apellido);
        
    }
    verDni (){
       alert (this.dni);
       
   }
   verDire (){
       alert (this.direccion);
       
   }
}

function ejer10(){
    var persona = new Persona();

    persona.verNombre();
    persona.verApe();
    persona.verDni();
    persona.verDire();
}
/*
function verNombre(){
     alert (persona.nombre);

 }
function verApe(){
     alert (persona.apellido);
     
 }
function verDni(){
    alert (persona.dni);
    
}
function verDire(){
    alert (persona.direccion);
    
}*/

/*******************************************************************************/

/*Ejercicio 11*/


class Curso{
    
    constructor(){

        this.nombre = "WEB";
        this.cod = "939";
        this.num = "17";
        this.tutor = "Marcius";
        this.anio = "2018-2019";
        
    }
    
    verCod(){
        alert (this.cod);
        
    }
    verNum(){
        alert (this.num);
        
    }
    verAnio (){
        alert (this.anio);
        
    }
    
}
function ejer11(){

    var curso = new Curso();
    curso.verCod();
    curso.verAnio();
    curso.verNum();
}

/*******************************************************************************/

/*Ejercicio 13*/

function f13(){
var objeto = {
  "asig1":"Java",
  "asig2":"Entornos",
  "asig3":"Sistemas"
};
      for ( var key in objeto) {
          document.getElementById("q").innerHTML += key + " -> " + objeto[key] + "<br>";
      }


}

/*Ejercicio 14*/
function Alumnos(nombre,apellido,dni,curso){
    this.nombre=nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.curso = curso;
    this.mostrarNombre = function(){
        alert(this.nombre);
    }
}
function f14(){
    
    var elAlumno = new Alumnos("Allen","edv","44542584b","daw2");
    // alert("El alumno: " + elAlumno.nombre + " " + elAlumno.apellido + " realiza el curso: " + elAlumno.curso);
    elAlumno.mostrarNombre();
    elAlumno.verDni=function(){
        alert(this.dni);
    }
    elAlumno.verDni();

}


/*class Alumno{
    constructor(nombre, apellido, dni, curso){

        this.nombre=nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.curso = curso;
    }
    get_nombre(){
        return this.nombre; 
    }
    get_apellido(){
        return this.apellido;
    }
    get_dni(){
        return this.dni;
    }
}
//function f14(){
    var alum = new Alumno("Allen","edv","1452","web");
    document.getElementById('w').innerHTML += alum.get_nombre();
    document.getElementById('w').innerHTML += alum.get_apellido();
    document.getElementById('w').innerHTML += alum.get_dni();
//}*/
/*Ejercicio 15*/ 
function f15(){
    try{
        var num = 1000;
        var den = 0;

        if(denominador == 0){
            throw "ErrorAlDivirXCero";
        }

        document.write(num / den + "<br/>");
    }

    catch(err){
        document.write(err + " (numerador: " + num + " denominador: " + den + ")<br/>");
    }

    try{
        radicando = -2;    

        if(radicando < 0){
            throw "ErrorRaizNegativa";
        }

        document.write(Math.sqrt(radicando));
    }

    catch(err){
        document.write(err + " (radicando: " + radicando + ")<br/>");
    }
}