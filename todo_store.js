/* todo_store.js
 * 
 * Ready-bake code to store and retrieve todo items
 */

function save(item) {
	var todoArray = getStoreArray("todo");
	todoArray.push(item);
	localStorage.setItem("todo", JSON.stringify(todoArray));
}

function loadTodo() {
	var todoArray = getTodoItems();
	var ul = document.getElementById("todo");
	if (todoArray != null) {
		for (var i = 0; i < todoArray.length; i++) {
			var li = document.createElement("li");
			li.dataset.order = i;
			li.innerHTML = todoArray[i];
			ul.appendChild(li);
			li.addEventListener("click", function(event){
				removeItem(event.target.dataset.order)
				ul.removeChild(event.target);
			},false)
		}
	}
}

function removeItem(item){
	var todoArray = getStoreArray("todo");
	//delete todoArray[parseInt(item)];
	todoArray.splice(item,item++);
	localStorage.setItem("todo", JSON.stringify(todoArray));
}

function getTodoItems() {
	return getStoreArray("todo");
}

function getStoreArray(key) {
	var todoArray = localStorage.getItem(key);
	if (todoArray == null || todoArray == "") {
		todoArray = new Array();
	}
	else {
		todoArray = JSON.parse(todoArray);
	}
	return todoArray;
}

