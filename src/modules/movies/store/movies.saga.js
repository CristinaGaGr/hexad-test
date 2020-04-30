import { takeLatest, call, put } from 'redux-saga/effects';
import { getMovies } from '../../../api/movies.api';
import { GET_MOVIES_REQUEST, getMoviesResponse } from './movies.actions';

function* getMoviesEffect() {
	try {
		const movies = yield call(getMovies);
		yield put(getMoviesResponse(movies));
	} catch (e) {
		console.error(e);
	}
}



function* moviesSagas() {
	yield takeLatest(GET_MOVIES_REQUEST, getMoviesEffect);
}


export default moviesSagas;

