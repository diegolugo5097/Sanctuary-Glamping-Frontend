import * as api from "../api/gallery/gallery";

// actions creators
export const getGallery = () => async (dispatch) => {
  try {
    const { data } = await api.fetchGallery();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createGallery = (about) => async (dispatch) => {
  try {
    const { data } = await api.createGallery(about);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateGallery = (id, about) => async (dispatch) => {
  try {
    const { data } = await api.updateGallery(id, about);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteGallery = (id) => async (dispatch) => {
  try {
    await api.deleteGallery(id);
    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error);
  }
};
