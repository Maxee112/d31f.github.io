window.onload = function()
{
	var a, monday, tuesday, wednesday, thursday, friday, saturday, sunday, a1, a2, a3, a4, a5, a6, a7, a8, izquierda, derecha, contador, fecha, dia;
	a = ["FyQ", "Teatro", "Matemáticas", "E.F", "Informática", "Inglés", "Sociales", "Tutoría", "Valenciano", "Castellano", "Biología", "Ética"];
	monday = ["Lunes", a[0], a[1], a[2], a[3], a[4], a[5], null];
	tuesday = ["Martes", a[2], a[1], a[6], a[4], a[7], a[8], a[5]];
	wednesday = ["Miércoles", a[8], a[0], a[10], a[6], a[3], a[9], null];
	thursday = ["Jueves", a[0], a[5], a[4], a[2], a[10], a[8], a[9]];
	friday = ["Viernes", a[10], a[2], a[1], a[9], a[11], a[6], null];
	saturday = ["Sábado", "Nada", "Nada", "Nada", "Nada", "Nada", "Nada"];
	sunday = ["Domingo", "Nada", "Nada", "Nada", "Nada", "Nada", "Nada" ];
	a1 = document.getElementById("dia");
	a2 = document.getElementById("primera");
	a3 = document.getElementById("segunda");
	a4 = document.getElementById("tercera");
	a5 = document.getElementById("cuarta");
	a6 = document.getElementById("quinta");
	a7 = document.getElementById("sexta");
	a8 = document.getElementById("septima");
	izquierda = 37;
	derecha = 39;
	contador = 0;
	fecha = new Date();
	dia = fecha.getDay();
	function d1()
	{
		var i = 0;
		a1.innerHTML = monday[i];
		i++;
		a2.innerHTML = monday[i];
		i++;
		a3.innerHTML = monday[i];
		i++;
		a4.innerHTML = monday[i];
		i++;
		a5.innerHTML = monday[i];
		i++;
		a6.innerHTML = monday[i];
		i++;
		a7.innerHTML = monday[i];
		i++;
		a8.innerHTML = monday[i];
	}
	function d2()
	{
		var i = 0;
		a1.innerHTML = tuesday[i];
		i++;
		a2.innerHTML = tuesday[i];
		i++;
		a3.innerHTML = tuesday[i];
		i++;
		a4.innerHTML = tuesday[i];
		i++;
		a5.innerHTML = tuesday[i];
		i++;
		a6.innerHTML = tuesday[i];
		i++;
		a7.innerHTML = tuesday[i];
		i++;
		a8.innerHTML = tuesday[i];
	}
	function d3()
	{
		var i = 0;
		a1.innerHTML = wednesday[i];
		i++;
		a2.innerHTML = wednesday[i];
		i++;
		a3.innerHTML = wednesday[i];
		i++;
		a4.innerHTML = wednesday[i];
		i++;
		a5.innerHTML = wednesday[i];
		i++;
		a6.innerHTML = wednesday[i];
		i++;
		a7.innerHTML = wednesday[i];
		i++;
		a8.innerHTML = wednesday[i];
	}
	function d4()
	{
		var i = 0;
		a1.innerHTML = thursday[i];
		i++;
		a2.innerHTML = thursday[i];
		i++;
		a3.innerHTML = thursday[i];
		i++;
		a4.innerHTML = thursday[i];
		i++;
		a5.innerHTML = thursday[i];
		i++;
		a6.innerHTML = thursday[i];
		i++;
		a7.innerHTML = thursday[i];
		i++;
		a8.innerHTML = thursday[i];
	}
	function d5()
	{
		var i = 0;
		a1.innerHTML = friday[i];
		i++;
		a2.innerHTML = friday[i];
		i++;
		a3.innerHTML = friday[i];
		i++;
		a4.innerHTML = friday[i];
		i++;
		a5.innerHTML = friday[i];
		i++;
		a6.innerHTML = friday[i];
		i++;
		a7.innerHTML = friday[i];
		i++;
		a8.innerHTML = friday[i];
	}
	function d6()
	{
		var i = 0;
		a1.innerHTML = saturday[i];
		i++;
		a2.innerHTML = saturday[i];
		i++;
		a3.innerHTML = saturday[i];
		i++;
		a4.innerHTML = saturday[i];
		i++;
		a5.innerHTML = saturday[i];
		i++;
		a6.innerHTML = saturday[i];
		i++;
		a7.innerHTML = saturday[i];
		i++;
		a8.innerHTML = saturday[i];
	}
	function d7()
	{
		var i = 0;
		a1.innerHTML = sunday[i];
		i++;
		a2.innerHTML = sunday[i];
		i++;
		a3.innerHTML = sunday[i];
		i++;
		a4.innerHTML = sunday[i];
		i++;
		a5.innerHTML = sunday[i];
		i++;
		a6.innerHTML = sunday[i];
		i++;
		a7.innerHTML = sunday[i];
		i++;
		a8.innerHTML = sunday[i];
	}
	function opacidad()
	{
		$("#tabla").animate({
			opacity : 0
		}, 0);
		$("#tabla").animate({
			opacity : 1
		}, 500);
	}
	function dias()
	{
		if(contador == 0)
		{
			d1();
		}
		else if(contador == 1)
		{
			d2();
		}
		else if(contador == 2)
		{
			d3();
		}
		else if(contador == 3)
		{
			d4();
		}
		else if(contador == 4)
		{
			d5();
		}
		else if(contador == 5)
		{
			d6();
		}
		else if(contador == 6)
		{
			d7();
		}
	}
	function columnaExtra()
	{
		if(contador == 1 || contador == 3)
		{
			$("#septima").css("background-color", "orange");
		}
	}
	window.onkeypress = function(e)
	{
		$("td").css("background-color", "orange");
		$("#dia").css("background-color", "#FF8F23");
		$("#septima").css("background-color", "inherit");
		if(e.keyCode == izquierda)
		{
			contador--;
			if(contador < 0)
			{
				contador = 6;
			}
			opacidad();
			columnaExtra();
			dias();
		}
		if(e.keyCode == derecha)
		{
			contador++;
			if(contador > 6)
			{
				contador = 0;
			}
			opacidad();
			columnaExtra();
			dias();
		};
	}
	function hoy()
	{
		$("td").css("background-color", "orange");
		$("#dia").css("background-color", "#FF8F23");
		$("#septima").css("background-color", "inherit");
		if(dia == 0)
		{
			contador = 6;
			columnaExtra();
			dias();
		}
		else if(dia == 1)
		{
			contador = 0;
			columnaExtra();
			dias();			
		}
		else if(dia == 2)
		{
			contador = 1;
			columnaExtra();
			dias();			
		}
		else if(dia == 3)
		{
			contador = 2;
			columnaExtra();
			dias();			
		}
		else if(dia == 4)
		{
			contador = 3;
			columnaExtra();
			dias();			
		}
		else if(dia == 5)
		{
			contador = 4;
			columnaExtra();
			dias();			
		}
		else if(dia == 6)
		{
			contador = 5;
			columnaExtra();
			dias();			
		}	
	}
	hoy();
}