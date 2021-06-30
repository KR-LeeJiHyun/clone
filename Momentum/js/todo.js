const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

let toDos = [];

const TODOS = "todos"

function loadToDo(){
    const temp = JSON.parse(localStorage.getItem(TODOS));
    if(temp !== null){
        toDos = temp;
        toDos.forEach(paintToDo);
    }
}

function saveToDos(){
    localStorage.setItem(TODOS, JSON.stringify(toDos));
}

function deleteToDo(event){
    const target = event.target;
    const ul = target.parentElement.parentElement;
    ul.innerHTML = "";
    const index = target.id;
    toDos.splice(index, 1);
    saveToDos();
    loadToDo();
}

function paintToDo(newToDo, id){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const btn = document.createElement("button");
    btn.innerText = "❌";
    btn.addEventListener("click", deleteToDo);
    btn.id = id;
    span.innerText = newToDo;
    li.appendChild(span);
    li.appendChild(btn);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDos.push(newToDo);
    toDoInput.value = "";
    paintToDo(newToDo, toDos.length - 1);
    saveToDos();
}

function init(){
    loadToDo();
    toDoForm.addEventListener("submit", handleToDoSubmit);
}

init();

