import { Movie } from '../movie.model';
import { Action } from '../../../store/action.model';


export enum MovieActionTypes {
	GET_MOVIES_REQUEST = '[Movies] get movies request',
	GET_MOVIES_RESPONSE = '[Movies] get movies response',
	RATE_MOVIE_REQUEST = '[Movie] rate movie request',
	RATE_MOVIE_RESPONSE = '[Movie] rate movie response',
	INIT_RANDOM = '[Movie] init random'
}

export const getMoviesRequest = (): Action => {
	return {
		type: MovieActionTypes.GET_MOVIES_REQUEST
	};
};


export const getMoviesResponse = (movies: Movie[]): Action => {
	return {
		type: MovieActionTypes.GET_MOVIES_RESPONSE,
		payload: movies
	};
};


export const rateMovieRequest = (id: number, rating: number): Action => {
	return {
		type: MovieActionTypes.RATE_MOVIE_REQUEST,
		payload: {id, rating}
	};
};


export const rateMovieResponse = (movie: Movie): Action => {
	return {
		type: MovieActionTypes.RATE_MOVIE_RESPONSE,
		payload: movie
	};
};


export const random = (): Action => {
	return  {
		type: MovieActionTypes.INIT_RANDOM
	}
};