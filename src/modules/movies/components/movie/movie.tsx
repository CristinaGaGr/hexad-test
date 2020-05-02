import React from 'react';
import styles from './movie.module.scss';
import { Movie } from '../../movie.model';
import { useDispatch } from 'react-redux';
import { rateMovieRequest } from '../../store/movies.actions';
import { Rating } from '../rating/rating';


export const MovieComponent = ({title, description, director, year, imgUrl, rating, id}: Movie) => {
	const dispatch = useDispatch();

	const rateMovie = (newValue: number) => {
		dispatch(rateMovieRequest(id, newValue));
	};

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<img src={imgUrl} alt={'film'}/>
				<div className={styles.info}>
					<h2><strong>{title}</strong></h2>
					<p><strong>{year} - Director:</strong> {director}</p>
					<p><strong>Summary:</strong> {description}</p>
				</div>
			</div>
			<div className={styles.ratingContainer}>
				<Rating onClick={rateMovie}
						value={rating}
						className={styles.stars}/>
				<div>{rating}</div>
			</div>
		</div>
	);
};