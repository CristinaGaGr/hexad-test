import React, { useState } from 'react';
import styles from './movie.module.scss';
import { Movie } from '../../movie.model';
import { useDispatch } from 'react-redux';
import { rateMovieRequest } from '../../store/movies.actions';


export const MovieComponent = ({title, description, director, year, imgUrl, rating, id}: Movie) => {
	const dispatch = useDispatch();
	const rateMovie = (newValue: number) => {
		console.log(id);
		dispatch(rateMovieRequest(id, newValue));
	};

	return (
		<div className={styles.container}>
			<img src={imgUrl} alt={'film'}/>
			<h2><strong>{title}</strong></h2>
			<p><strong>Director:</strong> {director}</p>
			<p><strong>Summary:</strong> {description}</p>
			<p><strong>Release:</strong> {year}</p>
			<p><strong>Rating:</strong> {rating}</p>
			<div>
				<button onClick={() => rateMovie(1)}>1</button>
				<button onClick={() => rateMovie(2)}>2</button>
				<button onClick={() => rateMovie(3)}>3</button>
				<button onClick={() => rateMovie(4)}>4</button>
				<button onClick={() => rateMovie(5)}>5</button>
			</div>
		</div>
	);
};