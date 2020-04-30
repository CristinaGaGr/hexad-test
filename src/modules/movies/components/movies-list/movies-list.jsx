import React, { useEffect } from 'react';
import styles from './movies-list.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Movie } from '../movie/movie';
import { getMoviesRequest } from '../../store/movies.actions';

export const MoviesList = () => {
	const dispatch = useDispatch();
	const movies = useSelector((state) => state.moviesReducer.movies);

	useEffect(() => {
		dispatch(getMoviesRequest());
	}, [dispatch]);

	return (
		<div>
			<h1>MOVIES</h1>
			{movies.map((e) =>
				<Movie key={e.id}
					   {...e}/>
			)}
		</div>
	)
};