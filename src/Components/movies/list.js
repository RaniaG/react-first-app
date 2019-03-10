import React, {Component} from 'react';
import { MovieCard } from "./card";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


export class MovieList extends Component {
    
    render() {
        const {moviesList}=this.props;
        return (
          <Container>
            <Row >
            { moviesList.map(
                (item)=><MovieCard key={item.imdbID} movie={item} />
              )
            }
            </Row>
          </Container>
        );
      }
} 