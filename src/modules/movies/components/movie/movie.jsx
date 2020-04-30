import React from 'react';
import styles from './movie.scss';


export const Movie = ({title, description, director, year, imgUrl, rating, id}) => {
	return (
		<div>{title}</div>
	)
};