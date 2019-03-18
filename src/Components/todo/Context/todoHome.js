import React from 'react';
import { myContext } from '../../../store';
import { TodoListContext } from './todo';




export class TodoContext extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            todoList: [
                { done: false, deleted: false, data: 'abc', id: 0 }
            ], idCounterpageClick: 0
        }
        this.addItem = this.addItem.bind(this);
        this.editItem = this.editItem.bind(this);
        this.toggleDelete = this.toggleDelete.bind(this);
        this.toggleDone = this.toggleDone.bind(this);
        this.getDoing = this.getDoing.bind(this);
        this.getDone = this.getDone.bind(this);
        this.getDeleted = this.getDeleted.bind(this);


    }

    addItem(data) {
        let id = this.state.idCounter;
        const newItem = { done: false, deleted: false, data, id };
        // const todoList = state.todoList.concat(newItem);
        this.setState({ todoList: [...this.state.todoList, newItem], idCounter: id + 1 });
    }
    editItem(id, newData) {
        const i2 = this.state.todoList.findIndex((el) => el.id === id);
        const arr2 = this.state.todoList.slice();
        arr2[i2].data = newData;
        this.setState({ ...this.state, todoList: arr2 });
    }
    toggleDelete(id) {
        const i = this.state.todoList.findIndex((el) => el.id === id);
        const array = this.state.todoList.slice();
        array[i].deleted = !array[i].deleted;
        this.setState({ ...this.state, todoList: array });
    }
    toggleDone(id) {
        const i = this.state.todoList.findIndex((el) => el.id === id);
        const array = this.state.todoList.slice();
        array[i].done = !array[i].done;
        this.setState({ ...this.state, todoList: array });
    }

    getDoing() {
        return this.state.todoList.filter((el) => !(el.done || el.deleted));
    }
    getDone() {
        return this.state.todoList.filter((el) => el.done && !el.deleted);
    }
    getDeleted() {
        return this.state.todoList.filter((el) => el.deleted);
    }
    render() {
        return (
            <myContext.Provider value={{ state: this.state, addItem: this.addItem, editItem: this.editItem, toggleDelete: this.toggleDelete, toggleDone: this.toggleDone, getDoing: this.getDoing, getDone: this.getDone, getDeleted: this.getDeleted }}>
                <TodoListContext />
            </myContext.Provider>
        )
    }
}