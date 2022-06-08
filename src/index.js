import './index.css';

let data = [
  {
    index: 5,
    completed: false,
    description: 'do some sports'
  },
  {
    index: 2,
    completed: false,
    description: 'check messages'
  },
  {
    index: 4,
    completed: false,
    description: 'clean house '
  }, 

  {
    index: 1,
    completed: false,
    description: 'wake up at 6am'
  },
  {
    index: 6,
    completed: false,
    description: 'take shower'
  }
  ,
  {
    index: 3,
    completed: false,
    description: 'wash dishes'
  },
  {
    index: 7,
    completed: false,
    description: 'start daily activities'
  }
];

data = data.sort((a, b) => a.index - b.index);
const populateData = () =>{
  const list = document.getElementById('list');
  list.innerHTML='';
  data.forEach((singledata) => {
    const li = document.createElement('li');
    const licheckbox = document.createElement('input');
    const inputelem = document.createElement('input');
    const span = document.createElement('span');
    span.setAttribute('class', 'dots')
    span.innerHTML = `&#8285;`
    licheckbox.setAttribute('type', 'checkbox');
    licheckbox.setAttribute('class', 'checkbox');
    inputelem.setAttribute('class', 'inputbox');
    inputelem.setAttribute('type', 'text');
    inputelem.setAttribute('value', singledata.description);
    li.appendChild(licheckbox);
    li.appendChild(inputelem);
    li.appendChild(span);
    list.appendChild(li);
  });
}

populateData();
