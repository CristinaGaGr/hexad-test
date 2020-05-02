import { MovieActionTypes } from './movies.actions';
import { Action } from '../../../store/action.model';
import { Movie } from '../movie.model';


export type MoviesState = {
	movies: Movie[];
}


const initialState: MoviesState = {
	movies: []
};


export const moviesReducer = (state = initialState, action: Action): MoviesState => {
	switch (action.type) {
		case MovieActionTypes.GET_MOVIES_RESPONSE:
			return {
				...state,
				movies: action.payload
			};
		case MovieActionTypes.RATE_MOVIE_RESPONSE:
			const index = state.movies.findIndex((e) => e.id === action.payload.id);
			const movies = [
				...state.movies.slice(0, index),
				action.payload,
				...state.movies.slice(index + 1)
			].sort((a, b) => b.rating - a.rating);
			return {
				...state,
				movies
			};
		default:
			return state;
	}
};

