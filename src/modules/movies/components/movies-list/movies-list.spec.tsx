import React from 'react';
import { combineReducers, createStore } from 'redux';
import { moviesReducer } from '../../store/movies.reducer';
import { movies } from '../../../../api/movies';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { MoviesList } from './movies-list';
import { MovieComponent } from '../movie/movie';

describe('MoviesList', () => {
	const initialState = { moviesReducer: {movies: movies} };
	const mockStore = createStore(combineReducers({
		moviesReducer
	}), initialState);

	const container = mount(
		<Provider store={mockStore}>
			<MoviesList/>
		</Provider>
	);

	it('should match the snapshot', () => {
		expect(container.html()).toMatchSnapshot();
	});

	it('should render all movies', () => {
		expect(container.find(MovieComponent)).toHaveLength(movies.length);
	});

});