import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_MEMBER } from "../../utils/mutations";
import Auth from "../../utils/auth";

function SignUpForm(props) {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    password: "",
  });

  const [addMember, { error }] = useMutation(ADD_MEMBER);

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();

  //   try {
  //     const { data } = await addMember({
  //       variables: { ...formState },
  //     });
  //     Auth.login(data.addMember.token);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addMember({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
        age: formState.age,
      },
    });
    const token = mutationResponse.data.addMember.token;
    Auth.login(token);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <section className="container d-flex justify-content-center">
      <form onSubmit={handleFormSubmit}>
        <div className="d-flex row justify-content-center mx-2">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={formState.firstName}
            onChange={handleChange}></input>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={formState.lastName}
            onChange={handleChange}></input>
          <label htmlFor="age">Age:</label>
          <input
            type="text"
            name="age"
            id="age"
            value={formState.age}
            onChange={handleChange}></input>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            id="email"
            value={formState.email}
            onChange={handleChange}></input>
          <label htmlFor="password">Set Password</label>
          <input
            type="text"
            name="password"
            id="password"
            value={formState.password}
            onChange={handleChange}></input>
        </div>
        <div className="d-flex row justify-content-center mx-2 mt-2">
          <input type="submit"></input>
        </div>
      </form>
      {error && <div>Sign up failed</div>}
    </section>
  );
}

export default SignUpForm;
