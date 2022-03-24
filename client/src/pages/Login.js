import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { MEMBERLOGIN } from "../utils/mutations";
import Login from "../components/Login";
import Auth from "../utils/auth";

const LoginPage = (props) => {
  // MEMBER
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(MEMBERLOGIN);
  // TRAINER
  // const [trainerFormState, setTrainerFormState] = useState({
  //   email: "",
  //   password: "",
  // });
  // const [trainerLogin, { trainerError }] = useMutation(TRAINERLOGIN);
  // update state based on form input changes

  // MEMBER ITEMS
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmitMember = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await login({
        variables: { ...formState },
      });
      console.log(data.memberLogin.token);

      Auth.login(data.memberLogin.token);
    } catch (e) {
      console.error(e);
    }
  };

  // TRAINER ITEMS

  // const handleTrainerChange = (event) => {
  //   const { name, value } = event.target;

  //   setTrainerFormState({
  //     ...trainerFormState,
  //     [name]: value,
  //   });
  // };
  // const handleFormSubmitTrainer = async (event) => {
  //   event.preventDefault();
  //   console.log(trainerFormState);

  //   try {
  //     const { data } = await trainerLogin({
  //       variables: { ...formState },
  //     });
  //     console.log(data.trainerLogin.token);

  //     Auth.trainerLogin(data.trainerLogin.token);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-md-6">
        <div className="card">
          <h4 className="card-header">Member Login</h4>
          <div className="card-body">
            <form onSubmit={handleFormSubmitMember}>
              <input
                className="form-input"
                placeholder="Your email"
                name="email"
                type="email"
                id="email"
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="******"
                name="password"
                type="password"
                id="password"
                value={formState.password}
                onChange={handleChange}
              />
              <button className="btn d-block w-100" type="submit">
                Submit
              </button>
            </form>
            {error && <div>Login failed</div>}
          </div>
          <Login />
        </div>
      </div>
      {/* <div className="col-12 col-md-6">
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
                value={trainerFormState.email}
                onChange={handleTrainerChange}
              />
              <input
                className="form-input"
                placeholder="******"
                name="password"
                type="password"
                id="password"
                value={trainerFormState.password}
                onChange={handleTrainerChange}
              />
              <button className="btn d-block w-100" type="submit">
                Submit
              </button>
            </form>
            {trainerError && <div>Login failed</div>}
          </div>
        </div>
      </div> */}
    </main>
  );
};

export default LoginPage;
