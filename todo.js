/* playlist.js */

window.onload = init;

function init() {
	loadTodo();
	document.getElementById("todoTextInput").focus()
}

function handleButtonClick(e) {
	var textInput = document.getElementById("todoTextInput");
	var todoItem = textInput.value;

	if (todoItem == "") {
		alert("Please enter a todo");
	}
	else {
		var li = document.createElement("li");
		li.innerHTML = todoItem;
		var ul = document.getElementById("todo");
		ul.appendChild(li);
		save(todoItem);
	}
}


window.addEventListener("DOMContentLoaded", function() {
	document.onsubmit = handleButtonClick;
}, false);

