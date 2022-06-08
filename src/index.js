const data = [
  {
    index: 1,
    completed: false,
    description: "wash dishes",
  },
  {
    index: 1,
    completed: false,
    description: "wash dishes",
  },
  {
    index: 1,
    completed: false,
    description: "wash dishes",
  },
  {
    index: 1,
    completed: false,
    description: "wash dishes",
  }, 
  {
    index: 1,
    completed: false,
    description: "wash dishes",
  },
  {
    index: 1,
    completed: false,
    description: "wash dishes",
  },
  {
    index: 1,
    completed: false,
    description: "wash dishes",
  },
  {
    index: 1,
    completed: false,
    description: "wash dishes",
  },
  {
    index: 1,
    completed: false,
    description: "wash dishes",
  },
  {
    index: 1,
    completed: false,
    description: "wash dishes",
  }
];

const populateData = () =>{
  const list = document.getElementById('list');
  list.innerHTML='';
  data.forEach((singledata) => {
    const li = document.createElement('li');
    const licheckbox = document.createElement('input');
    const inputelem = document.createElement('input');
    const span = document.createElement('span');
    span.innerHTML = `&#8285;`
    licheckbox.setAttribute('type', 'checkbox')
    licheckbox.setAttribute('type', 'checkbox')
    inputelem.setAttribute('value', singledata.description);
    li.appendChild(licheckbox)
    li.appendChild(inputelem)
    li.appendChild(span)
    list.appendChild(li)
  })
}

populateData();
