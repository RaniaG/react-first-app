import React from 'react';
import { Form, Button, Col, Row, Container } from '../../bootstrap-imports';
import SimpleSchema from 'simpl-schema';


export class AddUser extends React.Component {
    constructor(props) {
        super(props);
        this.inputRefs = {
            name: React.createRef(),
            username: React.createRef(),
            email: React.createRef(),
            website: React.createRef(),
            phone: React.createRef(),
            street: React.createRef(),
            city: React.createRef(),
            suite: React.createRef(),
            zip: React.createRef(),
            companyName: React.createRef(),
            companyCatchphrase: React.createRef(),
            companyBs: React.createRef()
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.validation = new SimpleSchema({
            name: {
                type: String,
                min: 1,
                optional: false
            },
            username: {
                type: String,
                min: 1,
                optional: false
            },
            email: {
                type: String,
                optional: false,
                regEx: SimpleSchema.RegEx.Email
            }
        }).newContext();
    }
    validationLogic() {
        var validationObject = {};
        for (var key in this.inputRefs) {
            validationObject[key] = this.inputRefs[key].current.value
            this.inputRefs[key].current.classList.remove('is-invalid');
        }
        this.validation.validate(validationObject);
        this.validation.validationErrors().forEach((el) => {
            this.inputRefs[el.name].current.classList.add('is-invalid');
        })
    }
    onSubmit(e) {
        e.preventDefault();
        this.validationLogic();
        if (this.validation.validationErrors().length == 0) {
            //create object 
            // var userObj = {}
            // this.inputRefs

            fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'POST',
                body: JSON.stringify(
                    {

                    }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
                .then(response => response.json())
                .then(json => {
                    alert("User was successful with id: " + json.id);
                })
                .catch(() => {
                    alert("unable to create user, try again later");
                });
        } else alert("invalid values");
    }
    render() {
        return (
            <Container>
                <Row className="justify-content-center">
                    <Col md={8}>
                        <Form onSubmit={this.onSubmit}>
                            <h2 className="text-center mb-5">Add new user</h2>

                            <Form.Row>
                                <Form.Group as={Col} >
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" ref={this.inputRefs.name} />
                                </Form.Group>
                                <Form.Group as={Col} >
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" ref={this.inputRefs.username} />
                                </Form.Group>

                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} >
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text" placeholder="email@email.com" ref={this.inputRefs.email} />
                                </Form.Group>
                                <Form.Group as={Col} >
                                    <Form.Label>Website</Form.Label>
                                    <Form.Control type="text" ref={this.inputRefs.website} />
                                </Form.Group>
                                <Form.Group as={Col} >
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="text" ref={this.inputRefs.phone} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Group>
                                <h4 className="text-center">Address</h4>
                                <Form.Row>
                                    <Form.Group as={Col} >
                                        <Form.Label>Street</Form.Label>
                                        <Form.Control ref={this.inputRefs.street} />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} >
                                        <Form.Label>City</Form.Label>
                                        <Form.Control ref={this.inputRefs.city} />
                                    </Form.Group>

                                    <Form.Group as={Col} >
                                        <Form.Label>Suite</Form.Label>
                                        <Form.Control ref={this.inputRefs.suite} />
                                    </Form.Group>

                                    <Form.Group as={Col} >
                                        <Form.Label>Zip</Form.Label>
                                        <Form.Control ref={this.inputRefs.zip} />
                                    </Form.Group>
                                </Form.Row>
                            </Form.Group>

                            <Form.Group >
                                <h4 className="text-center">Company</h4>

                                <Form.Row>
                                    <Form.Group as={Col} >
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control ref={this.inputRefs.companyName} />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>

                                    <Form.Group as={Col} >
                                        <Form.Label>Catch phrase</Form.Label>
                                        <Form.Control ref={this.inputRefs.companyCatchphrase} />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>

                                    <Form.Group as={Col} >
                                        <Form.Label>bs</Form.Label>
                                        <Form.Control ref={this.inputRefs.companyBs} />
                                    </Form.Group>
                                </Form.Row>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}