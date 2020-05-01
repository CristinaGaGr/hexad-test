import { movies } from './movies';
import {Movie} from "../modules/movies/movie.model";

export const getMovies = (): Promise<Movie[]> => {
	return new Promise((resolve) => setTimeout(() => resolve(movies), 200));
};