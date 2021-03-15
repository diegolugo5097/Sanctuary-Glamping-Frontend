/* eslint-disable import/no-anonymous-default-export */
export default (users = [], action) => {
  switch (action.type) {
    case "DELETE":
      return users.filter((user) => user._id !== action.payload);

    case "FETCH_ALL":
      return action.payload;

    case "CREATE":
      return [...users, action.payload];

    case "UPDATE":
      return users.map((user) =>
        user._id === action.payload._id ? action.payload : user
      );
    default:
      return users;
  }
};
