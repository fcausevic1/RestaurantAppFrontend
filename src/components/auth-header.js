export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.accessToken) {
    return { Authorization: "Bearer " + user.accessToken };
    //ako je node.js express koristiti return { 'x-access-token': user.accessToken };
  } else {
    return {};
  }
}

//ovo je pomocni fajl za user.service, provjeriti da li nam uopste ovo treba
//ili na drugaciji nacin uraditi
