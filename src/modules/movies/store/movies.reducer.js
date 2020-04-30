import { GET_MOVIES_RESPONSE } from './movies.actions';

const initialState = {
	movies: []
};


export const moviesReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_MOVIES_RESPONSE:
			return {
				...state,
				movies: action.payload
			};
		default:
			return state;
	}
};

