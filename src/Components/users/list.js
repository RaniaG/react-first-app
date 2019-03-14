import React from 'react';
import { UserCard } from './card';
import { Listing } from '../shared/list';
import { Row, Container, Col } from '../../bootstrap-imports';



export class UsersList extends React.Component {
    state = {
        list: []
    }
    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(response => response.json())
            .then(json => this.setState({ list: json }));
    }
    render() {
        return (

            <Container>
                <Row className="justify-content-center" >
                    <Col md={3}>
                        <h3>Users</h3>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col md={8}>
                        <Listing list={this.state.list} ><UserCard /></Listing>
                    </Col>
                </Row>
            </Container>
        )
    }
}