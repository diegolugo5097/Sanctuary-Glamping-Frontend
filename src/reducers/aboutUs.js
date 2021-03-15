/* eslint-disable import/no-anonymous-default-export */
export default (abouts = [], action) => {
  switch (action.type) {
    case "DELETE":
      return abouts.filter((about) => about._id !== action.payload);

    case "FETCH_ALL":
      return action.payload;

    case "CREATE":
      return [...abouts, action.payload];

    case "UPDATE":
      return abouts.map((about) =>
        about._id === action.payload._id ? action.payload : about
      );
    default:
      return abouts;
  }
};
