(function() {
  const container = document.querySelector(".container");
  const todo = document.querySelector(".todo");
  const todos = [];

  const todoInput = document.createElement("input");
  todoInput.setAttribute("type", "text");
  container.appendChild(todoInput);

  const addTodo = function(name, status, state) {
    const newTodo = {
      name: name,
      completed: status,
    };

    todos.push(newTodo);
  };

  const checkboxTodos = function(checkbox) {
    checkbox.addEventListener("click", function(event) {
      
       for(let i=0; i<todos.length; i++) {
      
         if(todos[i].name == event.target.nextElementSibling.textContent){
          todos[i].completed = !todos[i].completed;
          
            if(todos[i].completed ){
              event.target.nextElementSibling.style.setProperty('text-decoration', 'line-through');
            }else{
              event.target.nextElementSibling.style.setProperty('text-decoration', 'none');
            }
         }

        }
    });
  }

  const closeTodos = function (close) { 
    close.addEventListener("click", function(event) {
      
      for(let i=0; i<todos.length; i++) {
     
        if(todos[i].name == event.target.previousElementSibling.textContent){
          console.log(todos);
          delete todos[i];
         event.target.parentElement.remove();
         
        }

       }
   });
  }

  todoInput.addEventListener("keypress", function(event) {
    if (event.which === 13) {
      todoList.innerHTML = '';
      addTodo(event.target.value, false);
      renderTodos(todos);
    }
  });

  const todoList = document.createElement("ul");
  container.appendChild(todoList);

  const renderTodos = function(todos) {
  for(let todo=0; todo<todos.length; todo++ ) {
      const todoBlock = document.createElement('div');
      todoBlock.classList.add('todoBlock');
      const todoItem = document.createElement("li");
      todoItem.classList.add('list');
      if(todos[todo] != empty){
      todoItem.textContent = todos[todo].name;
      const todoCheck = document.createElement("input");
      todoCheck.setAttribute("type", "checkbox");
      todoCheck.classList.add("checkbox");
      const todoClose = document.createElement('div');
      todoClose.classList.add('todoClose');
      todoList.appendChild(todoBlock);
      todoBlock.appendChild(todoCheck);
      todoBlock.appendChild(todoItem);
      todoBlock.appendChild(todoClose);
      checkboxTodos(todoCheck);
      if (todos[todo].completed ){
        todoCheck.checked = !0;
      }
      closeTodos(todoClose);  
      console.log(todos);
    }
    }
  }
})();
