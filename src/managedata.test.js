const Todo = require('./modules/managedata.js');

describe('Add and Remove test functionality', () => {
    const todosTest = new Todo();
    test('Add Test functionality', () => {
        expect(todosTest.addTodo('Task 1')).toEqual(todosTest.getTodos());
    })
})