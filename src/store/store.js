import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import moviesSagas from '../modules/movies/store/movies.saga';
import { moviesReducer } from '../modules/movies/store/movies.reducer';



const reducers  = combineReducers({
	moviesReducer
});

const sagaMiddleware = createSagaMiddleware();

export default createStore(reducers, compose(applyMiddleware(sagaMiddleware)));

function* rootSaga() {
	yield all([
		moviesSagas()
	])
}

sagaMiddleware.run(rootSaga);