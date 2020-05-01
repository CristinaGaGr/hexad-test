import React, { useState } from 'react';
import styles from './movie.module.scss';
import { Movie } from '../../movie.model';
import { Rating } from '@material-ui/lab';


export const MovieComponent = ({title, description, director, year, imgUrl, rating, id}: Movie) => {
	const [stars, setStars] = useState(rating);

	return (
		<div className={styles.container}>
			<img src={imgUrl} alt={'film'}/>
			<h2><strong>{title}</strong></h2>
			<p><strong>Director:</strong> {director}</p>
			<p><strong>Summary:</strong> {description}</p>
			<p><strong>Release:</strong> {year}</p>
			<Rating
				name="simple-controlled"
				value={stars}
				onChange={(event: any, newValue: any) => {
					setStars(newValue);
				}}
			/>
		</div>
	);
};