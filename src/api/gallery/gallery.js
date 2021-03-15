import { API } from "../../config";
import axios from "axios";

export const fetchGallery = async () => axios.get(`${API}/gallery/galleries`);

export const createGallery = (newGallery) =>
  axios.post(`${API}/gallery/create`, newGallery);

export const updateGallery = (id, updatedGallery) =>
  axios.patch(`${API}/gallery/update/${id}`, updatedGallery);

export const deleteGallery = (id) =>
  axios.delete(`${API}/gallery/delete/${id}`);
