import React from 'react';
import { Row, Container, Col } from '../../../bootstrap-imports';



export class Listing extends React.Component {


    render() {
        // debugger;
        const { list } = this.props;
        const listItemsWithProps = list.map((elm) => <Col md={12} key={elm.id}>{React.cloneElement(this.props.children, { ...elm })}</Col>);

        return (
            // <Container>
            <Row >
                {
                    listItemsWithProps
                }
            </Row>
            // </Container>
        );
    }
}




