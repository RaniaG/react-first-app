import React from 'react';
import { Form, Button } from '../../bootstrap-imports';

export class AddPost extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        }
        this.inputHandler = this.inputHandler.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    inputHandler(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    onSubmit(e) {
        e.preventDefault();
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(
                {
                    ...this.state,
                    userId: this.props.userId
                }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => {
                alert("Post was successful with id: " + json.id);
                this.setState({ title: '', body: '' });
            })
            .catch(() => {
                alert("unable to post, try again later");
                this.setState({ title: '', body: '' });
            });

    }
    render() {
        return (
            <Form className=" m-3" onSubmit={this.onSubmit}>
                <Form.Group className="d-flex flex-column justify-content-end">
                    <Form.Control type="text" placeholder="Post something..." onChange={this.inputHandler} name="title" value={this.state.title} />
                    <Form.Control as="textarea" rows="3" placeholder="Post body" onChange={this.inputHandler} name="body" value={this.state.body} />
                </Form.Group>
                <Button type="submit">Post</Button>
            </Form>
        )
    }
}