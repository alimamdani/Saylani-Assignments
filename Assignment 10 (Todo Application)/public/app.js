var list_items = document.getElementById("list-items") 

function addToto() {
    var todos = document.getElementById("todoList");
    // create todo list
    var list = document.createElement('li')
    var liText = document.createTextNode(todos.value)
    list.appendChild(liText)

    //create edit button
    var edibtn = document.createElement("button")
    var editext = document.createTextNode("Edit")
    edibtn.appendChild(editext)
    edibtn.setAttribute("class","btn")
    edibtn.setAttribute("onclick", "edittodo(this)")
    
    list.appendChild(edibtn)
    
    //create delete button
    var delbtn = document.createElement("button")
    var deltext = document.createTextNode("Delete")
    delbtn.setAttribute("class","btn")
    delbtn.setAttribute("onclick", "deletetodo(this)")
    delbtn.appendChild(deltext)
    
    list.appendChild(delbtn)
    
    list_items.appendChild(list);
    todos.value = "";
    
}

function deletetodo(e) {
    e.parentNode.remove();
}
function edittodo(e) {
    var val = prompt("Enter Your Update Value", e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = val;
}
function deleteAll() {
    list_items.innerHTML = "";
}
