import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { MoviesList } from './modules/movies/components/movies-list/movies-list';

export const App = () => {
	return (
		<Switch>
			<Route exact path={'/'} render={() => <Redirect to={'/movies'}/>}/>
			<Route exact path={'/movies'} render={() => <MoviesList/>}/>
		</Switch>
	);
};


