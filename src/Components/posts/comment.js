import React from 'react';
import { Card } from '../../bootstrap-imports';


export const Comment = (props) => {
    const { name, email, body } = props
    return (
        <Card>
            <Card.Body>
                <Card.Title >{name}</Card.Title>
                <Card.Subtitle className="mb-2 text-primary">{email}</Card.Subtitle>
                <Card.Text>
                    {body}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}