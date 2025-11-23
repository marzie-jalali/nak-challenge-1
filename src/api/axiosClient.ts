import axios from "axios";

export const api = axios.create({
  baseURL: "https://nak-interview.darkube.app",
  headers: {
    "Content-Type": "application/json",
  },
});

export const usersApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json",
  },
});
