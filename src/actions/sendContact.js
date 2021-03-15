import * as api from "../api/sendEmail/sendEmail";

export const sendEmail = (email) => async (dispatch) => {
  try {
    const { data } = await api.sendEmail(email);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
