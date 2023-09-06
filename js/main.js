import { saludar } from "./funciones.js";

// capturar un nodo del documento HTML
let caja = document.getElementById("caja");
console.log(caja);

let boxes = document.getElementsByClassName("box");
console.log(boxes);
// obtener el dato e imprimirlo por consola directamente
// console.log(document.getElementsByClassName("box"));

//  Iterandi un HTMLCollector
for (let index = 0; index < boxes.length; index++) {
  const element = boxes[index];
  console.log(element);
}

let titulos = document.getElementsByTagName("h1");
console.log(titulos);

// Otras formas de obtener nodos del DOM
// seleccionar un solo elemento
// a traves de tag (etiqueta)
let div1 = document.querySelector("div");
console.log(div1);
// para clases
div1 = document.querySelector(".caja3");
console.log(div1);
// para identificadores
div1 = document.querySelector("#caja");
console.log(div1);

// obtener multiples elementos
const div2 = document.querySelectorAll(".box");
console.log(div2);

// incorporar datos a los nodos
// cambiando el HTML
div1.innerHTML = "<p>La gran caja</p>";
// cambiando solo texto
titulos[0].innerText = "<p>El gran titulo</p>";

// EVENTOS
caja.addEventListener('click', saludar);



