/* eslint-disable import/no-anonymous-default-export */
export default (galleries = [], action) => {
  switch (action.type) {
    case "DELETE":
      return galleries.filter((gallery) => gallery._id !== action.payload);

    case "FETCH_ALL":
      return action.payload;

    case "CREATE":
      return [...galleries, action.payload];

    case "UPDATE":
      return galleries.map((gallery) =>
        gallery._id === action.payload._id ? action.payload : gallery
      );
    default:
      return galleries;
  }
};
