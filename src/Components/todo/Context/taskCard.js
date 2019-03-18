import React from 'react';
import { Card, Button } from '../../../bootstrap-imports';
import { TextBox } from '../../shared/textbox/textbox';
import { TodoActions } from '../../../Actions/todo';
import { myContext } from '../../../store';
import '../style.scss';
export default class TaskCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            edit: false,
        }
        this.changeView = this.changeView.bind(this);
        this.changeStatus = this.changeStatus.bind(this);
        this.toggleDelete = this.toggleDelete.bind(this);
        this.editItem = this.editItem.bind(this);
    }
    changeView() {
        this.setState({ edit: !this.state.edit });
    }
    changeStatus() {
        this.context.toggleDone(this.props.id);
    }
    toggleDelete() {
        this.context.toggleDelete(this.props.id);
    }
    editItem(val) {
        this.changeView();
        this.context.editItem(this.props.id, val);
    }

    render() {
        const { status, data, done } = this.props;

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
                            <Button variant="light" onClick={this.toggleDelete}>{status === 2 ? 'Restore' : 'X'}</Button>
                        }
                    </div>
                </Card.Body>
            </Card >
        )
    }
}
TaskCard.contextType = myContext;