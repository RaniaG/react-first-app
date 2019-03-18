import React from 'react';
import TaskCard from './taskCard';
import { Listing } from '../../shared/listing/list';
import { Row, Col, Container } from '../../../bootstrap-imports';
import { connect } from 'react-redux';
import { TextBox } from '../../shared/textbox/textbox';
import { TodoActions } from '../../../Actions/todo';
class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.addNew = this.addNew.bind(this);
    }
    addNew(val) {
        if (val === '') return;
        const { dispatch } = this.props;
        dispatch(TodoActions.addNewItem(val));
    }
    render() {
        const { doingList, doneList, deletedList } = this.props
        return (
            <Container>
                <Row >
                    <Col md={4}>
                        <h2>Todo</h2>
                        <TextBox submit={this.addNew} placeholder="Add new Item" />
                        <Listing list={doingList}><TaskCard status={0} /></Listing>
                    </Col>
                    <Col md={4}>
                        <h2>Done</h2>
                        <Listing list={doneList}><TaskCard status={1} /></Listing>
                    </Col>
                    <Col md={4}>
                        <h2>Deleted</h2>
                        <Listing list={deletedList}><TaskCard status={2} /></Listing>
                    </Col>
                </Row>
            </Container>
        )
    }

}
const mapState2Props = (state) => {
    return {
        doingList: state.todoList.filter((el) => !(el.done || el.deleted)),
        doneList: state.todoList.filter((el) => el.done && !el.deleted),
        deletedList: state.todoList.filter((el) => el.deleted)
    };
}

export default connect(mapState2Props)(TodoList);