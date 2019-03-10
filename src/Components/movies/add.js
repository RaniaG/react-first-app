import React from 'react';
import './add.css';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



export class AddMovieForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                Title: '',
                Year: null,
                Type: 'movie',
                Poster: '',
            },
        }
        this.add = this.add.bind(this);
        this.inputListener = this.inputListener.bind(this);
    }
    inputListener(formControlName) {
        const { formData } = this.state;
        return (e) => {
            this.setState({ formData: { ...formData, [formControlName]: e.target.value } });
        }
    }
    add() {
        this.props.addFunction(this.state.formData);
    }
    render() {
        return (
            <div className="my-modal-container" >
                <Modal.Dialog >
                    <Modal.Header >
                        <Modal.Title>Add New Movie/Series</Modal.Title>
                    </Modal.Header>

                    <Form>
                        <Modal.Body >
                            <Form.Group >
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" onChange={this.inputListener('Title')} />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Type</Form.Label>
                                <Form.Control as="select" onChange={this.inputListener('Type')}>
                                    <option value='movie'>Movie</option>
                                    <option value='series'>Series</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Year</Form.Label>
                                <Form.Control type="text" onChange={this.inputListener('Year')} />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Poster URL</Form.Label>
                                <Form.Control type="text" onChange={this.inputListener('Poster')} />
                            </Form.Group>

                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.props.closeFunction}>Close</Button>
                            <Button variant="primary" onClick={this.add}>Add movie</Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Dialog>
            </div>

        );
    }
}


