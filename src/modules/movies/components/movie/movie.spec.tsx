import React from 'react';
import { mount } from 'enzyme';
import { MovieComponent } from './movie';
import { movies } from '../../../../api/movies';
import { MovieActionTypes } from '../../store/movies.actions';


const movie = movies[0];

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
	useDispatch: () => mockDispatch,
}));

describe('MovieComponent', () => {
	const container = mount(
			<MovieComponent {...movie} />
	);

	it('should match the snapshot', () => {
		expect(container.html()).toMatchSnapshot();
	});

	it('should render expected text', () => {
		expect(container.find('h2').text()).toEqual(movies[0].title);
	});

	it("should dispatch rate movie request action", () => {
		const expectedCall = {
			payload: { id: 1, rating: 1 },
			type: MovieActionTypes.RATE_MOVIE_REQUEST,
		};
		const button = container.find("button").first();
		button.simulate("click");
		expect(mockDispatch).toHaveBeenCalledWith(expectedCall);
	});
});