import * as api from "../api/contact/contact";

// actions creators
export const getContacts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchContact();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createContact = (about) => async (dispatch) => {
  try {
    const { data } = await api.createContact(about);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateContact = (id, about) => async (dispatch) => {
  try {
    const { data } = await api.updateContact(id, about);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteContact = (id) => async (dispatch) => {
  try {
    await api.deleteContact(id);
    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error);
  }
};
