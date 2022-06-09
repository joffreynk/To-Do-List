import Todo from './modules/managedata.js';
import './index.css';

const todo = new Todo();

const populateData = () => {
  if (localStorage.getItem('todo')) {
    todo.setTodos(JSON.parse(localStorage.getItem('todo')));
  }
  const data = todo.getTodos();
  const list = document.getElementById('list');
  list.innerHTML = '';
  data.forEach((singledata) => {
    const li = document.createElement('li');
    const licheckbox = document.createElement('input');
    const inputelem = document.createElement('input');
    const span = document.createElement('span');
    const garbage = document.createElement('span');
    garbage.innerHTML = '&#128465;&#65039;';
    span.setAttribute('class',`${singledata.index} bullet${singledata.index} rmv dots`);
    garbage.setAttribute('class',`${singledata.index} bullet${singledata.index} rmv garbage`
    );
    span.innerHTML = '&#8285;';
    garbage.classList.add('show');
    licheckbox.setAttribute('type', 'checkbox');
    licheckbox.setAttribute('class', `${singledata.index} checkbox`);
    licheckbox.setAttribute('id', `${singledata.index}`);
    inputelem.setAttribute('class',`${singledata.index} bullet${singledata.index} inputfields inputbox`);
    inputelem.setAttribute('type', 'text');
    inputelem.setAttribute('value', singledata.description);
    if (singledata.completed === true) {
      inputelem.classList.toggle('completed');
    }
    li.appendChild(licheckbox);
    li.appendChild(inputelem);
    li.appendChild(garbage);
    li.appendChild(span);
    list.appendChild(li);
  });
};

populateData();

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('checkbox')) {
    todo.complete(Number(event.target.classList[0]));
    localStorage.setItem('todo', JSON.stringify(todo.getTodos()));
    populateData();
  }

  if ( event.target.classList.contains('dots') || event.target.classList.contains('inputfields')) {
    document.querySelector(`.${event.target.classList[1]}.garbage`).classList.remove('show');
    document.querySelector(`.${event.target.classList[1]}.dots`).classList.add('show');
  }

  if (event.target.classList.contains('garbage')) {
    todo.removeTodo(Number(event.target.classList[0]));
    localStorage.setItem('todo', JSON.stringify(todo.getTodos()));
    populateData();
  }

  if (event.target.classList.contains('clear-button')) {
    todo.clearCompleted();
    localStorage.setItem('todo', JSON.stringify(todo.getTodos()));
    populateData();
  }
});

document.addEventListener('keypress', (event) => {
  if (event.which === 13) {
    if (event.target.classList.contains('newtodo')) {
      todo.addTodo(event.target.value);
      event.target.value = '';
      localStorage.setItem('todo', JSON.stringify(todo.getTodos()));
      populateData();
    }

    if (event.target.classList.contains('inputfields')) {
      todo.editTodo(Number(event.target.classList[0]), event.target.value);
      populateData();
      localStorage.setItem('todo', JSON.stringify(todo.getTodos()));
    }
  }
});
