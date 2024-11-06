import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../features/movieSlice';

const Search = () => {
    const [name, setName] = useState('spider');

    const movieList = useSelector((state) => state.movie.movieList);
    const error = movieList.Error;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovies(name))
    }, [name])

    return (
        <div>
            <h2 className='text-center mb-5'>Movie Search App</h2>
            <Form onSubmit={(e) => e.preventDefault()} className='search-form'>
                <Form.Group className="my-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="type here to search..." value={name} onChange={(e) => setName(e.target.value)} />
                </Form.Group>
            </Form>
            {
                error && <p className='text-danger text-center err-txt'>{error}</p>
            }
        </div>
    )
}

export default Search;