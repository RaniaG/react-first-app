import React from 'react';
import { Form, Button } from '../../bootstrap-imports';
import SimpleSchema from 'simpl-schema';

export class AddPost extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            input: {
                title: '',
                body: ''
            },
            error: {
                title: false,
                body: false
            }

        }
        this.inputHandler = this.inputHandler.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.validation = new SimpleSchema({
            title: {
                type: String,
                min: 5,
                max: 25
            }
            , body: {
                type: String,
                min: 5,
                max: 150
            }
        }).newContext();

    }


    inputHandler(event) {
        this.validation.validate( //to validate all inputs each time
            { ...this.state.input, [event.target.name]: event.target.value }
        );
        //to reset the input validation state and capture and valid after invalid
        var temp = { title: false, body: false };
        this.validation.validationErrors().forEach((el) => {
            temp[el.name] = true; //to capture any invalid values
        })
        this.setState({
            input: { ...this.state.input, [event.target.name]: event.target.value },
            error: { ...temp }
        });

    }
    onSubmit(e) {
        e.preventDefault();
        this.validation.validate(
            { ...this.state.input }
        );
        if (this.validation.validationErrors().length == 0) {
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
        } else alert("invalid values");
    }
    render() {
        return (
            <Form className=" m-3" onSubmit={this.onSubmit}>
                <Form.Group className="d-flex flex-column justify-content-end">
                    <Form.Control type="text" placeholder="Post something..." className={this.state.error.title && "is-invalid"} onChange={this.inputHandler} name="title" />
                    <Form.Control as="textarea" rows="3" placeholder="Post body" className={this.state.error.body && "is-invalid"} onChange={this.inputHandler} name="body" />
                </Form.Group>
                <Button type="submit">Post</Button>
            </Form>
        )
    }
}