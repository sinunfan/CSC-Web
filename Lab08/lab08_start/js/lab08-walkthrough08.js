// define functions in this file
var boxClass = 'movingDiv';
var box;
function outputBox(num) {
	box = "<div class='" + boxClass + "' id='div1 " + num + "'>";
	box += "This is div " + num;
	box += "</div>";
	return box;
	//document.write("<dv class='movingDiv' id='div1'>");
	//document.write("This is div 1");
	//document.write("</div>");
}
