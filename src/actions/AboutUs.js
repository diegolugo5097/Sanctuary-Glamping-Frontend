import * as api from "../api/aboutUs/aboutUs";

// actions creators
export const getAbouts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAbouts();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createAbout = (about) => async (dispatch) => {
  try {
    const { data } = await api.createAbout(about);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateAbout = (id, about) => async (dispatch) => {
  try {
    const { data } = await api.updateAbout(id, about);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteAbout = (id) => async (dispatch) => {
  try {
    await api.deleteAbout(id);
    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error);
  }
};
