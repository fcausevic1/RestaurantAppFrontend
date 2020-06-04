import axios from "axios";

const register = (name, lastName, email, address, username, password) => {
  return axios.post("/api/register", {
    name,
    lastName,
    email,
    address,
    username,
    password,
  });
};

const login = (email, password) => {
  return axios
    .post("/api/login", {
      email,
      password,
    })
    .then((response) => {
      //moguc problem, provjeriti da li ide accessToken ili samo token ili nesto trece
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};
