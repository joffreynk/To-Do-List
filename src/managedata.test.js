const Todo = require('./modules/managedata.js');

const todosTest = new Todo();

describe('Add and Remove test functionality', () => {
  test('Add Test functionality', () => {
    expect(todosTest.addTodo('Task 1')).toEqual(todosTest.getTodos());
  });
  test('Add Test functionality', () => {
    expect(todosTest.addTodo('Task 2')).toEqual(todosTest.getTodos());
  });
  test('Add Test functionality', () => {
    expect(todosTest.addTodo('Task 3')).toEqual(todosTest.getTodos());
  });
  test('Add Test functionality', () => {
    expect(todosTest.addTodo('Task 4')).toEqual(todosTest.getTodos());
  });
  test('Add Test functionality', () => {
    expect(todosTest.addTodo('Task 5')).toEqual(todosTest.getTodos());
  });
  test('Add Test functionality', () => {
    expect(todosTest.addTodo('Task 6')).toEqual(todosTest.getTodos());
  });
  test('Remove Test functionality', () => {
    expect(todosTest.removeTodo(1)).toEqual(todosTest.getTodos());
  });
  test('Remove Test functionality', () => {
    expect(todosTest.removeTodo(2)).toEqual(todosTest.getTodos());
  });
});

describe('test for editing, changing status and clearing completed tasks', () => {
  test('Edit Test functionality', () => {
    expect(todosTest.editTodo(1, 'Task edited')).toEqual(todosTest.getTodos());
  });
  test('change status Test functionality', () => {
    expect(todosTest.editTodo(2)).toEqual(todosTest.getTodos());
  });
  test('change status Test functionality', () => {
    expect(todosTest.editTodo(2)).toEqual(todosTest.getTodos());
  });

  test('Clear call completed activity Test functionality', () => {
    expect(todosTest.clearCompleted()).toEqual(todosTest.getTodos());
  });
});
