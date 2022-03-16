function openLogin(){
    document.getElementById("win").style.display="";
}
function closeLogin(){
    document.getElementById("win").style.display="none";
}
function scrollWindow1(){
	window.scrollTo(0,350);
}
function scrollWindow2(){
	window.scrollTo(0,1000);
}
function setBackground(e) {     
	if (e.type == "focus") { 
        e.target.style.backgroundColor = "#FFE393";     
    } 
    else if (e.type == "blur") {         
    	e.target.style.backgroundColor = "white";     
    } 
} 
window.addEventListener("load", function(){     
	var cssSelector = "input[type=text],input[type=password]"; 
    var fields = document.querySelectorAll(cssSelector); 
 
    for (i=0; i<fields.length; i++) 
    {         
    	fields[i].addEventListener("focus", setBackground); 
        fields[i].addEventListener("blur", setBackground);     
    } 
});