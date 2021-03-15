import { API } from "../../config";
import axios from "axios";

export const fetchCarousel = async () => axios.get(`${API}/carousel/carousel`);

export const createCarousel = (newCarousel) =>
  axios.post(`${API}/carousel/create`, newCarousel);

export const updateCarousel = (id, updatedCarousel) =>
  axios.patch(`${API}/carousel/update/${id}`, updatedCarousel);

export const deleteCarousel = (id) =>
  axios.delete(`${API}/carousel/delete/${id}`);
