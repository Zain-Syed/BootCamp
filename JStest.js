// //prompt always returns string, use Number() to convert into a number

// var age = Number(prompt("Enter your age: "));

// if (age < 0) {
// 	console.log("You haven't been born yet");
// }

// if (age === 21) {
// 	console.log("Happy 21st Birthday!");
// }
// if (age % 2 == 1) {
// 	console.log("Your age is odd!");
// }

// if (age % Math.sqrt(age) === 0) {
// 	console.log("Perfect Square!");
// }

// var magicNumber = 5;

// var input = Number(prompt("Take a guess: "));

// while (input != magicNumber) {
// 	if (input < magicNumber) {
// 		alert("Too low, guess again!");
// 		input = Number(prompt("Take a guess: "));
// 	}
// 	else if (input > magicNumber)
// 		alert("Too high, guess again!");
// 		input = Number(prompt("Take a guess: "));
// 	}

// var count = -10;
// while (count <= 19){
// 	console.log("counting up from -10 to 19... " + count);
// 	count++;
// }

// var ten = 10;

// while (ten <= 40) {
// 	if (ten % 2 == 0) {
// 		console.log("Displaying even numbers between 10 and 40... " + ten);
// 	}
// 	ten++; 
// }

// var i = 300;

// while (i <= 333) {
// 	if (i % 2 == 1) {
// 		console.log("Odd numbers between 300 and 333 are... " + i);
// 	}
// 	i++;
// }

// var x = 5
// while (x <= 50) {
// 	if (x % 5 == 0 && x % 3 == 0) {
// 		console.log("Numbers divisible by 5 and 3 are... " + x);
// 	}
// 	x++;
// }

// var destination = prompt("Are we there yet?");
// var yes = "yes";
// var yeah = "yeah";
// while (destination !== yes && destination !== yeah) {
// 	destination = prompt("Are we there yet?");
// 	if (destination === yes || destination === yeah) {
// 		alert("Yay, we finally made it!");
// 	}
// }

// var destination = prompt("Are we there yet?");
// var yes = "yes";
// var yeah = "yeah";
// while (destination.indexOf(yes) === -1 && destination.indexOf(yeah) === -1) {
// 	destination = prompt("Are we there yet?");
// 	if (destination.indexOf(yes) !== -1 || destination.indexOf(yeah) !== -1) {
// 		alert("Yay, we finally made it!");
// 	}
// }

// var answer = prompt("are we there yet?");

// while (answer.indexOf("yes") === -1 && destination.indexOf("yeah") === -1) {
// 	var answer = prompt("are we there yet?");
// }

// alert("We Made It!");


// for (var i = 0; i <= 16; i+=8) {
// 	console.log(i);
// }


// for (var i = -10; i <= 19; i++) {
// 	console.log("These are the numbers between -10 and 19: " + i);
// }

// for (var i = 10; i <=40; i++) {
// 	if (i % 2 == 0) {
// 		console.log("Even numbers between 10 and 40 are: " + i);
// 	}
// }

// for (var i = 300; i <= 333; i++) {
// 	if (i % 2 == 1) {
// 		console.log("Odd numbers between 300 and 333 are: " + i); 
// 	}
// }

// for (var i = 5; i <= 50; i++) {
// 	if (i % 5 == 0 && i % 3 == 0) {
// 		console.log("These numbers divide 5 and 3 " + i);
// 	}
// }

// function isEven(num) {
// 	if (num % 2 == 0) {
// 		return true;
// 	}
// 	else {
// 		return false;
// 	}	
// }

// isEven(4);
// isEven(21);
// isEven(68);
// isEven(333);

// function factorial(num) {
// 	if(num == 0) {
// 		return 1;
// 	}
// 	return num*factorial(num-1);
// }

// factorial(5);
// factorial(2);
// factorial(10);

// function kebabToSnake(words) {
// 	if (words.indexOf("-") === -1) {
// 		return 0;
// 	}
// 	var newString = words.replace(/-/g, "_");

// }

// -----TO DO LIST -----

// var todos = ["Buy New Turtle"];

// var input = prompt("What would you like to do?");

// while (input !== "quit") {
// 	if (input === "list") {
// 		console.log("******");
// 		todos.forEach(function(todos, i){
// 			console.log(i + ": " + todos);
// 		});
// 		console.log("******");
// 	}
// 	else if (input === "new") {
// 		var newTodo = prompt("Enter new todo");
// 		todos.push(newTodo);
// 		console.log("Added " + newTodo + " to your ToDo list");
// 	}
// 	else if (input === "delete") {
// 		var index = prompt("Enter index of todo to delete");
// 		//use splice to remove the todo, second parameter is number of items to delete after index
// 		todos.splice(index, 1);
// 		console.log("Deleted " + todos[index] + " from your todo list");
// 	}
// 	input = prompt("What would you like to do?");
// }
// console.log("OK, you quit the app");


// ----------------------TO DO LIST WITH FUNCTIONS-----------------------

// var todos = ["Buy New Turtle"];

