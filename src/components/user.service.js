import axios from "axios";
import authHeader from "./auth-header";

//moguci problemi, u tutorijali se koristi getPublicContent zatim odvojeni get za svaku rolu
//ovo vjrv treba uraditi na drugaciji nacin jer u tutorijali on ima /api/admin itd
//a mi vjrv trebamo ovdje provjeravati ko je koja rola
//ili nam mozda uopste ne treba ovaj servis
const getUserContent = () => {
  //provjeriti da li nam uopste ovaj get treba
  return axios.get("/api/users");
};

// const getAdminContent = () => {
//     return axios.get("/api/admin", {headers: authHeader()});
// };

// const getEmployeeContent = () => {
//     return axios.get("/api/emp", {headers: authHeader()});
// };

export default {
  getUserContent,
  //getAdminContent,
  //getEmployeeContent,
};
