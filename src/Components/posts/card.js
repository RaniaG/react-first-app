import React from 'react'
import Card from 'react-bootstrap/Card'
import './style.scss';
import { Link } from "react-router-dom";



export class PostCard extends React.Component {

    state = {
        user: null
    }
    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/users/${this.props.userId}`)
            .then(response => response.json())
            .then(json => this.setState({ user: json }));
    }

    render() {
        return (
            this.state.user &&
            < Card >
                <Card.Body>
                    <Card.Title>
                        {this.state.user.username}
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{this.props.title}
                        <Link to={"/post/" + this.props.id}>
                            Read more
                        </Link>
                    </Card.Subtitle>
                </Card.Body>
            </Card >
        )
    }
}