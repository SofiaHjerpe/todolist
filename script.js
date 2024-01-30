const form = document.querySelector(".form");
const todos = document.querySelector(".todos");
const defaultTodos = [
  {
    author: "Sofia",
    todo: "Make lunch",
    done: false,
    timestamp: new Date().getTime(),
  },
  {
    author: "Sofia",
    todo: "Make a website",
    done: false,
    timestamp: new Date().getTime(),
  },
  {
    author: "Sofia",
    todo: "Clean the kitchen",
    done: false,
    timestamp: new Date().getTime(),
  },
];
function createTodoItemAsHtml(todoItem, index) {
  return `<article class="todo-item">
    <div class="action-icons"><input type="checkbox" id="${index}" class="done"
     ${todoItem.done ? "checked" : ""}></input></div>
      <div class="content">
        <span class="text">${todoItem.todo}</span>
      </div>
      <div class="action-icons">
         <button data-index="${index}" class="btn-icon moveUp"><span class="material-icons"> arrow_upward</span></button>
         <button data-index="${index}" class="btn-icon moveDown"><span class="material-icons"> arrow_downward</span></button>
         <button class="btn-icon delete"><span class="material-icons">delete</span></button>
         <span class="material-icons moreInfo">info
        <span class="mInfo"> author: ${todoItem.author} date: ${todoItem.timestamp}</span>
        </span>
          
      
      </div> 
    </article>
`;
}
let button = document.querySelector(".moveUp");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = document.querySelector(".text");
  const author = document.querySelector(".author");

  const newTodo = {
    author: author.value,
    todo: todo.value,
    done: false,
    timestamp: new Date().getTime(),
  };

  defaultTodos.push(newTodo);
  const newTodoElement = createTodoItemAsHtml(newTodo, defaultTodos.length - 1);
  const todoItem = document.querySelector(".todos");
  todoItem.insertAdjacentHTML("beforeend", newTodoElement);

  todoItem.addEventListener("change", function (e) {
    if (e.target.matches(".done")) {
      let todoIndex = e.target.getAttribute("data-index");
      defaultTodos[todoIndex].done = e.target.checked;
    }
  });
  todoItem.addEventListener("click", function (e) {
    if (e.target.matches(".delete")) {
      todos.removeChild(e.target.closest("article"));
    }
  });
});

const defaultTodosAsHtml = defaultTodos.map((todo, index) => {
  return createTodoItemAsHtml(todo, index);
});

console.log(defaultTodosAsHtml);
const htmlString = defaultTodosAsHtml.join(" ");
const todoItems = document.querySelector(".todos");
todoItems.innerHTML = htmlString;

let done = document.querySelectorAll(".done");

done.forEach((checkbox, index) => {
  checkbox.addEventListener("change", function (e) {
    let todoIndex = e.target.id;
    defaultTodos[todoIndex].done = e.target.checked;
  });
});
const remove = document.querySelectorAll(".delete");
remove.forEach((removeItem, index) => {
  removeItem.addEventListener("click", function (e) {
    todos.removeChild(e.target.closest("article"));
  });
});
const moveUp = document.querySelectorAll(".moveUp");
const moveDown = document.querySelectorAll(".moveDown");
moveUp.forEach((up) => {
  up.addEventListener("click", (e) => {
    let index = e.target.getAttribute("data-index");
    todos.insertBefore(moveUp[index], moveUp[index].previousElementSibling);
  });
});
