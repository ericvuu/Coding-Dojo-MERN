import React from  'react';

const UserForm = (props) => {

    // destructuring dictionary from App.js
    const { inputs, setInputs } = props;

    // on change will capture the event of the client keydown and set the particular state for key
    const onChange = (e) => {
        setInputs({
            // brings in the entire collection of state
            // spreads dictionary out into key, value pairs to preserve values, so we do not accidentally overwrite other values
          ...inputs,
          [e.target.name]: e.target.value,
        });
    };

    return (
      <form>
        <div>
          {/* htmlFor and name must match with key name in App.js State object */}
          <label htmlFor="firstName">First Name: </label>
          <input onChange={onChange} type="text" name="firstName" />
          <p>
            {inputs.firstName.length > 0 && inputs.firstName.length < 2
              ? "First name must be at least 2 characters."
              : ""}
          </p>
        </div>
        <div>
          <label htmlFor="lastName">Last Name: </label>
          <input onChange={onChange} type="text" name="lastName" />
          <p>
            {inputs.firstName.length > 0 && inputs.firstName.length < 2
              ? "Last name must be at least 2 characters."
              : ""}
          </p>
        </div>
        <div>
          <label htmlFor="email">Email Address: </label>
          <input onChange={onChange} type="email" name="email" />
          <p>
            {inputs.email.length > 0 && inputs.email.length < 5
              ? "Email must be at least 5 characters."
              : ""}
          </p>
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input onChange={onChange} type="password" name="password" />
          <p>
            {inputs.password.length > 0 && inputs.password.length < 8
              ? "Password must be at least 8 characters."
              : ""}
          </p>
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password: </label>
          <input onChange={onChange} type="password" name="confirmPassword" />
          <p>
            {inputs.confirmPassword.length > 0 &&
            inputs.confirmPassword.length < 8
              ? "Password must be at least 8 characters."
              : ""}
            {inputs.password !== inputs.confirmPassword ? "Passwords do not match." : ""}
          </p>
        </div>
      </form>
    );
}

export default UserForm;
