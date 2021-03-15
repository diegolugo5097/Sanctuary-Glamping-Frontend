import * as api from "../api/glamping/glamping";

// actions creators
export const getGlamping = () => async (dispatch) => {
  try {
    const { data } = await api.fetchGlamping();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createGlamping = (about) => async (dispatch) => {
  try {
    const { data } = await api.createGlamping(about);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateGlamping = (id, about) => async (dispatch) => {
  try {
    const { data } = await api.updateGlamping(id, about);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteGlamping = (id) => async (dispatch) => {
  try {
    await api.deleteGlamping(id);
    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error);
  }
};
