import React from 'react';

export class TextBox extends React.Component {


    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.checkKey = this.checkKey.bind(this);
        this.state = {
            data: ''
        }
    }
    handleInput(e) {
        this.setState({ data: e.target.value });
    }
    checkKey(e) {
        if (e.key === 'Enter') {
            this.setState({ data: '' });
            this.props.submit(this.state.data);
        }
    }

    render() {
        const { placeholder, value } = this.props;
        return (
            <input type="text" value={value || this.state.data} className="task-card__title" onChange={this.handleInput} onKeyDown={this.checkKey} placeholder={placeholder} />

        )
    }

}