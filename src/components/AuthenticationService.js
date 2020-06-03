import { BehaviorSubject } from "rxjs";

const currentUserSubject = new BehaviorSubject(
  JSON.parse(localStorage.getItem("currentUser"))
);

export const AuthenticationService = {
  login,
  logout,
  currentUser: currentUserSubject.asObservable(),
  get currentUserValue() {
    return currentUserSubject.value;
  },
};

async function login(email, password) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  };

  const user = await fetch("/api/login", requestOptions).then((response) => {
    console.log(response.headers);

    if (!response.ok) console.log("Not ok");
    else return response.json();
  });
  console.log(user);
  return user;
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("currentUser");
  currentUserSubject.next(null);
}
