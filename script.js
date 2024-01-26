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
  const newTodoElement = createTodoItemAsHtml(newTodo);
  const todoItem = document.querySelector(".todos");
  todoItem.insertAdjacentHTML("beforebegin", newTodoElement);
});

function createTodoItemAsHtml(todoItem) {
  return `<article class="todo-item">
    <div class="action-icons"><span class="done">Done</span> </div>
      <div class="content">
        <span class="text">${todoItem.todo}</span>
      </div>
      <div class="action-icons">
        <span class="material-icons delete">delete</span>
         <span class="material-icons moreInfo">info</span>
        <span class="mInfo"> author: ${todoItem.author} date: ${todoItem.timestamp}</span>
          
      
      </div> 
    </article>
`;
}
const defaultTodosAsHtml = defaultTodos.map((todo) => {
  return createTodoItemAsHtml(todo);
});
console.log(defaultTodosAsHtml);
const htmlString = defaultTodosAsHtml.join(" ");
const todoItems = document.querySelector(".todos");
todoItems.innerHTML = htmlString;
