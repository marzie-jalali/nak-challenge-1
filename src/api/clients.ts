import axios from "axios";

export const api = axios.create({
  baseURL: "https://nak-interview.darkube.app",
  headers: {
    "Content-Type": "application/json",
  },
});
