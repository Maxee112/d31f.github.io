window.onload = function()
{
	window.onmousemove = function(ev)
	{
		var x = -ev.clientX/8;
		var y = -ev.clientY/8;
		document.body.style.backgroundPosition = x + "px " + y + "px"; 
	};
}