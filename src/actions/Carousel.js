import * as api from "../api/carousel/carousel";

// actions creators
export const getCarousels = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCarousel();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createCarousel = (about) => async (dispatch) => {
  try {
    const { data } = await api.createCarousel(about);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateCarousel = (id, about) => async (dispatch) => {
  try {
    const { data } = await api.updateCarousel(id, about);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteCarousel = (id) => async (dispatch) => {
  try {
    await api.deleteCarousel(id);
    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error);
  }
};
