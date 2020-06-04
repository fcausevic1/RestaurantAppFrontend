import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Login.css";
import AuthService from "./auth.service";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [loading, setLoading] = useState(false);
  //const [message, setMessage] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
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
            disabled={!validateForm()}
            type="submit"
            className="Btn"
          >
            Login
          </Button>
        </form>
      </div>
      {/* <div className="Login">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <FormGroup controlId="name" bssize="large">
            <FormLabel className="loginLabel">Name</FormLabel>
            <FormControl
              className="field"
              autoFocus
              type="mame"

              // onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>

          <FormGroup controlId="name" bssize="large">
            <FormLabel className="loginLabel">Last name</FormLabel>
            <FormControl
              //  onChange={(e) => setPassword(e.target.value)}
              type="name"
            />
          </FormGroup>
          <FormGroup controlId="password" bssize="large">
            <FormLabel className="loginLabel">Email</FormLabel>
            <FormControl

            //7onChange={(e) => setEmail(e.target.value)I
            //type="email"
            />
          </FormGroup>

          <FormGroup bssize="large">
            <FormLabel className="loginLabel">Address</FormLabel>
            <FormControl

            //onChange={(e) => setPassword(e.target.value)}
            //type="password"
            />
          </FormGroup>
          <FormGroup bssize="large">
            <FormLabel className="loginLabel">Username</FormLabel>
            <FormControl onChange={(e) => setPassword(e.target.value)} />
          </FormGroup>
          <FormGroup bssize="large">
            <FormLabel className="loginLabel">Password</FormLabel>
            <FormControl
              //  onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </FormGroup>

          <Button
            block
            bssize="large"
            disabled={!validateForm()}
            type="submit"
            className="Btn"
          >
            Register
          </Button>
        </form>
      </div> */}
    </div>
  );
};
export default Login;
