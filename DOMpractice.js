// var button = document.querySelector("button");

// 	var isPurple = false;
// 	button.addEventListener("click", function() {
// 		if (!isPurple) {
// 			document.querySelector("body").style.background = "purple";
// 		}
// 		else {
// 			document.querySelector("body").style.background = "white";
// 		} 
// 		isPurple = !isPurple;
// 	});


var button = document.querySelector("button");

	var isPurple = false;
	button.addEventListener("click", function() {
		if (!isPurple) {
			document.body.style.background = "purple";
		}
		else {
			document.body.style.background = "white";
		} 
		isPurple = !isPurple;
	});

//Can also make a css class called purple and use documentbo.dy.classList.toggle("purple");