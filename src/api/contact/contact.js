import { API } from "../../config";
import axios from "axios";

export const fetchContact = async () => axios.get(`${API}/contact/contacts`);

export const createContact = (newContact) =>
  axios.post(`${API}/contact/create`, newContact);

export const updateContact = (id, updatedContact) =>
  axios.patch(`${API}/contact/update/${id}`, updatedContact);

export const deleteContact = (id) =>
  axios.delete(`${API}/contact/delete/${id}`);
