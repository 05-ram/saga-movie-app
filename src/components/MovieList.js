import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const MovieList = () => {
    const movieList = useSelector((state) => state.movie.movieList);

    if (!movieList || !movieList.Search) {
        return null;
    }

    return (
        <div className='d-grid gap-3 grid-container container'>
            {movieList.Search.map((item, index) => (
                <div className="card-item" key={index}>
                    <Link to={`/movie/${item.imdbID}`}>
                        <div className="card-inner">
                            <div className="card-top">
                                <img src={item.Poster} alt={item.Title} />
                            </div>
                            <div className="card-bottom text-center">
                                <div className="card-info">
                                    <a>{item.Title}</a>
                                    <p>{item.Year}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default MovieList;
