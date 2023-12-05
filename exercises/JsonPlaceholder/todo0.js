// input box
const todoInput = document.getElementById('todoInput');
// button
const submitTodo = document.getElementById('submitTodo');
// data display
const todoData = document.getElementById('todoData');

async function fetchTodo() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
  const data = await response.json();

  todoData.innerText = data.title;
}
