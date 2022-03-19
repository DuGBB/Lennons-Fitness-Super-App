import React, { useEffect, useState } from "react";

function SignUpForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit Form", useState);
  };

  return (
    <section className="container d-flex justify-content-center">
      <form onSubmit={handleSubmit}>
        <div className="d-flex row justify-content-center mx-2">
          <label htmlFor="firstname">First Name:</label>
          <input type="text" name="firstname" id="firstname"></input>
          <label htmlFor="lastname">Last Name:</label>
          <input type="text" name="lastname" id="lastname"></input>
          <label htmlFor="age">Age:</label>
          <input type="text" name="age" id="age"></input>
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" id="email"></input>
          <label htmlFor="password">Set Password</label>
          <input type="text" name="password" id="password"></input>
        </div>
        <div className="d-flex row justify-content-center mx-2 mt-2">
          <input type="submit"></input>
        </div>
      </form>
    </section>
  );
}

export default SignUpForm;
