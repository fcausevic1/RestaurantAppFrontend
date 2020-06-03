import config from "config";
import { authHeader } from "./AuthHeader.js";
import { HandleResponse } from "./HandleResponse.js";

export const userService = {
  getAll,
};

function getAll() {
  const requestOptions = { method: "GET", headers: authHeader() };
  return fetch(`api/users`, requestOptions).then(HandleResponse);
}
