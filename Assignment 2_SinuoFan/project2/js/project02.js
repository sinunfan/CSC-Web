/* add code here  */
window.addEventListener("load", function(){     
	var cssSelector = "input[type=text],input[type=password]"; 
    var fields = document.querySelectorAll(cssSelector); 
 
    for (i=0; i<fields.length; i++) {         
    	fields[i].addEventListener("focus", setBackground); 
        fields[i].addEventListener("blur", setBackground);     
    } 
    setSubmit();
})
function setBackground(e) {     
	if (e.type == "focus") { 
        e.target.style.backgroundColor = "#FFE393"; 
        e.target.style.borderColor = "white";    
    } 
    else if (e.type == "blur") {         
    	e.target.style.backgroundColor = "white"; 
    	e.target.style.borderColor = "white";    
    } 
}

console.log(document);

function setSubmit(){
	document.querySelector("#mainForm").addEventListener("submit", function(e) {

		var a = emptyset("title");
		var b = emptyset("description");
		var c = emptyset("year");

		if(!(a && b && c)){
			e.preventDefault();
		}
	});
};

function isEmpty(elem){
	if(elem.value==''){
		return true;
	}
	else{
		return false;
	}
}

function changeColor(status, elem){
	if(status)
	{
		// Remove 'error' class
		elem.classList.value = "hilightable";
	}
	else
	{
		// Append/Add 'error' class
		elem.classList.value = "error";
	}
}

function emptyset(x){
	var elem = document.getElementById(x);
	if(isEmpty(elem)){
			changeColor(false, elem);
			return false;
		}
		else{
			changeColor(true, elem);
			return true;
		}
}
