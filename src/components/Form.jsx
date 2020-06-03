import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Form.css";
import { AuthenticationService } from "./AuthenticationService.js";

const Form = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="wrapper">
      <div className="Login">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
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
            onClick={(event) => {
              AuthenticationService.login(email, password);
            }}
          >
            Login
          </Button>
        </form>
      </div>
      <div className="Login">
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

          <Button block bssize="large" disabled={!validateForm()} type="submit">
            Register
          </Button>
        </form>
      </div>
    </div>
  );
};
export default Form;
