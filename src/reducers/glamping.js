/* eslint-disable import/no-anonymous-default-export */
export default (glampings = [], action) => {
  switch (action.type) {
    case "DELETE":
      return glampings.filter((glamping) => glamping._id !== action.payload);

    case "FETCH_ALL":
      return action.payload;

    case "CREATE":
      return [...glampings, action.payload];

    case "UPDATE":
      return glampings.map((glamping) =>
        glamping._id === action.payload._id ? action.payload : glamping
      );
    default:
      return glampings;
  }
};
