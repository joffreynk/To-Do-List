class Todo {
  constructor(){
    this.todos = [];
  }

  addTodo (description){
    this.todos.push({index:this.todos.length+1, completed:false, description});
  }

  removeTodo(index){
    this.todos = this.todos.filter((singleTodo) => singleTodo.index!==index);
    const helpertodos = [];
    let helpertodo;
    this.todos.forEach((singleTodo)=>{
      helpertodo = {
        index:helpertodos.length+1,
        completed:singleTodo.completed,
        description:singleTodo.description,
      };
      helpertodos.push(helpertodo);
    });
    this.todos = helpertodos;
  }

  editTodo(index, description){
    this.todos.map((singleTodo) => {
      if(singleTodo.index===index){
        singleTodo.description = description;
      }
      return singleTodo;
    });
  }

  clearCompleted() {
    this.todos.filter((singleTodo) => singleTodo.completed === false);
  }

  complete(index){
    this.todos.map((singleTodo) => {
      if(singleTodo.index===index){
        singleTodo.completed = true;
      }
      return singleTodo;
    });
  }

  getTodos() {
    return this.todos
  }
}

let todo = new Todo();

const dots = document.querySelectorAll('.dots');
const checkbox = document.querySelectorAll('.checkbox');
const inputfields = document.querySelectorAll('.inputfields');

// inputfields.forEach((field)=>{
//   field.addEventListener('focus', (e) => {
//     console.log(e.target);
//   })
// })



dots.forEach(dot=>{
  dot.addEventListener('click', (e) => {
    console.log(e.target);
  })
})


checkbox.forEach(check=>{
  check.addEventListener('click', (e) => {
    console.log(e.target);
  })
})

const inputbox = document.querySelectorAll('.inputbox');
inputbox.forEach((newTodo) => {
  newTodo.addEventListener('keydown',(e) => {
    if(e.which===13)console.log(e.target.classList);
  })
})


