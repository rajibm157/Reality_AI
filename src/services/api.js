import axios from "axios";
import { baseURL, URL } from "_constants";

const api = axios.create({
  baseURL: baseURL,
});

export const getCities = () => api.get(URL.cities);
