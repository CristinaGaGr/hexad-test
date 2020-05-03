import React from 'react';
import { mount } from 'enzyme';
import { Rating, Star } from './rating';

describe('Rating', () => {

	let container = mount(
		<Rating onClick={() => {
		}} value={0}/>
	);

	it('should render 5 gray stars', () => {
		const stars = container.find('button');
		stars.forEach((e) => {
			expect(e.prop('data-selected')).toBeFalsy();
		});
		expect(stars).toHaveLength(5);
	});

	it('should render 3 yellow stars', () => {
		container.setProps({value: 3});
		container.update();
		const stars = container.find('button');
		stars.forEach((e, idx) => {
			if (idx < 3) {
				expect(e.prop('data-selected')).toBeTruthy();
			} else {
				expect(e.prop('data-selected')).toBeFalsy();
			}
		});
	});
});