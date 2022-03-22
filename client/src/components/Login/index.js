import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { MEMBERLOGIN } from "../../utils/mutations";
import auth from "../../utils/auth";

const LoginForm = () => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(MEMBERLOGIN);

  // update state based on form input chages
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });
      auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div id="loginform">
      <FormHeader title="Login" />
      <Form />
    </div>
  );
};

const FormHeader = (props) => <h2 id="headerTitle">{props.title}</h2>;

const Form = (props) => (
  <div>
    <FormInput
      description="Username"
      placeholder="Enter your username"
      type="text"
    />
    <FormInput
      description="Password"
      placeholder="Enter your password"
      type="password"
    />
    <FormButton title="Log in" />
  </div>
);

const FormButton = (props) => (
  <div id="button" class="row">
    <button>{props.title}</button>
  </div>
);

const FormInput = (props) => (
  <div class="row">
    <label>{props.description}</label>
    <input type={props.type} placeholder={props.placeholder} />
  </div>
);

// function LoginForm (){
//     return (
//         <section>
//             <div className="">
//                 <h2>Login to your account</h2>
//                 <form>
//                 <input type="text" title="username" placeholder="username" />
//                 <input type="password" title="username" placeholder="password" />
//                 <button type="submit" className="btn">Login</button>
//                 <a className="forgot" href="#">Forgot Username?</a>
//                 </form>
//             </div>
//         </section>
//     )
// }

export default LoginForm;
