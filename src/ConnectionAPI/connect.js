const localhost = "http://192.168.1.100:5000/";

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

export const getDataMovie = async (id) =>
  await fetch(`${localhost}getDataMovie?id=${id}`, { headers })
    .then((res) => res.json())
    .then((data) => data);

export const getDataTv = async (id) =>
  await fetch(`${localhost}getDataTv?id=${id}`, { headers })
    .then((res) => res.json())
    .then((data) => data);

export const getDataPerson = async (id) =>
  await fetch(`${localhost}getDataPerson?id=${id}`, { headers })
    .then((res) => res.json())
    .then((data) => data);

export const getDataSeason = async (tvId, seasonNumber) =>
  await fetch(
    `${localhost}getDataSeason?tvId=${tvId}&seasonId=${seasonNumber}`,
    {
      headers,
    }
  )
    .then((res) => res.json())
    .then((data) => data);
