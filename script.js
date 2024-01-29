const form = document.querySelector(".form");
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
  const newTodoElement = createTodoItemAsHtml(newTodo, defaultTodos.length);
  const todoItem = document.querySelector(".todos");
  todoItem.insertAdjacentHTML("beforebegin", newTodoElement);
});

function createTodoItemAsHtml(todoItem, index) {
  return `<article class="todo-item">
    <div class="action-icons"><input type="checkbox" data-index="${index}" class="done"></span> </div>
      <div class="content">
        <span class="text">${todoItem.todo}</span>
      </div>
      <div class="action-icons">
        <span class="material-icons delete">delete</span>
         <span class="material-icons moreInfo">info
        <span class="mInfo"> author: ${todoItem.author} date: ${todoItem.timestamp}</span>
        </span>
          
      
      </div> 
    </article>
`;
}

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
    let todoIndex = e.target.getAttribute("data-index");
    defaultTodos[todoIndex].done = e.target.checked;
  });
});
