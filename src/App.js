import { useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput";

const App = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true, //HTML Attribute,
      icon: false,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true, //HTML Attribute
      icon: false,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      errorMessage: "",
      label: "Birthday",
      icon: false,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include atleast 1 letter, 1 number and one special character!",
      label: "Password",
      autoComplete: "off",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true, //HTML Attribute
      icon: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      autoComplete: "off",
      pattern: values.password,
      required: true, //HTML Attribute,
      icon: false,
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values);
  console.log(values.birthday);
  return (
    <div className="App">
      <form action="#" onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input, index) => {
          console.log(index);
          return (
            <FormInput
              /*key={input.id} */
              key={index}
              {...input}
              value={values[input.name]}
              HandleOnChange={handleChange}
            />
          );
        })}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;

//31:47

/**
 * Note:- 1
 * e.preventDefault(); //for prevent refreshing the page when submit button is clicked
 * Note:- 2
 * for targeting "const data = new FormData(e.target);"
 * we have to use `name=""` attribute inside the input tags
 */
/**
 * Note:- 3
 * <FormInput
      key={input.id}
      {...input}
      value={values[input.name]}
      onChange={handleChange}
    />
 * 
 * <FormInput <inside this FromInput this things are "props" that we are passing to "FormInput.jsx"> />
 * 
 * 
*/
