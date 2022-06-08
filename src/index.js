// import {todo, clearComplete, addOrEdit, complete, remove, populateData} from './modules/managedata.js';
import './index.css';

let data;

// if (localStorage.getItem('todos') === null || localStorage.getItem('todos') === undefined){
//   data = [];
// }else {
//   todo.setTodos(JSON.parse(localStorage.getItem('todos')));
//   data = todo.getTodos();
// }

// let data = [
//   {
//     index: 5,
//     completed: false,
//     description: 'do some sports',
//   },
//   {
//     index: 2,
//     completed: false,
//     description: 'check messages',
//   },
//   {
//     index: 4,
//     completed: false,
//     description: 'clean house ',
//   },
//   {
//     index: 1,
//     completed: false,
//     description: 'wake up at 6am',
//   },
//   {
//     index: 6,
//     completed: false,
//     description: 'take shower',
//   },
//   {
//     index: 3,
//     completed: false,
//     description: 'wash dishes',
//   },
//   {
//     index: 7,
//     completed: false,
//     description: 'start daily activities',
//   },
// ];

// data = todo.getTodos()
// data = data.sort((a, b) => a.index - b.index);

const populateData = () => {
  const list = document.getElementById('list');
  list.innerHTML = '';
  data.forEach((singledata) => {
    const li = document.createElement('li');
    const licheckbox = document.createElement('input');
    const inputelem = document.createElement('input');
    const span = document.createElement('span');
    span.setAttribute('class', `${singledata.index} dots`);
    span.innerHTML = '&#8285;';
    licheckbox.setAttribute('type', 'checkbox');
    // licheckbox.setAttribute('onclick', '() => complete()');
    licheckbox.setAttribute('class', `${singledata.index} checkbox`);
    inputelem.setAttribute('class', `${singledata.index} inputfields inputbox`);
    inputelem.setAttribute('type', 'text');
    if (singledata.completed===true){
    inputelem.setAttribute('value', singledata.description);
    inputelem.setAttribute('class', 'completed');
    }
    inputelem.setAttribute('value', singledata.description);
    li.appendChild(licheckbox);
    li.appendChild(inputelem);
    li.appendChild(span);
    list.appendChild(li);
  });
};


require('./modules/managedata.js')
// populateData();
// clearComplete();
// addOrEdit();
// complete();
// remove();

// export {populateData};