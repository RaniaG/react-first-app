export const TodoReducer = (state, action) => {
    // debugger;
    let result = state;

    switch (action.type) {
        case 'ADD_NEW':
            let id = state.idCounter;
            const newItem = { done: false, deleted: false, data: action.data, id };
            const todoList = state.todoList.concat(newItem);
            result = { ...state, todoList, idCounter: id + 1 };
            break;
        case 'TOGGLE_DONE':
            const index = state.todoList.findIndex((el) => el.id === action.id);
            const arr = state.todoList.slice();
            arr[index].done = index >= 0 && !arr[index].done;
            result = { ...state, todoList: arr };
            break;
        case 'TOGGLE_DELETE':
            const i = state.todoList.findIndex((el) => el.id === action.id);
            const array = state.todoList.slice();
            array[i].deleted = i >= 0 && !array[i].deleted;
            result = { ...state, todoList: array };
            break;
    }
    return result;
}