import React from 'react';
import { Row, Container, Col } from '../../bootstrap-imports';



export class Listing extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            loadedComponents: 0
        }
    }


    render() {
        // debugger;
        const { list } = this.props;
        const listItemsWithProps = list.map((elm) => React.cloneElement(this.props.children, { ...elm }));

        return (
            <Container>
                <Row >
                    {
                        listItemsWithProps.map((elm) => <Col md={12} key={elm.id}>{elm}</Col>)
                    }
                </Row>
            </Container>
        );
    }
}




