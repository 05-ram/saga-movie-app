import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getSelectedmovie } from '../features/movieSlice';
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";

const Movie = () => {
    const dispatch = useDispatch();
    const movie = useSelector((state) => state.movie.movie)
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            dispatch(getSelectedmovie(id))
        }
    }, [id])
    return (
        <div className='d-flex gap-3 container p-3'>
            {movie && (
                <>
                    <img src={movie.Poster} alt="poster" className="img-fluid" />
                    <div className='right-sec'>
                        <span className='fw-medium title fs-3'>{movie.Title}</span>
                        <span className='d-block fs-5'>Year: {movie.Year}</span>
                        <p className='my-2'>{movie.Plot}</p>
                        <span className='d-block mb-3'>Director: {movie.Director}</span>
                        <Button onClick={() => navigate('/')}>Go Back</Button>
                    </div>
                </>
            )}
        </div>
    )
}

export default Movie