import React from 'react';
import { Row, Col, Container, ListGroup, Table, Card, Badge } from '../../bootstrap-imports';
import './style.scss';
import { LoadingPage } from '../shared/loading/page';
import { Listing } from '../shared/list';
import { PostCard } from '../posts/card';
import { AddPost } from '../posts/add';

export class UserProfile extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            tabIndex: 0, //posts
            userData: null,
            userPosts: null
        }

    }
    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(json => this.setState({ userData: json }));
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${this.props.match.params.id}`)
            .then(response => response.json())
            .then(json => {
                this.setState({ userPosts: json });
            });
    }
    switchTab(index) {

        return () => {
            this.setState({ tabIndex: index });
        }
    }
    render() {
        return (
            this.state.userData && this.state.userPosts ?
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="profile-cover">Cover</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <Row>
                                <Col md={3}>
                                    <div className="profile-pic"></div>
                                </Col>
                                <Col md={3}>
                                    <div className="user__name">
                                        {this.state.userData.username}</div>
                                    <div className="user__email d-flex align-items-center">
                                        <a href="#">{this.state.userData.website}</a>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row >
                        <Col>
                            <div className="profile-body">
                                <Row className="justify-content-between">
                                    <Col md={3}>
                                        <ListGroup >
                                            <ListGroup.Item className={this.state.tabIndex === 0 && 'active'} onClick={this.switchTab(0)} >
                                                Posts
                                            </ListGroup.Item>
                                            <ListGroup.Item className={this.state.tabIndex === 1 && 'active'} onClick={this.switchTab(1)}>
                                                About
                                            </ListGroup.Item>
                                            <ListGroup.Item className={this.state.tabIndex === 2 && 'active'} onClick={this.switchTab(2)}>
                                                Company
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Col>
                                    <Col md={8}>
                                        {this.state.tabIndex === 0 &&
                                            <>
                                                <AddPost userId={this.props.match.params.id} />
                                                <Listing list={this.state.userPosts}><PostCard /></Listing>
                                            </>
                                        }
                                        {this.state.tabIndex === 1 &&
                                            <Row>
                                                <Col md={12}>
                                                    <Table >
                                                        <thead className="thead-dark">
                                                            <tr>
                                                                <th colSpan={2}>Personal info</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th>Name</th>
                                                                <td>{this.state.userData.name}</td>
                                                            </tr>
                                                            <tr>
                                                                <th >Email</th>
                                                                <td>{this.state.userData.email}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Website</th>
                                                                <td>{this.state.userData.website}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Phone</th>
                                                                <td>{this.state.userData.phone}</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </Col>
                                                <Col md={12}>
                                                    <Table >
                                                        <thead className="thead-dark">
                                                            <tr>
                                                                <th colSpan={2}>Address</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th>Street</th>
                                                                <td>{this.state.userData.address.street}</td>
                                                            </tr>
                                                            <tr>
                                                                <th >City</th>
                                                                <td>{this.state.userData.address.city}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Suite</th>
                                                                <td>{this.state.userData.address.suite}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Zip Code</th>
                                                                <td>{this.state.userData.address.zipcode}</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </Col>

                                            </Row>
                                        }
                                        {this.state.tabIndex === 2 &&
                                            <Row>
                                                <Col md={12}>
                                                    <Card>
                                                        <Card.Body>
                                                            <Card.Title>{this.state.userData.company.name}</Card.Title>
                                                            <Card.Text>
                                                                {this.state.userData.company.catchPhrase}
                                                            </Card.Text>
                                                            {
                                                                this.state.userData.company.bs.split(' ').map(elm => <Badge variant="primary">{elm}</Badge>)
                                                            }

                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            </Row>
                                        }
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
                : <LoadingPage />
        )
    }

}