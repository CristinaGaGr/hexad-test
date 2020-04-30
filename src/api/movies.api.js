import { movies } from './movies';

export const getMovies = () => {
	return new Promise((resolve) => setTimeout(() => {return movies}, 200));
};