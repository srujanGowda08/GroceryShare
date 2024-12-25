import API from "./api";

export const login = async (email, password) => {
  const { data } = await API.post("/auth/login", { email, password });
  return data;
};

export const signup = async (email, password) => {
  const { data } = await API.post("/auth/signup", { email, password });
  return data;
};