// var input = prompt("What would you like to do?");

// while (input !== "quit") {
// 	if (input === "list" || input === "List") {
// 		toDo();
// 	}
// 	else if (input === "new" || input === "New") {
// 		addToDo();	
// 	}
// 	else if (input === "delete" || "Delete") {
// 		deleteToDo();
// 	}
// 	input = prompt("What would you like to do?");
// }
// console.log("OK, you quit the app");

// function toDo() {
// 	console.log("******");
// 	todos.forEach(function(todos, i){
// 		console.log(i + ": " + todos);
// 	});
// 	console.log("******");
// }

// function addToDo() {
// 	var newTodo = prompt("Enter new todo");
// 	todos.push(newTodo);
// 	console.log("Added " + newTodo + " to your ToDo list");
// }

// function deleteToDo(){
// 	var index = prompt("Enter index of todo to delete");
// 	//use splice to remove the todo, second parameter is number of items to delete after index
// 	todos.splice(index, 1);
// 	console.log("Deleted " + todos[index] + " from your todo list");
// }

// var colors = ["red", "orange", "green", "blue", "purple", "black"];

// colors.forEach(function(colorPrint){
// 	console.log(colorPrint);
// });



// var reverse = ["reversed", "is", "string", "this"];

// function printReverse(reverse) {
// 	for (var i = reverse.length-1; i >= 0; i--){
// 		console.log(reverse[i]);
// 	}
// }

// printReverse([1,3,5,7]);
// printReverse(reverse);


//

// function isUniform(identical) {
// 	var check = identical[0];
// 	for (var i = 1; i < identical.length; i++) {
// 		if (check !== identical[i]) {
// 			console.log("false");
// 			return false;
// 		}
// 	}
// 	console.log("true");
// 	return true;
// }

// isUniform([1,1,1,1]);
// isUniform([1,1,1,2]);
// isUniform(["a","a","a","a","a",]);




// sumArray()

// function sumArray(arr) {
// 	var sum = 0;
// 	for (var i = 0; i < arr.length; i++) {
// 		sum += arr[i];
// 	}
// 	console.log(sum);	
// }

// sumArray([1,2,3,4]);
// sumArray([100,200,1,5]);

// function sumArray(arr) {
// 	var sum = 0;
// 	arr.forEach(function(element){
// 		sum += element;
// 	});
// 	console.log(sum);
// 	return sum;
// }

// sumArray([1,2,3,4]);



//max()

// function max(arr) {
// 	var maximum = 0;
// 	for (var i = 0; i < arr.length; i++) {
// 		if (arr[i] > maximum) {
// 			maximum = arr[i];
// 		}
// 	}
// 	console.log(maximum);
// 	return maximum;
// }

// max([1,2,3,5,4]);
// max([1,2,100,32,99]);


// function max(arr) {
// 	var maximum = 0;
// 	arr.forEach(function(element){
// 		if (element > maximum) {
// 			maximum = element;
// 		}
// 	});
// 	console.log(maximum);
// 	return(maximum);
// }

// max([1,2,3,5,4]);
// max([1,2,100,32,99]);

// var person = { 
// 	name: "Travis",
// 	age: 43,
// 	location: "NY"
// };

// console.log(person.age);


//------Array of Objects------

// var posts = [
// 	{
// 		title: "Cats are mediocre",
// 		author: "Colt",
// 		comments: ["Awesome post", "terrible post"]
// 	},
// 	{
// 		title: "Cats are actually awesome",
// 		author: "Cat Luvr",
// 		comments: ["Awesome", "terrible post"]
// 	}
// ]

//for (var i = 0; i < posts.length; i++) {
//	console.log(i + ": " + posts[i]);
//}



// var someObject = {
// 	friends: [
// 		{name: "Malfoy"},
// 		{name: "Crabbe"},
// 		{name: "Goyle"}
// 	],
// 	color: "baby blue",
// 	isEvil: true
// };

// console.log(someObject.friends[0].name);


// var movies = [
// 	{
// 		name: "Bourne Identity",
// 		rating: 4.5,
// 		hasWatched: true
// 	},
// 	{
// 		name: "Bourne Supremacy",
// 		rating: 4.7,
// 		hasWatched: false
// 	},
// 	{
// 		name: "Bourne Legacy",
// 		rating: 5.0,
// 		hasWatched: true
// 	}
// ]

// for (var i = 0; i < movies.length; i++) {
// 	if (movies[i].hasWatched === true) {
// 		console.log("You have seen " + movies[i].name + ", rating - " + movies[i].rating);
// 	}
// 	else if (movies[i].hasWatched === false) {
// 		console.log("You have not seen " + movies[i].name + ", rating - " + movies[i].rating);
// 	}


// }


// var body = document.querySelector("body");
// var isBlue = false;

// setInterval(function(){
// 	if (isBlue) {
// 		body.style.background = "white";
// 	} else {
// 		body.style.background = "#3498db";
// 	}
// 	isBlue = !isBlue;
// }, 1000);