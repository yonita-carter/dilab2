import React from "react";
import { Nav } from "react-bootstrap";
import {
  AppleLoginButton,
  GoogleLoginButton,
  FacebookLoginButton,
  LinkedInLoginButton,
  TwitterLoginButton,
} from "react-social-login-buttons";
import email from "../assets/email.jpeg";
import { useHistory } from "react-router-dom";

export const Login = () => {
  const history = useHistory();
  return (
    <div style={{ padding: "20px", margin: "0 auto" }}>
      <h1>Login</h1>

      <GoogleLoginButton
        style={{ width: "300px", margin: "0 auto" }}
        onClick={() => history.push("/loginemail")}
        // icon=""
      >
        Use Email/Phone
      </GoogleLoginButton>

      {/* <AppleLoginButton
        style={{ margin: "10px", width: "300px", margin: "0 auto" }}
        onClick={() => alert("Scan QR-code")}
        icon=""
      >
        Use QR-Code
      </AppleLoginButton> */}

      <FacebookLoginButton
        style={{ width: "300px", margin: "0 auto" }}
        onClick={() => alert("Connecting to Facebook")}
      >
        Use Facebook
      </FacebookLoginButton>

      <TwitterLoginButton
        style={{ width: "300px", margin: "0 auto" }}
        onClick={() => alert("Connecting to Twitter")}
      >
        Use Twitter
      </TwitterLoginButton>

      <LinkedInLoginButton
        style={{ width: "300px", margin: "0 auto" }}
        onClick={() => alert("Connecting to LinkedIn")}
      >
        Use LinkedIn
      </LinkedInLoginButton>

      <div style={{ width: "300px", margin: "0 auto" }}>
        Don’t have an account?<Nav.Link href="/register">Sign Up</Nav.Link>
      </div>
    </div>
  );
};
