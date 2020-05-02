import { takeLatest, call, put } from 'redux-saga/effects';
import { getMovies, rateMovie } from '../../../api/movies.api';
import { getMoviesResponse, MovieActionTypes, rateMovieResponse } from './movies.actions';
import { Action } from '../../../store/action.model';

function* getMoviesEffect() {
	try {
		const movies = yield call(getMovies);
		yield put(getMoviesResponse(movies));
	} catch (e) {
		console.error(e);
	}
}


function* rateMovieEffect(action: Action) {
	try {
		const {id, rating} = action.payload;
		const movie = yield call(rateMovie, id, rating);
		yield put(rateMovieResponse(movie));
	} catch (e) {
		console.error(e);
	}
}


function* moviesSagas() {
	yield takeLatest(MovieActionTypes.GET_MOVIES_REQUEST, getMoviesEffect);
	yield takeLatest(MovieActionTypes.RATE_MOVIE_REQUEST, rateMovieEffect);
}


export default moviesSagas;

