import React, { useEffect, useState } from "react";


  class SignupForm extends React.Component {
    render() {
      return (
        <div id="signupform">
          <FormHeader title="Member Signup" />
          <Form onSubmit={handleFormSubmit}/>
        </div>
      );
    }
  }
  const FormHeader = (props) => <h2 id="headerTitle">{props.title}</h2>;

  const [addMember] = useMutation(ADD_MEMBER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addMember({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
        age: formState.age
      },
    });
    const token = mutationResponse.data.addMember.token;
    Auth.login(token);
  };


  function Form (props) {

    const [formState, setFormState] = useState({ FirstName: '', LastName: '', email: '', age: '', password: '' });
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormState({
        ...formState,
        [name]: value,
      });
    };

    <div>
      <FormInput onChange={handleChange}
        description="FirstName"
        placeholder="Enter your first name"
        type="text"
      />
      <FormInput onChange={handleChange}
        description="LastName"
        placeholder="Enter your last name"
        type="text"
      />
      <FormInput onChange={handleChange}
        description="email"
        placeholder="Enter your email"
        type="text"
      />
      <FormInput onChange={handleChange}
        description="password"
        placeholder="Enter your password"
        type="password"
      />
      <FormInput onChange={handleChange}
        description="age"
        placeholder="Enter your age"
        type="text"
      />

      <FormButton title="signup" />
    </div>
  };

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

export default SignupForm;
