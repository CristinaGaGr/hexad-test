import React, { useEffect, useState } from 'react';
import styles from './movies-list.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesRequest, random } from '../../store/movies.actions';
import { State } from '../../../../store/store';
import { MovieComponent } from '../movie/movie';



let timer: any = undefined;

export const MoviesList = () => {
	const dispatch = useDispatch();
	const [isRandom, setIsRandom] = useState(false);
	const movies = useSelector((state: State) => state.moviesReducer.movies);

	useEffect(() => {
		const randomTime = () => {
			const max = 5000;
			const min = 1000;
			const time = Math.floor(Math.random() * (max - min + 1) + min);
			dispatch(random());
			clearInterval(timer);
			timer = setInterval(randomTime, time);
		};

		if (isRandom) {
			timer = setInterval(randomTime, 1000);
		} else {
			clearInterval(timer);
		}
	}, [isRandom]);

	useEffect(() => {
		dispatch(getMoviesRequest());
	}, [dispatch]);

	return (
		<div>
			<h1>MOVIES</h1>
			<button onClick={() => setIsRandom(!isRandom)}>{isRandom ? 'Stop Random' : 'Start Random'}</button>
			{movies.map((e) =>
				<MovieComponent key={e.id}
					   {...e}/>
			)}
		</div>
	)
};