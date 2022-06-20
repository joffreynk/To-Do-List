const Todo = require('./modules/managedata.js');

describe('Add and Remove test functionality', () => {
  const todosTest = new Todo();
  test('Add Test functionality', () => {
    expect(todosTest.addTodo('Task 1')).toEqual(todosTest.getTodos());
  });
  test('Add Test functionality', () => {
    expect(todosTest.addTodo('Task 2')).toEqual(todosTest.getTodos());
  });
  test('Add Test functionality', () => {
    expect(todosTest.addTodo('Task 3')).toEqual(todosTest.getTodos());
  });
  test('Remove Test functionality', () => {
    expect(todosTest.removeTodo(1)).toEqual(todosTest.getTodos());
  });
  test('Remove Test functionality', () => {
    expect(todosTest.removeTodo(2)).toEqual(todosTest.getTodos());
  });
});
