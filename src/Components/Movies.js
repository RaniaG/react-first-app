import React from 'react';
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";


export const Movie=(props)=>{
    const {movie}=props;
    return (
        <div className="col-3"> 
            <div className="card">
                { movie.Poster!=="N/A" && <img src={movie.Poster} className="card-img-top" alt="..."/> }
                <div className="card-body">
                    <h5 className="card-title">{movie.Title}
                    <span className="badge badge-secondary">{movie.Type}</span>
                    </h5>
                    <h6>Year: {movie.Year}
                    </h6>
                </div>
            </div>
        </div>
        
    )
}