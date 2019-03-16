import React from 'react';
import TaskCard from './taskCard';
import { Listing } from '../shared/listing/list';
import { Row, Col, Container } from '../../bootstrap-imports';
import { connect } from 'react-redux';
import { TextBox } from '../shared/textbox/textbox';
import { TodoActions } from '../../Actions/todo';
export class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.addNew = this.addNew.bind(this);
    }
    addNew(val) {
        const { dispatch } = this.props;
        dispatch(TodoActions.addNewItem(val));
    }
    render() {
        const { list } = this.props
        return (
            <Container>
                <Row >
                    <Col md={6}>
                        <h2>Todo</h2>
                        <TextBox submit={this.addNew} placeholder="Add new Item" />
                        <Listing list={list.filter((el) => !(el.done || el.deleted))}><TaskCard status={0} /></Listing>
                    </Col>
                    <Col md={6}>
                        <h2>Done</h2>
                        <Listing list={list.filter((el) => el.done && !el.deleted)}><TaskCard status={1} /></Listing>
                    </Col>
                    <Col md={4}>
                        <h2>Deleted</h2>
                        <Listing list={list.filter((el) => el.deleted)}><TaskCard status={2} /></Listing>
                    </Col>
                </Row>
            </Container>
        )
    }

}
const mapState2Props = (state) => {
    return { list: state.todoList };
}

export default connect(mapState2Props, null)(TodoList);