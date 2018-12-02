(function() {
  const container = document.querySelector(".container");
  const todos = [];

  const inputContainer = document.createElement("div");
  inputContainer.classList.add("inputContainer");
  const arrow = document.createElement("div");
  arrow.classList.add("arrow");
  const todoInput = document.createElement("input");
  todoInput.setAttribute("type", "text");
  todoInput.setAttribute("placeholder", "What needs to be done?");
  todoInput.classList.add("todoInput");
  container.appendChild(inputContainer);
  inputContainer.appendChild(arrow);
  inputContainer.appendChild(todoInput);

  const addTodo = function(name, status, state, show) {
    const newTodo = {
      name: name,
      completed: status,
      state: state,
      showCompleted: show
    };

    todos.push(newTodo);
  };

  const checkboxTodos = function(checkbox) {
    checkbox.addEventListener("click", function(event) {
      todoList.innerHTML = "";
      for (let i = 0; i < todos.length; i++) {
        if (i == event.target.nextElementSibling.dataset.counter) {
          todos[i].completed = !todos[i].completed;
        }
      }
      renderTodos(todos);
    });
  };

  const closeTodos = function(close) {
    close.addEventListener("click", function(event) {
      todoList.innerHTML = "";
      for (let i = 0; i < todos.length; i++) {
        if (i == event.target.previousElementSibling.dataset.counter) {
          todos.splice(i, 1);
          event.target.parentElement.remove();
        }
      }
      renderTodos(todos);
    });
  };

  todoInput.addEventListener("keypress", function(event) {
    if (event.which === 13) {
      todoList.innerHTML = "";
      addTodo(event.target.value, false, false, false);
      renderTodos(todos);
    }
  });
  const createFooter = function() {
    const todoFooter = document.createElement("div");
    todoFooter.classList.add("todoFooter");
    const counter = document.createElement("div");
    counter.innerHTML = count + "  items left";
    const btnAll = document.createElement("div");
    btnAll.innerHTML = "All";
    btnAll.classList.add("btnAll", "active");
    const btnActive = document.createElement("div");
    btnActive.innerHTML = "Active";
    btnActive.classList.add("btnActive");
    const btnCompleted = document.createElement("div");
    btnCompleted.innerHTML = "Completed";
    btnCompleted.classList.add("btnCompleted");
    const btnClear = document.createElement("div");
    btnClear.classList.add("btnClear");
    btnClear.innerHTML = "Clear completed";
    todoList.appendChild(todoFooter);
    todoFooter.appendChild(counter);
    todoFooter.appendChild(btnAll);
    todoFooter.appendChild(btnActive);
    todoFooter.appendChild(btnCompleted);
    todoFooter.appendChild(btnClear);
    todoFooter.addEventListener("click", function() {
      //show All
      if (event.target.classList == btnAll.classList) {
        todoFooter.innerHTML = "";
        todoList.innerHTML = "";
        for (let i = 0; i < todos.length; i++) {
          todos[i].state = false;
          todos[i].showCompleted = false;
        }

        renderTodos(todos);
      }
      //show Active
      if (event.target.classList == btnActive.classList) {
        todoFooter.innerHTML = "";
        todoList.innerHTML = "";
        for (let i = 0; i < todos.length; i++) {
          todos[i].state = false;
          todos[i].showCompleted = false;
          if (todos[i].completed) {
            todos[i].state = false;
            todos[i].showCompleted = true;
          }
        }
        renderTodos(todos);
      }
      //show Completed
      if (event.target.classList == btnCompleted.classList) {
        todoFooter.innerHTML = "";
        todoList.innerHTML = "";
        for (let i = 0; i < todos.length; i++) {
          todos[i].state = false;
          todos[i].showCompleted = false;
          if (!todos[i].completed) {
            todos[i].state = true;
            todos[i].showCompleted = false;
          }
        }
        renderTodos(todos);
      }
      if (event.target.classList == btnClear.classList) {
        todoFooter.innerHTML = "";
        todoList.innerHTML = "";

        for (let i = 0; i < todos.length; i++) {
          if (todos[i].completed) {
            todos.splice(i, 1);
            i--;
          }
        }
        renderTodos(todos);
      }
    });
  };

  const todoList = document.createElement("ul");
  todoList.classList.add("todoList");
  container.appendChild(todoList);

  let count = 0;
  const renderTodos = function(todos) {
    let todo;
    count = 0;
    for (todo = 0; todo < todos.length; todo++) {
      const todoBlock = document.createElement("div");
      todoBlock.classList.add("todoBlock");
      const todoItem = document.createElement("li");
      todoItem.setAttribute("data-counter", todo);
      todoItem.classList.add("list");
      todoItem.textContent = todos[todo].name;
      const todoCheck = document.createElement("input");
      todoCheck.setAttribute("type", "checkbox");
      todoCheck.classList.add("checkbox");
      const todoClose = document.createElement("div");
      todoClose.classList.add("todoClose");
      todoList.appendChild(todoBlock);
      todoBlock.appendChild(todoCheck);
      todoBlock.appendChild(todoItem);
      todoBlock.appendChild(todoClose);

      if (!todos[todo].state && todos[todo].showCompleted) {
        todoBlock.classList.toggle("hide");
      }
      checkboxTodos(todoCheck);
      if (todos[todo].state && !todos[todo].showCompleted) {
        todoBlock.classList.toggle("hide");
      }
      if (todos[todo].completed) {
        todoCheck.checked = !0;
        todoItem.style.setProperty("text-decoration", "line-through");
      } else {
        count++;
      }
      closeTodos(todoClose);
    }
    createFooter();
  };
})();
