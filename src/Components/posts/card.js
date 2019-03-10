import React from 'react'
import Card from 'react-bootstrap/Card'


export const PostCard = (props) => {
    const { title, body } = props;
    retrun(
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                <Card.Text>
                    {body}
                </Card.Text>
                <Card.Link >View</Card.Link>
            </Card.Body>
        </Card>
    )

} 