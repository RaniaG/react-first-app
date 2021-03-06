import React from 'react';
import { PostCard } from './card';
import { Listing } from '../shared/listing/list';
import { Row, Container, Col } from '../../bootstrap-imports';
import { LoadingPage } from '../shared/loading/page';



export class PostsList extends React.Component {
    state = {
        list: []
    }
    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(response => response.json())
            .then(json => this.setState({ list: json }));
    }
    render() {
        return (
            this.state.list.length > 0 ?
                <Container>
                    <Row className="justify-content-center" >
                        <Col md={3}>
                            <h3>Blog</h3>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">

                        <Col md={8}>
                            <Listing list={this.state.list} ><PostCard /></Listing>
                        </Col>
                    </Row>
                </Container>
                : <LoadingPage />
        )
    }
}