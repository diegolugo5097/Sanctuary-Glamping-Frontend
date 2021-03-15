import { API } from "../../config";

export const signin = (user) => {
  return new Promise((resolve, reject) => {
    fetch(`${API}/auth/signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => resolve(jsonData))
      .catch((err) => {
        console.log(err);
      });
  });
};

export const getUsers = () => {
  return fetch(`${API}/auth/users`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const signup = (user) => {
  return fetch(`${API}/auth/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const signout = (next) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("jwt");
    next();

    return fetch(`${API}/auth/signout`, {
      method: "GET",
    })
      .then((response) => {
        response.json();
      })
      .catch((err) => console.log(err));
  }
};

export const authenticate = (data, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
};

export const isAuthenticated = () => {
  if (typeof window === "undefined") {
    return false;
  }
  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
    // return localStorage.getItem("jwt");
  } else {
    return false;
  }
};
