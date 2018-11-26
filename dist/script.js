(function(){

const todo = document.querySelector('.todo');
const getText = todo.querySelector('.addText');
const container = document.querySelector('.container');

 getText.addEventListener('keyup', function(event) {
 
  if (event.key === "Enter" && event.target.value !== '') {
     const addDiv = document.createElement('div');
     addDiv.classList.add('TodoLine');
     const addCheck = document.createElement('div');
     addCheck.classList.add('TodoLine__chek');
     const addContent = document.createElement('div');
     addContent.classList.add('TodoLine__content');
     addContent.innerHTML = getText.value;
     const addClose = document.createElement('div');
     addClose.classList.add('TodoLine__close');
     const todoLine = todo.appendChild(addDiv);
     todoLine.appendChild(addCheck);
     todoLine.appendChild(addContent);
     todoLine.appendChild(addClose);

     //create footer
     const todoFooter = document.createElement('div');
     todoFooter.classList.add('TodoFooter');
     container.appendChild(todoFooter);
     const todoLines = document.querySelectorAll('.TodoLine');
     
     let counter = 0;
     todoLines.forEach(todoLine => {
       
       counter = todoLines.length;

     });
    
     
     const item = document.createElement('div');
     item.classList.add('TodoFooter__item');
     item.textContent = counter;
     const filterAll = document.createElement('div');
     filterAll.classList.add('TodoFooter__all');
     filterAll.innerHTML = '<p> All </p>'; 
     const filterActive = document.createElement('div');
     filterActive.classList.add('TodoFooter__active');
     filterActive.innerHTML = '<p> Active </p>';
     const filterCompleted = document.createElement('div');
     filterCompleted.classList.add('TodoFooter__completed');
     filterCompleted.innerHTML = '<p> Completed </p>';
     const todoFooters = document.querySelectorAll('.TodoFooter');
 
      todoFooter.appendChild(item);
      todoFooter.appendChild(filterAll);
      todoFooter.appendChild(filterActive);
      todoFooter.appendChild(filterCompleted);

     if(todoFooters.length > 1){
     todoFooter.previousElementSibling.remove();
     }
    
    
     addCheck.addEventListener('click', function(event){ 
      if (event.target.classList.length > 1) {
        this.parentElement.classList.remove('checked');
        event.target.classList.remove('addImg');
      } else {
        this.parentElement.classList.add('checked');
        event.target.classList.add('addImg');
      }
     })
     
    
     addClose.addEventListener('click', function(event) {
       this.parentElement.remove();
          
     })   
  }  
})

     

})();