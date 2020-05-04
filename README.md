# MY FAV MOVIES!
![cinema](https://media.giphy.com/media/aPUWIkCcerreE/giphy.gif)


## MY FAV MOVIES 

Desktop application.
It will display my 15 favorite movies.
User can rate each movie from 1 to 5 stars OR they can press START RANDOM button to randomly rate the movies at random times. 
Press STOP RANDOM for stopping the rating.
Once the movies are rated the list sort itself from highest to lowest rated movie.

This project was initialized with [Create React App](https://github.com/facebook/create-react-app).

## BUILT WITH 🛠️:wrench:

- React (Hooks)
- Redux
- Redux Saga
- Typescript


## TESTED WITH :memo:

- Enzyme (Jest)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />


### `Files organization`


    |---hexad-test
        |---public
            |---assets
                   |---images
        |---src
            |---api
            |---modules
                |---movies
                    |---components
                        |---movie
                        |---movies-list
                        |---rating
                    |---store
        |---store
        |---App

### `Movie model`

export type Movie = {

    id: number;
    title: string;
    description: string;
    director: string;
    year: number;
    imgUrl: string;
    rating: number;
}





:computer: with :heart: by Cristina Garcia Grillo :pray: