var li = $("li")[0];
console.log(li);



//check off
$("ul").on("click", ".complete", function(){
	$(this).parent().toggleClass("strikethrough");
});

//remove toDo when user clicks on delete icon sandee westgate
$("ul").on("click", ".delete", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type = 'text']").on("keypress", function(event){
	if (event.which === 13) {
		//grab new todo
		toDoText = $(this).val();
		//create new li and add to ul
		$("ul").append("<li>" + " <span class='complete'><i class='fa fa-check' aria-hidden='true'></i></span> " + toDoText + "<span class='delete'><i class='fa fa-trash' aria-hidden='true'></i></span> " + "</li>");
		$(this).val("");
	}
});

$("button").on("click", function(){
	$("input[type='text']").toggleClass("none");
});

