import { movies } from './movies';
import { Movie } from "../modules/movies/movie.model";

export const getMovies = (): Promise<Movie[]> => {
	return new Promise((resolve) => setTimeout(() => resolve(movies), 200));
};

export const rateMovie = (id: number, rating: number) => {
	const movie: any = movies.find((e) => e.id === id);
	movie.rating = rating;
	return new Promise((resolve) => setTimeout(() => resolve(movie), 200));
};