import React from 'react';

export class TextBox extends React.Component {


    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            data: this.props.value || ''
        }
    }
    handleInput(e) {
        // console.log(window)
        this.setState({ data: e.target.value });
    }
    onSubmit(e) {
        e.preventDefault();
        this.setState({ data: '' });
        this.props.submit(this.state.data);
    }

    render() {
        const { placeholder } = this.props;
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" onChange={this.handleInput} value={this.state.data} className="task-card__title" placeholder={placeholder} />
            </form>
        )
    }

}