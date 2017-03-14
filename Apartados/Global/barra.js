$(document).ready(init);
function init()
{
	solucionBug1();
	noMovil();
	randomHobbie();
	centrarBarra();
	bordeFinal();
}
window.onmousemove = function(ev)
	{
		var x = -ev.clientX/8;
		var y = -ev.clientY/8;
		document.body.style.backgroundPosition = x + "px " + y + "px"; 
	};
function solucionBug1()
{
	$(".sublista").mouseover(
		function()
		{
			setTimeout(function()
				{
					$(".transition_left").css("margin-left", "0px");
				}, 1000);
		});
}
function noMovil()
{
	i = 0;
	window.addEventListener("resize", function()
		{
			var x;
			x = window.innerWidth;
			while(i < 1)
			{
				if(x < 720)
				{
					alert("Esta página no es compatible con dispositivos con una anchura de pantalla menor a 720 píxeles.")
				}
				i++;
			}
		});
}
function randomHobbie()
{
	$(".random").click(
		function()
		{
			var r, noticia, entrevista, opinion, vineta;
			r = Math.round(Math.random()*3);
			noticia = "../noticia/index.html";
			entrevista = "../entrevista/index.html";
			opinion = "../opinion/index.html";
			vineta = "../vineta/index.html";
			if(r == 0)
			{
				$(".random").attr("href", noticia);				
			}
			else if(r == 1)
			{
				$(".random").attr("href", entrevista);				
			}
			else if(r == 2)
			{
				$(".random").attr("href", opinion);								
			}
			else if(r == 3)
			{
				$(".random").attr("href", vineta);
			}
		});
}
function centrarBarra()
{
	var anchuratxt = $(".nav_enlace").css("width");
	var anchura = parseInt(anchuratxt.substring(0, 3));
	var paddingtxt = $(".nav_enlace").css("padding");
	var padding = parseInt(paddingtxt.substring(0, 2));
	var nli = $(".nav_el").length;
	$("#nav_barra").css("width", anchura * nli + ((padding * 2) * nli) + "px");
}
function bordeFinal()
{
	var borde = document.getElementById("borde");
	borde.onmouseover = function()
	{
		$("#borde").css("border-radius", "0px");
	}
	borde.onmouseout = function()
	{
		$("#borde").css("border-bottom-right-radius", "10px");
	}
}