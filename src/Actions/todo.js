export class TodoActions {
    static addNewItem(data) {
        return { type: 'ADD_NEW', data };
    }
    static editItem(id, data) {
        return { type: 'EDIT_ITEM', id, data };
    }
    static toggleDone(id) {
        return { type: 'TOGGLE_DONE', id };
    }
    static toggleDelete(id) {
        return { type: 'TOGGLE_DELETE', id };
    }
}