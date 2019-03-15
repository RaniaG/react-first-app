import React from 'react';
import { Form, Button, Col, Row, Container } from '../../bootstrap-imports';
import SimpleSchema from 'simpl-schema';


export class AddUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: {
                name: '',
                username: '',
                email: '',
                address: {
                    street: '',
                    suite: '',
                    city: '',
                    zipcode: '',

                },
                phone: '',
                website: '',
                company: {
                    name: '',
                    catchPhrase: '',
                    bs: ''
                }
            },
            errors: []
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.validation = new SimpleSchema({
            name: {
                type: String,
                min: 2,
                max: 20,
                optional: false
            },
            username: {
                type: String,
                min: 2,
                max: 20,
                optional: false
            },
            email: {
                type: String,
                regEx: SimpleSchema.RegEx.Email,
                optional: false
            },
            street: {
                type: String,
                max: 50,
            },
            city: {
                type: String,
                max: 10,
            },
            suite: {
                type: String,
                max: 50,
            },
            zipcode: {
                type: Number,
                regEx: SimpleSchema.RegEx.ZipCode,
            },
            phone: {
                regEx: SimpleSchema.RegEx.Phone,
                type: Number,
                optional: false
            },
            website: String,
            companyName: String,
            companyCatchPhrase: String,
            companyBs: String
        }).newContext();
    }
    inputChange(name) {
        return (e) => {
            this.setState({ userData: { ...this.state.userData, [name]: e.target.value } })
        }
    }
    validationLogic() {
        this.validation.validate(
            {
                name: this.state.userData.name,
                username: this.state.userData.username,
                email: this.state.userData.email,
                website: this.state.userData.website,
                phone: +(this.state.userData.phone),
                street: this.state.userData.address.street,
                city: this.state.userData.address.city,
                suite: this.state.userData.address.suite,
                zipcode: +(this.state.userData.address.zipcode),
                companyName: this.state.userData.company.name,
                companyCatchPhrase: this.state.userData.company.catchPhrase,
                companyBs: this.state.userData.company.bs
            }
        );
        this.setState({ errors: this.validation.validationErrors() });

    }
    onSubmit(e) {
        e.preventDefault();
        this.validationLogic();
        if (this.validation.validationErrors().length == 0) {
            fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'POST',
                body: JSON.stringify(this.state.userData),
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
        } else {
            alert("invalid values");
            this.props.history.push("/");
        }
    }
    render() {
        return (
            <Container>
                <Row className="justify-content-center">
                    <Col md={8}>
                        <Form onSubmit={this.onSubmit}>
                            <h2 className="text-center mb-5">Add new user</h2>
                            {
                                this.state.errors.map((el) => <div style={{ color: 'red' }} key={el.name}>Error in {el.name}</div>)
                            }
                            <Form.Row>
                                <Form.Group as={Col} >
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" onChange={this.inputChange('name')} />
                                </Form.Group>
                                <Form.Group as={Col} >
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" onChange={this.inputChange('username')} />
                                </Form.Group>

                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} >
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text" placeholder="email@email.com" onChange={this.inputChange('email')} />
                                </Form.Group>
                                <Form.Group as={Col} >
                                    <Form.Label>Website</Form.Label>
                                    <Form.Control type="text" onChange={this.inputChange('website')} />
                                </Form.Group>
                                <Form.Group as={Col} >
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="text" onChange={this.inputChange('phone')} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Group>
                                <h4 className="text-center">Address</h4>
                                <Form.Row>
                                    <Form.Group as={Col} >
                                        <Form.Label>Street</Form.Label>
                                        <Form.Control onChange={this.inputChange('address.street')} />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} >
                                        <Form.Label>City</Form.Label>
                                        <Form.Control onChange={this.inputChange('address.suite')} />
                                    </Form.Group>

                                    <Form.Group as={Col} >
                                        <Form.Label>Suite</Form.Label>
                                        <Form.Control onChange={this.inputChange('address.city')} />
                                    </Form.Group>

                                    <Form.Group as={Col} >
                                        <Form.Label>Zip</Form.Label>
                                        <Form.Control onChange={this.inputChange('address.zipcode')} />
                                    </Form.Group>
                                </Form.Row>
                            </Form.Group>

                            <Form.Group >
                                <h4 className="text-center">Company</h4>

                                <Form.Row>
                                    <Form.Group as={Col} >
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control onChange={this.inputChange('company.name')} />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>

                                    <Form.Group as={Col} >
                                        <Form.Label>Catch phrase</Form.Label>
                                        <Form.Control onChange={this.inputChange('company.catchPhrase')} />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>

                                    <Form.Group as={Col} >
                                        <Form.Label>bs</Form.Label>
                                        <Form.Control onChange={this.inputChange('company.bs')} />
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