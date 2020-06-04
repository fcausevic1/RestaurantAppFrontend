import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Login.css";
import AuthService from "./auth.service";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [loading, setLoading] = useState(false);
  //const [message, setMessage] = useState("");

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [address, setAddress] = useState("");
  const [username, setUsername] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  function validateLoginForm() {
    return email.length > 0 && password.length > 0;
  }

  function validateRegisterForm() {
    return emailReg.length > 0 && passwordReg.length > 0;
    name.length > 0 && lastName.length > 0;
    address.length > 0 && username.length > 0;
  }

  const handleLogin = (event) => {
    event.preventDefault();

    //setMessage("");
    //setLoading(true);

    AuthService.login(email, password).then(
      () => {
        props.history.push("/products");
        window.location.reload();
      } //,
      // (error) => {
      //   // const resMessage =
      //   //   (error.response &&
      //   //     error.response.data &&
      //   //     error.response.data.message) ||
      //   //   error.message ||
      //   //   error.toString();
      //   //setLoading(false);
      //   //setMessage(resMessage);
      // }
    );
  };

  const handleRegister = (event) => {
    event.preventDefault();

    AuthService.register(
      name,
      lastName,
      emailReg,
      address,
      username,
      passwordReg
    ).then(
      (response) => {
        //ovdje dodati popup ili tako nesto da obavjestimo o uspjesnoj registraciji
        //najpametnije mozda koristiti setMessage koji je u loginu zakomentarisan
        //i onda prikazivati taj message ispod
      } //,
      // (error) => { }
    );
  };

  return (
    <div className="wrapper">
      <div className="Login">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <FormGroup bssize="large">
            <FormLabel className="loginLabel">Email</FormLabel>
            <FormControl
              className="field"
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup bssize="large">
            <FormLabel className="loginLabel">Password</FormLabel>
            <FormControl
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </FormGroup>

          <Button
            block
            bssize="large"
            disabled={!validateLoginForm()}
            type="submit"
            className="Btn"
          >
            Login
          </Button>
        </form>
      </div>
      <div className="Login">
        <h1>Register</h1>
        <form onSubmit={handleRegister}>
          <FormGroup bssize="large">
            <FormLabel className="loginLabel">Name</FormLabel>
            <FormControl
              className="field"
              autoFocus
              type="name"
              onChange={(e) => setName(e.target.value)}
            />
          </FormGroup>

          <FormGroup bssize="large">
            <FormLabel className="loginLabel">Last name</FormLabel>
            <FormControl
              onChange={(e) => setLastName(e.target.value)}
              type="name"
            />
          </FormGroup>
          <FormGroup bssize="large">
            <FormLabel className="loginLabel">Email</FormLabel>
            <FormControl
              onChange={(e) => setEmailReg(e.target.value)}
              type="email"
            />
          </FormGroup>

          <FormGroup bssize="large">
            <FormLabel className="loginLabel">Address</FormLabel>
            <FormControl
              onChange={(e) => setAddress(e.target.value)}
              type="name"
            />
          </FormGroup>
          <FormGroup bssize="large">
            <FormLabel className="loginLabel">Username</FormLabel>
            <FormControl onChange={(e) => setUsername(e.target.value)} />
          </FormGroup>
          <FormGroup bssize="large">
            <FormLabel className="loginLabel">Password</FormLabel>
            <FormControl
              onChange={(e) => setPasswordReg(e.target.value)}
              type="password"
            />
          </FormGroup>

          <Button
            block
            bssize="large"
            disabled={!validateRegisterForm()}
            type="submit"
            className="Btn"
          >
            Register
          </Button>
        </form>
      </div>
    </div>
  );
};
export default Login;
