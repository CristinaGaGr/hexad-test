import React from 'react';
import { mount, shallow } from 'enzyme';
import { MovieComponent } from './movie';
import { movies } from '../../../../api/movies';
import { Provider } from 'react-redux';
import store from '../../../../store/store';
import { Rating } from '../rating/rating';

const movie = movies[0];

describe('MovieComponent', () => {
	const container = shallow(
		<Provider store={store}>
			<MovieComponent {...movie}/>
		</Provider>
	);

	it('should match the snapshot', () => {
		console.log(container.);
		expect(container.html()).toMatchSnapshot();
	});

	it('should dispatch rate movie request action', () => {
		const spy = jest.spyOn(MovieComponent.prototype, 'rateMovie');
		mount(<MovieComponent {...movie}/>);
		container.find('button').first().simulate('click');

		expect(spy).toHaveBeenCalledWith(1, 1);
	});

});