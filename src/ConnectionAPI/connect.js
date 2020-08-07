const localhost = "http://localhost:5000/";

// Generate a unique token for storing your bookshelf data on the backend server.
let token = Math.random().toString(36).substr(-8);

const headers = {
  Accept: "application/json",
  Authorization: token,
};

export const getMovies = async (movie) =>
  await fetch(`${localhost}getMovies?movie=${movie}`, { headers })
    .then((res) => res.json())
    .then((data) => data);
