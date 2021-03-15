import { API } from "../../config";
import axios from "axios";

export const fetchGlamping = async () => axios.get(`${API}/glamping/glampings`);

export const createGlamping = (newGlamping) =>
  axios.post(`${API}/glamping/create`, newGlamping);

export const updateGlamping = (id, updatedGlamping) =>
  axios.patch(`${API}/glamping/update/${id}`, updatedGlamping);

export const deleteGlamping = (id) =>
  axios.delete(`${API}/glamping/delete/${id}`);
