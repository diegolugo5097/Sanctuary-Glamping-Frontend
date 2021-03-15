/* eslint-disable import/no-anonymous-default-export */
export default (bookings = [], action) => {
  switch (action.type) {
    case "CREATE":
      return [...bookings, action.payload];
    default:
      return bookings;
  }
};
