import { AuthenticationService } from "./AuthenticationService.js";

export function authHeader() {
  // return authorization header with jwt token
  const currentUser = AuthenticationService.currentUserValue;
  if (currentUser && currentUser.token) {
    return { Authorization: `Bearer ${currentUser.token}` };
  } else {
    return {};
  }
}
