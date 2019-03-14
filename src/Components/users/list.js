import React from 'react';
import { UserCard } from './card';
import { Listing } from '../shared/list';
import { Row, Container, Col, Button } from '../../bootstrap-imports';
import { Link } from "react-router-dom";




export class UsersList extends React.Component {
    state = {
        list: [],
        showAddForm: false
    }
    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(response => response.json())
            .then(json => this.setState({ list: json }));
    }
    showAddForm() {
        this.setState({ showAddForm: true });
    }
    render() {
        return (

            <Container>
                <Row className="justify-content-center" >
                    <Col md={3}>
                        <h3 style={{ textAlign: 'center' }}>Users</h3>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col md={8}>
                        <Row className="justify-content-end p-4">
                            <Col md={3} className="d-flex justify-content-end">
                                <Link to="/user/add">
                                    <Button variant="primary">+</Button>
                                </Link>
                            </Col>
                        </Row>
                        <Listing list={this.state.list} ><UserCard /></Listing>
                    </Col>
                </Row>
            </Container >
        )
    }
}