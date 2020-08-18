# Movie App

This app is for user making search for movie from The Movie Database API.

## Introduction

In this app is used:

- HTML
- SASS
- JavaScript
- React
- Webpack
- Express
- Jest

### Getting started

To view the project need to download in .zip format or clone it repository.
The next step is to navigate (in the terminal) to the corresponding directory in which it is located and install depedencies with

```
npm install
```

For the result to be obtained there must be credentials for the APIS used in the project:

- **API_KEY** for [The Movie Database API](https://www.themoviedb.org/settings/api).

They have saved in `.env` file with:

- **MOVIE_API_KEY** for The Movie Database API

The next step is to execute the following commands:

- for development: before we go into development, we need to run production to create the dist folder

```
npm run build
npm run dev
```

- for production:

```
npm run build
```

In a new terminal tab in same directory run server with:

```
npm start
```

### API connection

In `src/ConnectionAPI` folder is `connect.js` file who contain all (six) fetch request to server. They are:

- **getData(name)** - return all data for this parameter
- **getDataMovie(id)** - return data for movie with this id
- **getDataTv(id)** - return data for tv (tv show) with this id
- **getDataPerson(id)** - return data for person with this id
- **getDataSeason(tvId, seasonNumber)** - return data for season from tv (tv shows) with this id and this season number
- **getDataEpisode(tvId, seasonNumber)** - return data for episode from season in tv (tv shows) with this id, season number and episode number

### Server

Server is Express. To connect to API has used `node-fetch` module, who make request to The Movie Database API..

### React

In `src/index.js` is basic React connect main component (in this case is App.js). File contain also `styles` folder with main (`style.scss`) file.
Components folder contain basic files: Header, Footer, Form, NotFound and ResultContainer, and two sub folder: AllResults and SingleResult.
In the subfolders are respectively for:

- AllResults
  - **Movies.js** - return all movies / tv (tv shows) with this name
  - **People.js** - return first person with request name
- SingleResult
  - **Movie.js** - return movie with this concrete id
  - **Person.js** - return person with this concrete id
  - **Tv.js** - return tv with this concrete id
  - **Season.js** - return season with this concrete tv id and season number
  - **Episode.js** - return episode with this concrete tv id, season number and episode number
