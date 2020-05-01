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
		default:
			return state;
	}
};

