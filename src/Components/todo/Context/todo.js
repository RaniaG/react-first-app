import React from 'react';
import TaskCard from './taskCard';
import { Listing } from '../../shared/listing/list';
import { Row, Col, Container } from '../../../bootstrap-imports';
import { TextBox } from '../../shared/textbox/textbox';
import { myContext } from '../../../store';
export class TodoListContext extends React.Component {
    constructor(props) {
        super(props);
        this.addNew = this.addNew.bind(this);
    }
    addNew(addItemFunc) {
        return (val) => {
            if (val === '') return;
            addItemFunc(val);
        }
    }
    render() {
        return (
            <myContext.Consumer>
                {value =>
                    (
                        < Container >
                            <Row >
                                <Col md={4}>
                                    <h2>Todo</h2>
                                    <TextBox submit={this.addNew(value.addItem)} placeholder="Add new Item" />
                                    <Listing list={value.getDoing().filter((el) => !(el.done || el.deleted))}><TaskCard status={0} /></Listing>
                                </Col>
                                <Col md={4}>
                                    <h2>Done</h2>
                                    <Listing list={value.getDone().filter((el) => el.done && !el.deleted)}><TaskCard status={1} /></Listing>
                                </Col>
                                <Col md={4}>
                                    <h2>Deleted</h2>
                                    <Listing list={value.getDeleted().filter((el) => el.deleted)}><TaskCard status={2} /></Listing>
                                </Col>
                            </Row>
                        </Container>)

                }
            </myContext.Consumer>
        )
    }

}
