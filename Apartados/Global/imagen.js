$(document).ready(init);
function init()
{
	for(var i=0; i < $(".carpeta_img").length; i++)
	{	
		var nombre_clase = $(".carpeta_img").eq(i).attr("class").split(" ")[1];
		$(".carpeta_img").eq(i).css("background", "url(imgs/" + nombre_clase + ".png");
		$(".carpeta_img").eq(i).css("background-size", "90% 90%");
		$(".carpeta_img").eq(i).css("background-repeat", "no-repeat");
		$(".carpeta_img").eq(i).css("background-position", "center");
	}
}