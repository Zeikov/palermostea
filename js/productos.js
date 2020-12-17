/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



function getType() {
  var x = document.getElementById("cosa").value;
  var items;
  if (x === "verde") {
    items = ["-", "Chai Verde", "Gun Powder Menta", "Choco Vainilla", "Jasmine Mint", "Té verde de Indonesia"];
  } if(x=== "blanco")  {
    items = ["-","Apple Chai","Vainilla-Jazmín","Pai Mu Tan"]
  }
	if(x=== "negro")  {
    items = ["-", "English Breakfast tea","Earl Grey con Bergamota","Earl Grey Creme","Té negro con chispas de chocolate","Malasa chai"]
  }
	if(x=== "tisana")  {
    items = ["-","Frutos Rojos Silvestres","Kane-wa","Granada-jenjibre","Mandarina-Jengibre","Flores de campo","Manzana-vainilla"]
  }
  var str = ""
	var stv = ""
  for (var item of items) {
		stv += "value" + item 

		str += "<option>" + item + "</option>"

  }
  document.getElementById("opi").innerHTML = str;
}

//Funcion para ocultar el contenido de los té
function ocultarv() {
    var v = document.getElementById("verde");

		if (v.style.display === "none") {
        v.style.display = "block";
    } else {
        v.style.display = "none";
    }
}
function ocultarb() {
		var b = document.getElementById("blanco");

		if (b.style.display === "none") {
        b.style.display = "block";
    } else {
        b.style.display = "none";
    }
}
function ocultarn() {
		var b = document.getElementById("negro");

		if (b.style.display === "none") {
        b.style.display = "block";
    } else {
        b.style.display = "none";
    }
}
function ocultarp() {
		var b = document.getElementById("pu");

		if (b.style.display === "none") {
        b.style.display = "block";
    } else {
        b.style.display = "none";
    }
}
function ocultarr() {
		var b = document.getElementById("rooibos");

		if (b.style.display === "none") {
        b.style.display = "block";
    } else {
        b.style.display = "none";
    }
}
function ocultart() {
		var b = document.getElementById("tisana");

		if (b.style.display === "none") {
        b.style.display = "block";
    } else {
        b.style.display = "none";
    }
}
function ocultarh() {
		var b = document.getElementById("honey");

		if (b.style.display === "none") {
        b.style.display = "block";
    } else {
        b.style.display = "none";
    }
}
function ocultaro() {
		var b = document.getElementById("oolong");

		if (b.style.display === "none") {
        b.style.display = "block";
    } else {
        b.style.display = "none";
    }
}
