import React from 'react';
import { Card, Button } from '../../bootstrap-imports';
import { TextBox } from '../shared/textbox/textbox';
import { connect } from 'react-redux';
import { TodoActions } from '../../Actions/todo';

import './style.scss';


class TaskCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            edit: false,
        }
        this.changeView = this.changeView.bind(this);
        this.changeStatus = this.changeStatus.bind(this);
        this.deleteRestore = this.deleteRestore.bind(this);
        this.editItem = this.editItem.bind(this);
    }
    changeView() {
        this.setState({ edit: !this.state.edit });
    }
    changeStatus() {
        this.props.dispatch(TodoActions.toggleDone(this.props.id));
    }
    deleteRestore() {
        this.props.dispatch(TodoActions.toggleDelete(this.props.id))
    }
    editItem(val) {
        this.changeView();
        this.props.dispatch(TodoActions.editItem(this.props.id, val));
    }

    render() {
        const { status, data, done } = this.props;
        // status 0: view, 1: disabled , 2:del
        return (
            < Card >
                <Card.Body>
                    <div className={`task-card__body ${+ status === 1 && 'checked'}`} >
                        {
                            status !== 2 &&
                            <input type="checkbox" name="" id="" checked={done} onChange={this.changeStatus} />
                        }
                        {this.state.edit && status !== 2 ?
                            <TextBox submit={this.editItem} value={data} /> :
                            <span className="task-card__title" onDoubleClick={this.changeView}>{data}</span>
                        }
                        {
                            <Button variant="light" onClick={this.deleteRestore}>{status === 2 ? 'Restore' : 'X'}</Button>
                        }
                    </div>
                </Card.Body>
            </Card >
        )
    }
}

export default connect()(TaskCard);