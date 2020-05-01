import React, { useEffect } from 'react';
import styles from './movies-list.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesRequest } from '../../store/movies.actions';
import { State } from '../../../../store/store';
import { MovieComponent } from '../movie/movie';

export const MoviesList = () => {
	const dispatch = useDispatch();
	const movies = useSelector((state: State) => state.moviesReducer.movies);

	useEffect(() => {
		dispatch(getMoviesRequest());
	}, [dispatch]);

	return (
		<div>
			<h1>MOVIES</h1>
			{movies.map((e) =>
				<MovieComponent key={e.id}
					   {...e}/>
			)}
		</div>
	)
};