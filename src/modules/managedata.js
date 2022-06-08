// import populateDatap from '../index.js'
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
    return this.todos;
  }

  setTodos (newTodoes) {
    this.todos = newTodoes;
  }
}

let todo = new Todo();
const data = todo.getTodos()

const dots = document.querySelectorAll('.dots');
const checkbox = document.querySelectorAll('.checkbox');
const inputfields = document.querySelectorAll('.inputfields');

// const remove = () => {
  dots.forEach(dot=>{
    dot.addEventListener('click', (e) => {
      todo.removeTodo(Number(e.target.classList[0]));
      // populateData()
    })
  })
// }

// const complete = () => {
  checkbox.forEach(check=>{
    check.addEventListener('click', (e) => {
      todo.complete(Number(e.target.classList[0]));
      console.log(e.target);
      // populateData()
    })
  })
// }


// const addOrEdit = () => {
  const inputbox = document.querySelectorAll('.inputbox');
  inputbox.forEach((newTodo) => {
    newTodo.addEventListener('keydown',(e) => {
      if (e.which===13){
        if(Number(e.target.classList[0])){
          todo.editTodo(Number(e.target.classList[0], e.target.value));
        }else {
          todo.addTodo(e.target.value);
          e.target.value = '';
        }
        // populateData();
      }
    })
  })
// }

// const clearComplete = () => {
  const clear = document.getElementById('clear');
  clear.addEventListener('click', () => {
    todo.clearCompleted();
    // populateData()
  })
// }



// export {todo, clearComplete, addOrEdit, complete, remove, populateData};