import { API } from "../../config";

import axios from "axios";

export const fetchAbouts = async () => axios.get(`${API}/about/abouts`);

export const createAbout = (newAboutUs) =>
  axios.post(`${API}/about/create`, newAboutUs);

export const updateAbout = (id, updatedAboutUs) =>
  axios.patch(`${API}/about/update/${id}`, updatedAboutUs);

export const deleteAbout = (id) => axios.delete(`${API}/about/delete/${id}`);
