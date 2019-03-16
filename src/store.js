import { createStore } from 'redux';
import { TodoReducer } from './Reducers/todo';

export const myStore = createStore(TodoReducer, {
    todoList: [],
    idCounter: 0
})