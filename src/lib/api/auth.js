import client from "./client";

export const login = ({ id, password }) =>
  client.post("/account_api/login/", { user_id: id, password });

export const register = ({ id, password, username }) => {
  console.log(id, password, username);
  const name = username;
  const user_id = id;
  return client.post("/account_api/account/", { user_id, password, name });
};

export const check = () => client.get("/api/auth/check");

export const logout = () => client.post("/api/auth/logout");
