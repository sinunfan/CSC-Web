/* add in your functions here */
function outputCountryBox(name,continent,cities,photos) {
	document.write("<div class=item>");
	document.write("<h2>" + name + "</h2>");
	document.write("<p>" + continent + "</p>");
	document.write("<div class=inner-box>");
	document.write("<h3>Cities</h3>");

	outputCities();
	document.write("</div>")
	document.write("<div class = inner-box>");
	document.write("<h3>Popular Photos</h3>");

	outputPhotos();
	document.write("</div>")
	document.write("<button>Visit</button>");
	document.write("</div>");

	function outputCities(){
	document.write("<ul>");
	for(var i = 0; i < cities.length; i++){
		document.write("<li>"+ cities[i] + "</li>");	
	}
	document.write("</ul>");
	}

	function outputPhotos(){
		for(var i = 0; i < photos.length; i++){
			document.write("<img src= "+ photos[i] + " class= photos>");
		}
	}
}


