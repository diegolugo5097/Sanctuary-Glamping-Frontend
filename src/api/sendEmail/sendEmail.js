import { API } from "../../config";
import axios from "axios";

export const sendEmail = (newEmail) =>
  axios.post(`${API}/send-email`, newEmail);

export const bookingEmail = (newBooking) =>
  axios.post(`${API}/booking/booking-email`, newBooking);
