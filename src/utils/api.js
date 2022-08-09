import axios from "axios";
import { baseURL, URL } from "_constants";

const api = axios.create({
  baseURL: baseURL,
});

export const getCities = () => api.get(URL.cities);

export const getBusinessTypes = () => api.get(URL.business_type);

export const getLocalities = () => api.get(URL.locality);

export const getProperties = () => api.get(URL.properties);

export const getProperty = (id) => api.get(URL.properties + "/" + id);
