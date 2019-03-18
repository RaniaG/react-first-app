export const TodoActions = {
    addNewItem: (data) => {
        return { type: 'ADD_NEW', data };
    },
    editItem: (id, data) => {
        return { type: 'EDIT_ITEM', id, data };
    },
    toggleDone: (id) => {
        return { type: 'TOGGLE_DONE', id };
    },
    toggleDelete: (id) => {
        return { type: 'TOGGLE_DELETE', id };
    }
}