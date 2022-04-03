import axios from "axios";

const api = axios.create({
  baseURL: `https://pokeapi.co/api/v2/`,
});

const pokeAPi = axios.create({
  baseURL: `http://localhost:4000/v1/pokemon`,
});

export { api, pokeAPi };
