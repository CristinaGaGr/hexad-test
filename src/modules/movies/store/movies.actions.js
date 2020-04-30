export const GET_MOVIES_REQUEST = '[Movies] get movies request';
export const GET_MOVIES_RESPONSE = '[Movies] get movies response';



export const getMoviesRequest = () => {
	return {
		type: GET_MOVIES_REQUEST
	}
};


export const getMoviesResponse = (movies) => {
	return {
		type: GET_MOVIES_RESPONSE,
		payload: movies
	}
};
