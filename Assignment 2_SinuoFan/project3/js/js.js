$(document).ready(function(){
	var a = function(e) {
			var orignal_src = e.target.src;
			var orignal_alt = e.target.alt;
			var orignal_title = e.target.title;
			console.log(orignal_src);
			console.log(orignal_alt);
			var new_src = orignal_src.replace("small", "medium");
			console.log(new_src);
			$("#imgManipulated img:first-child").attr("src", new_src);
			$("#imgManipulated figcaption:last-child")[0].children[0].innerHTML = orignal_alt + "<br>" + orignal_title;
		};
	var list = $("#thumbBox")[0].children;
	list[0].onclick = a;
	list[1].onclick = a;
	list[2].onclick = a;
	list[3].onclick = a;
	list[4].onclick = a;

	var b = function() {
		var image_object = $("#imgManipulated img:first-child")[0];
		var css_object = image_object.style;
		var list = $("#sliderBox")[0].children[0];
		var new_filter =
			"opacity(" + list[0].value + "%) " +
			"saturate(" + list[1].value + ") " +
			"brightness(" + list[2].value + "%) " +
			"hue-rotate(" + list[3].value + "deg) " +
			"grayscale(" + list[4].value + "%) " +
			"blur(" + list[5].value + "px)"
			""
		;
		css_object.filter = new_filter;
	};
	var list = $("#sliderBox")[0].children[0];
	list[0].onmousemove = b;
	list[0].onchange = b;
	list[1].onmousemove = b;
	list[1].onchange = b;
	list[2].onmousemove = b;
	list[2].onchange = b;
	list[3].onmousemove = b;
	list[3].onchange = b;
	list[4].onmousemove = b;
	list[4].onchange = b;
	list[5].onmousemove = b;
	list[5].onchange = b;

	var c = function(e) {
		var list = $("#sliderBox")[0].children[0];
		list[0].value = 100;
		list[1].value = 1;
		list[2].value = 100;
		list[3].value = 0;
		list[4].value = 0;
		list[5].value = 0;
		e.preventDefault();
	};
	var list = $("#sliderBox")[0].children[0];
	list[6].onclick = c;
});
console.log("#document");