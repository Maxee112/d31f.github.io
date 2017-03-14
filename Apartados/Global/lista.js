$(document).ready(init);
function init()
{
	degradado();
	function degradado()
	{
		$(".sublista").mouseover(
			function()
			{
				setTimeout(function()
					{
						$(".elegido").css("color", "#ffffff");
					}, 1000);
			});
	}
}