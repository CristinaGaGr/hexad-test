import { Movie } from '../movie.model';
import { Action } from '../../../store/action.model';


export enum MovieActionTypes {
	GET_MOVIES_REQUEST = '[Movies] get movies request',
	GET_MOVIES_RESPONSE = '[Movies] get movies response'
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
