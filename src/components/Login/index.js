import React from "react";
// import { useMutation } from "@apollo/client";
// import { LOGIN_USER } from "../../utils/mutations";

function LoginForm() {
  return (
    <section>
      <div className="">
        <h2>Login to your account</h2>
        <form>
          <input type="text" title="username" placeholder="username" />
          <input type="password" title="username" placeholder="password" />
          <button type="submit" className="btn">
            Login
          </button>
          <a className="forgot" href="#">
            Forgot Username?
          </a>
        </form>
      </div>
    </section>
  );
}

export default LoginForm;
