import React from 'react';
import { Card, Container, Col, Row } from '../../bootstrap-imports';
import { Link } from "react-router-dom";



export class PostDetails extends React.Component {

    state = {
        user: null,
        post: null
    }
    componentDidMount() {
        console.log(this.props);
        fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(json => {
                this.setState({ post: json });
                fetch(`https://jsonplaceholder.typicode.com/users/${json.userId}`)
                    .then(response => response.json())
                    .then(json => this.setState({ user: json }));
            });

    }

    render() {

        return (
            this.state.post && this.state.user &&
            <Container>
                <Row>
                    <Col md={8}>
                        <Card>
                            <Card.Header>
                                <h2>{this.state.post.title}</h2>
                                By:
                                <Link to={"/user/" + this.state.user.id}>
                                    {this.state.user.username}
                                </Link>
                            </Card.Header>
                            <Card.Body>
                                <p>{this.state.post.body}</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}
