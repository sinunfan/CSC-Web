/* add code below this */
var stringOne = new String("Test");
var stringTwo = "Test";
var stringThree = "Test";
var stringFour = new String("Test");
document.write("<br>typeof srtingOne=" + typeof stringOne);
document.write("<br>typeof stringThree=" + typeof stringThree);
document.write(stringOne);
if (stringOne == stringTwo)
	document.write("<br>srtingOne has equal value to stringTwo");
if (stringOne == stringFour)
	document.write("<br>stringOne has equal value to stringFour");
if (stringOne === stringTwo)
	document.write("<br>stringOne has equal value and equal type to stringTwo");
if (stringTwo === stringThree)
	document.write("<br>stringTwo has equal value and equal type to stringThree"); 
if (stringTwo === stringFour)
	document.write("<br>stringTwo has equal value and equal type to stringFour");

var dataOne = new Date();
document.write("<p>" + dataOne + "<p>");
document.write(Math.PI + "<br/>");
document.write(Math.sqrt(4) + "<br/>");
document.write(Math.random() + "<br/>");
