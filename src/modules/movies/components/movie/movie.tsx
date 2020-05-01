import React from 'react';
import styles from './movie.module.scss';
import { Movie } from '../../movie.model';


export const MovieComponent = ({title, description, director, year, imgUrl, rating, id}: Movie) => {
	return (
		<div className={styles.container}>
			<img src={imgUrl} alt={'film'}/>
			<h2><strong>{title}</strong></h2>
			<p><strong>Director:</strong> {director}</p>
			<p><strong>Summary:</strong> {description}</p>
			<p><strong>Release:</strong> {year}</p>
		</div>
	);
};