const localhost = "http://localhost:5000/";

// Generate a unique token for storing your bookshelf data on the backend server.
let token = Math.random().toString(36).substr(-8);

const headers = {
  Accept: "application/json",
  Authorization: token,
};

export const getData = async (name) =>
  await fetch(`${localhost}getData?name=${name}`, { headers })
    .then((res) => res.json())
    .then((data) => data);
