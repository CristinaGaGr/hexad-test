import React from "react";
import { moviesReducer, MoviesState } from './movies.reducer';
import { getMoviesResponse, random, rateMovieResponse } from './movies.actions';
import { movies } from '../../../api/movies';

const initialState: MoviesState = {
	movies: []
};

describe('movies reducer', () => {

	describe('GET_MOVIES_RESPONSE', () => {
		it('should set movies', () => {
			const action = getMoviesResponse(movies);
			const result = moviesReducer(initialState, action);

			expect(result.movies).toEqual(movies);
		});
	});

	describe('random rating and update', () => {

		let state: MoviesState;

		beforeEach(() => {
			state = {...initialState, movies};
		});

		describe('RATE_MOVIE_RESPONSE', () => {
			it('should update movie rating', () => {
				const newRating = 3;
				const movieUpdated = movies[1];
				movieUpdated.rating = newRating;

				const action = rateMovieResponse(movieUpdated);
				const result = moviesReducer(state, action);

				expect(result.movies[0]).toEqual(movieUpdated);
				expect(result.movies[0].rating).toEqual(newRating);
			});
		});

		describe('INIT_RANDOM', () => {
			it('should set a random rating to movies from 1-5', () => {
				const action = random();
				const result = moviesReducer(state, action);

				result.movies.forEach((e) => {
					expect(e.rating).toBeGreaterThanOrEqual(1);
					expect(e.rating).toBeLessThanOrEqual(5);
				});

				expect(result.movies[0].rating).toBeGreaterThanOrEqual(result.movies[result.movies.length - 1].rating);
			});
		});
	});



});