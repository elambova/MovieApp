var path = require("path");
const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();

//middleware
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(express.static("dist"));

//bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// cors
app.use(cors());

const fetch = require("node-fetch");

app.get("/", function (req, res) {
  // for production
  //   res.sendFile("build/index.html");

  // for development
  res.sendFile(path.resolve("dist/index.html"));
});

app.get("/result", function (req, res) {
  res.redirect("/");
});

app.get("/tv/*", function (req, res) {
  res.redirect("/");
});

app.get("/movie/*", function (req, res) {
  res.redirect("/");
});

app.get("/person/*", function (req, res) {
  res.redirect("/");
});

app.use(function (req, res, next) {
  if (req.originalUrl && req.originalUrl.split("/").pop().includes("favicon")) {
    return res.sendStatus(204);
  }
  return next();
});

// designates what port the app will listen to for incoming requests
let port = process.env.PORT || 5050;

// Spin up th server
app.listen(port, listening);

// Callback function for listen, initialize in console that the server is running and the contents of localhost:8080
function listening() {
  console.log(`Server is running on localhost:${port}`);
}

const key = {
  movieApi: process.env.MOVIE_API_KEY,
};

const apiConfiguration = async () => {
  const config = await fetch(
    `https://api.themoviedb.org/3/configuration?api_key=${key.movieApi}`
  );
  try {
    const configData = await config.json();
    return configData;
  } catch (error) {
    console.error(error);
  }
};

const movieApiMultiSearch = async (name) => {
  const dataName = await fetch(
    `https://api.themoviedb.org/3/search/multi?api_key=${key.movieApi}&query=${name}`
  );
  try {
    const data = await dataName.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const movieApiIdSearch = async (id) => {
  const dataMovie = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${key.movieApi}&language=en-US`
  );
  try {
    const data = await dataMovie.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const tvApiIdSearch = async (id) => {
  const dataMovie = await fetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${key.movieApi}&language=en-US`
  );
  try {
    const data = await dataMovie.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const personApiIdSearch = async (id) => {
  const dataMovie = await fetch(
    `https://api.themoviedb.org/3/person/${id}?api_key=${key.movieApi}&language=en-US`
  );
  try {
    const data = await dataMovie.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const seasonApiSearch = async (tvId, seasonNumber) => {
  const dataMovie = await fetch(
    `https://api.themoviedb.org/3/tv/${tvId}/season/${seasonNumber}?api_key=${key.movieApi}&language=en-US`
  );
  try {
    const data = await dataMovie.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const episodeApiSearch = async (tvId, seasonNumber, episodeNumber) => {
  const dataMovie = await fetch(
    `https://api.themoviedb.org/3/tv/${tvId}/season/${seasonNumber}/episode/${episodeNumber}?api_key=${key.movieApi}&language=en-US`
  );
  try {
    const data = await dataMovie.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

app.get("/getData", async (req, res, next) => {
  try {
    const config = await apiConfiguration();
    const connectApi = await movieApiMultiSearch(req.query.name);

    const imagesUrl = config.images.secure_base_url + "w185";
    const apiData = [...connectApi.results];
    res.send({ imagesUrl, apiData });
  } catch (error) {
    console.log(error);
  }
});

app.get("/getDataMovie", async (req, res, next) => {
  try {
    const config = await apiConfiguration();
    const connectApi = await movieApiIdSearch(req.query.id);
    const imagesUrl = config.images.secure_base_url;
    const apiData = {
      id: connectApi.id,
      original_title: connectApi.original_title,
      overview: connectApi.overview,
      poster_path: connectApi.poster_path,
      production_companies: connectApi.production_companies,
      production_countries: connectApi.production_countries,
      release_date: connectApi.release_date,
      status: connectApi.status,
      title: connectApi.title,
      spoken_languages: connectApi.spoken_languages,
      genres: connectApi.genres,
      homepage: connectApi.homepage,
    };

    res.send({ imagesUrl, apiData });
  } catch (error) {
    console.log(error);
  }
});

app.get("/getDataTv", async (req, res, next) => {
  try {
    const config = await apiConfiguration();
    const connectApi = await tvApiIdSearch(req.query.id);

    const imagesUrl = config.images.secure_base_url;
    const apiData = {
      id: connectApi.id,
      created_by: connectApi.created_by,
      name: connectApi.name,
      genres: connectApi.genres,
      homepage: connectApi.homepage,
      languages: connectApi.languages,
      first_air_date: connectApi.first_air_date,
      last_air_date: connectApi.last_air_date,
      networks: connectApi.networks,
      next_episode_to_air: connectApi.next_episode_to_air,
      number_of_episodes: connectApi.number_of_episodes,
      number_of_seasons: connectApi.number_of_seasons,
      origin_country: connectApi.origin_country,
      overview: connectApi.overview,
      original_name: connectApi.original_name,
      poster_path: connectApi.poster_path,
      production_companies: connectApi.production_companies,
      seasons: connectApi.seasons,
      status: connectApi.status,
    };

    res.send({ imagesUrl, apiData });
  } catch (error) {
    console.log(error);
  }
});

app.get("/getDataPerson", async (req, res, next) => {
  try {
    const config = await apiConfiguration();
    const connectApi = await personApiIdSearch(req.query.id);
    const imagesUrl = config.images.secure_base_url;
    const apiData = {
      id: connectApi.id,
      birthday: connectApi.birthday,
      name: connectApi.name,
      known_for_department: connectApi.known_for_department,
      deathday: connectApi.deathday,
      biography: connectApi.biography,
      place_of_birth: connectApi.place_of_birth,
      profile_path: connectApi.profile_path,
      homepage: connectApi.homepage,
    };

    res.send({ imagesUrl, apiData });
  } catch (error) {
    console.log(error);
  }
});

app.get("/getDataSeason", async (req, res, next) => {
  try {
    const config = await apiConfiguration();
    const connectApi = await seasonApiSearch(
      req.query.tvId,
      req.query.seasonNumber
    );
    const imagesUrl = config.images.secure_base_url;
    const apiData = {
      season_number: connectApi.season_number,
      id: connectApi.id,
      name: connectApi.name,
      poster_path: connectApi.poster_path,
      overview: connectApi.overview,
      air_date: connectApi.air_date,
      episodes: connectApi.episodes, //array
    };

    res.send({ imagesUrl, apiData });
  } catch (error) {
    console.log(error);
  }
});

app.get("/getDataEpisode", async (req, res, next) => {
  try {
    const config = await apiConfiguration();
    const connectApi = await episodeApiSearch(
      req.query.tvId,
      req.query.seasonNumber,
      req.query.episodeNumber
    );
    const imagesUrl = config.images.secure_base_url;
    const apiData = {
      season_number: connectApi.season_number,
      id: connectApi.id,
      name: connectApi.name,
      still_path: connectApi.still_path,
      overview: connectApi.overview,
      air_date: connectApi.air_date,
      episode_number: connectApi.episode_number,
      crew: connectApi.crew, //array
      guest_stars: connectApi.guest_stars, //array
    };

    res.send({ imagesUrl, apiData });
  } catch (error) {
    console.log(error);
  }
});

// export app
module.exports = app;
