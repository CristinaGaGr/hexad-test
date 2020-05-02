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
			let movies = [
				...state.movies.slice(0, index),
				action.payload,
				...state.movies.slice(index + 1)
			];
			movies = sortArray(movies);
			return {
				...state,
				movies
			};
		case MovieActionTypes.INIT_RANDOM:
			let newMovies = state.movies.map((e: Movie) => {
				e.rating = Math.ceil(Math.random() * 5);
				return e;
			});
			newMovies = sortArray(newMovies);

			return  {
				...state,
				movies: newMovies
			};
		default:
			return state;
	}
};



const sortArray = (arr: Movie[]): Movie[] => {
	return arr.sort((a, b) => b.rating - a.rating);
};