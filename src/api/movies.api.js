import { movies } from './movies';

export const getMovies = () => {
	return new Promise((resolve) => setTimeout(() => resolve(movies), 200));
};