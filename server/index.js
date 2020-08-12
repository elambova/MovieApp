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
  res.sendFile(path.resolve("public/index.html"));
});

// designates what port the app will listen to for incoming requests
let port = process.env.PORT || 8080;

// Spin up th server
app.listen(port, listening);

// Callback function for listen, initialize in console that the server is running and the contents of localhost:8080
function listening() {
  console.log(`Server is running on localhost:${port}`);
}

const key = {
  movieApi: process.env.MOVIE_API_KEY,
};

const movieApiConfiguration = async () => {
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

app.get("/getData", async (req, res, next) => {
  try {
    const config = await movieApiConfiguration();
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
    const config = await movieApiConfiguration();
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
    };

    res.send({ imagesUrl, apiData });
  } catch (error) {
    console.log(error);
  }
});

// export app
module.exports = app;
