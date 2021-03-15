import * as api from "../api/sendEmail/sendEmail";

export const sendBooking = (booking) => async (dispatch) => {
  try {
    const { data } = await api.bookingEmail(booking);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
