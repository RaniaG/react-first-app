import { createStore } from 'redux';
import { TodoReducer } from './Reducers/todo';
import React from 'react';

export const myStore = createStore(TodoReducer, {
    todoList: [],
    idCounter: 0
})

export const myContext = React.createContext();