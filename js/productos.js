/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var opt_1 = new Array("-", "Chai Verde", "Gun Powder Menta", "Choco Vainilla", "Jasmine Mint", "Té verde de Indonesia");
			var opt_2 = new Array("-","Apple Chai","Vainilla-Jazmín","Pai Mu Tan");
			var opt_3 = new Array("-", "English Breakfast tea","Earl Grey con Bergamota","Earl Grey Creme","Té negro con chispas de chocolate","Malasa chai");
            var opt_4 = new Array("-","Frutos Rojos Silvestres","Kane-wa","Granada-jenjibre","Mandarina-Jengibre","Flores de campo","Manzana-vainilla");


            // 2) crear una funcion que permita ejecutar el cambio dinamico

			function cambia() {
				var cosa;
				//Se toma el vamor de la "cosa seleccionada"
				cosa = document.getElementById('cosa').value;

				//se chequea si la "cosa" esta definida
				if (cosa != 0) {
					//selecionamos las cosas Correctas
					mis_opts = eval("opt_" + cosa);
					document.getElementById("opi").innerHTML = mis_opts[i];
					//se calcula el numero de cosas
					num_opts = mis_opts.length;
					//marco el numero de opt en el select
					cosa.setAttribute("option", "mis_opts")
					//para cada opt del array, la pongo en el select
					for (i = 0; i < num_opts; i++) {
						document.opt.options[i].value = mis_opts[i];
						document.opt.options[i].text = mis_opts[i];
					}
				} else {
					//si no habia ninguna opt seleccionada, elimino las cosas del select
					document.length = 1;
					//ponemos un guion en la unica opt que he dejado
					document.opt.options[0].value = "-";
					document.opt.options[0].text = "-";
				}
				//hacer un reset de las opts
				document.opt.options[0].selected = true;

			}
			const selectElement = document.querySelector('.nieve');

selectElement.addEventListener('change', (event) => {
    const resultado = document.querySelector('.resultado');
    resultado.textContent = `Te gusta el sabor ${event.target.value}`;
});
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
