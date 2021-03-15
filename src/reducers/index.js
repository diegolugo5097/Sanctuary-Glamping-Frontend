import { combineReducers } from "redux";
import glampings from "./glamping";
import abouts from "./aboutUs";
import carousels from "./carousel";
import contacts from "./contact";
import galleries from "./gallery";
import users from "./users";
import bookingEmail from "./bookingEmail";
import sendContact from "./sendContact";

export const reducers = combineReducers({
  glampings,
  abouts,
  carousels,
  contacts,
  galleries,
  users,
  bookingEmail,
  sendContact,
});
