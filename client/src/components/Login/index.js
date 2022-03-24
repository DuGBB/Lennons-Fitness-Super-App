import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { TRAINERLOGIN } from "../utils/mutations";
import Auth from "../utils/auth";

const trainerLogin = (props) => {
  // MEMBER
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(TRAINERLOGIN);

  // MEMBER ITEMS
  const handleChangeTrainer = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmitTrainer = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await login({
        variables: { ...formState },
      });
      console.log(data.trainerLogin.token);

      Auth.login(data.trainerLogin.token);
    } catch (e) {
      console.error(e);
    }
  };

  // TRAINER ITEMS

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-md-6">
        <div className="card">
          <h4 className="card-header">Trainer Login</h4>
          <div className="card-body">
            <form onSubmit={handleFormSubmitTrainer}>
              <input
                className="form-input"
                placeholder="Your email"
                name="email"
                type="email"
                id="email"
                value={formState.email}
                onChange={handleChangeTrainer}
              />
              <input
                className="form-input"
                placeholder="******"
                name="password"
                type="password"
                id="password"
                value={formState.password}
                onChange={handleChangeTrainer}
              />
              <button className="btn d-block w-100" type="submit">
                Submit
              </button>
            </form>
            {error && <div>Login failed</div>}
          </div>
        </div>
      </div>
    </main>
  );
};

export default trainerLogin;

// import React from "react";

// class LoginForm extends React.Component {
//   render() {
//     return (
//       <div id="loginform">
//         <FormHeader title="Member Login" />
//         <Form />
//       </div>
//     );
//   }
// }

// const FormHeader = (props) => <h2 id="headerTitle">{props.title}</h2>;

// const Form = (props) => (
//   <div>
//     <FormInput
//       description="Username"
//       placeholder="Enter your username"
//       type="text"
//     />
//     <FormInput
//       description="Password"
//       placeholder="Enter your password"
//       type="password"
//     />
//     <FormButton title="Log in" />
//   </div>
// );

// const FormButton = (props) => (
//   <div id="button" class="row">
//     <button>{props.title}</button>
//   </div>
// );

// const FormInput = (props) => (
//   <div class="row">
//     <label>{props.description}</label>
//     <input type={props.type} placeholder={props.placeholder} />
//   </div>
// );

// export default LoginForm;
