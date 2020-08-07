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
  res.sendFile("build/index.html");

  // for development
  // res.sendFile(path.resolve("public/index.html"));
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
    console.log(configData);
    res.send(configData);
  } catch (error) {
    console.error(error);
  }
};
movieApiConfiguration();
// const movieApiConnect = async (movie) => {
//   const movieName = await fetch(
//     `https://api.themoviedb.org/3/search/movie?api_key=${key.movieApi}&language=en-US&query=${movie}`
//   );
//   try {
//     await movieApiConfiguration();
//     const movieData = await movieName.json();
//     console.log(movieData);
//   } catch (error) {
//     console.error(error);
//   }
// };

// app.get(`getMovies`, async (req, res, next) => {
//   console.log(req.query.movie);
//   try {
//     const connectApi = await movieApiConnect(req.query.movie);
//     console.log(connectApi);
//   } catch (err) {
//     throw new Error(err);
//   }
// });

// export app
module.exports = app;
