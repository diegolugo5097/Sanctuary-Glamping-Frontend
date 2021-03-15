/* eslint-disable import/no-anonymous-default-export */
export default (carousels = [], action) => {
  switch (action.type) {
    case "DELETE":
      return carousels.filter((carousel) => carousel._id !== action.payload);

    case "FETCH_ALL":
      return action.payload;

    case "CREATE":
      return [...carousels, action.payload];

    case "UPDATE":
      return carousels.map((carousel) =>
        carousel._id === action.payload._id ? action.payload : carousel
      );
    default:
      return carousels;
  }
};
