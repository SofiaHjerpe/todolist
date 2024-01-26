const addItem = document.querySelector(".add");
addItem.addEventListener("submit", () => {
  let todo = document.getElementById("text");
  let valueTodo = todo.value;
  let author = document.getElementById("author");
  let valueAuthor = author.value;

  const defaultTodos = [
    {
      author: valueAuthor,
      text: valueTodo,
      done: false,
      timestamp: new Date().getHours() + ":" + new Date().getMinutes(),
    },
  ];
  console.log(defaultTodos);

});
 function createTodoItemAsHtml(todoItem) {
   return `
    <article class="todo-item">
    <div class="action-icons"><span class="done">Done</span> </div>
      <div class="content">
        <span class="text">${todoItem.text}</span>
      </div>
      <div class="action-icons">
        <span class="material-icons delete">Delete</span>
        <span class="material-icons moreInfo">Info</span>
        <div class="moreInfo">
        <span class="author">${todoItem.author}</span>
         <span class="author">${todoItem.timestamp}</span>
      </div>
      </div> 
    </article>
`;
 }

 const defaultTodosAsHtml = defaultTodos.map((todo) => {
   return createTodoItemAsHtml(todo);
 });

 const htmlString = defaultTodosAsHtml.join("");
 const todoItems = document.querySelector(".todos");
 todoItems.innerHTML = htmlString;