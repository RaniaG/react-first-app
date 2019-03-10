import React from 'react';
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card  from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';

export const MovieCard=(props)=>{
    const {movie}=props;
    return (
        <Col md={3}>
            <Card >
                <Card.Img variant="top" src={movie.Poster!=="N/A"?movie.Poster:'https://cdn.dribbble.com/users/74446/screenshots/712054/movie-magazine-video-logo-design.png'} />
                <Card.Body>
                    <Card.Title>{movie.Title}
                    <Badge variant="secondary">{movie.Type}</Badge>
                    </Card.Title>
                    <h6>Year: {movie.Year}</h6>
                </Card.Body>
            </Card>
        </Col>
        
        
    )
}

{/* <div className="col-3"> 
            <div className="card">
                <img src={movie.Poster!=="N/A"?movie.Poster:'https://cdn.dribbble.com/users/74446/screenshots/712054/movie-magazine-video-logo-design.png'} className="card-img-top" alt="..."/> 
                <div className="card-body">
                    <h5 className="card-title">{movie.Title}
                        <span className="badge badge-secondary">{movie.Type}</span>             
                    </h5>
                    <h6>Year: {movie.Year}</h6>
                </div>
            </div>
        </div> */}