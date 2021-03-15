import { API } from "../../config";
import axios from "axios";

export const fetchUsers = async () => axios.get(`${API}/user/users`);

export const read = async (id) => axios.get(`${API}/user/read/${id}`);

export const createUser = (newUser) =>
  axios.post(`${API}/user/create`, newUser);

export const updateUser = (id, updatedUser) =>
  axios.patch(`${API}/user/update/${id}`, updatedUser);

export const deleteUser = (id) => axios.delete(`${API}/user/delete/${id}`);
