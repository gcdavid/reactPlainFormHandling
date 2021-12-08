import './App.css';
import { useState } from 'react';
import FormInput from './components/FormInput';

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: ""
  })  

  const inputs = [ 
    {
      id: 1, 
      name: "username",
      type: "text",
      placeholder: "UserName",
      errorMessage: "Username should 3-16 characters and shouldn't include any special charcater",
      label: "UserName",
      pattern: "^[A-Za-z0-9]{3,16}$"
    },
    {
      id: 2, 
      name: "email",
      type: "email",
      placeholder: "Enter your email",
      errorMessage: "Please enter a valid email address",
      label: "Email",
      required: false
    },
    {
      id: 3, 
      name: "birthday",
      type: "date",
      placeholder: "Enter you date of birth...",
      label: "Birthday", 
    },
    {
      id: 4, 
      name: "password",
      type: "password",
      placeholder: "Enter your password",
      errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true
    },
    {
      id: 5, 
      name: "confirm Password",
      type: "password",
      placeholder: "confirm your password..",
      errorMessage: "Password doesn't match",
      label: "confirm Password",
      pattern: values.password,
      required: true
    }
  ]

  /*we can use ref hook in form to prevent the issue of re-rendering but re-rendering isn't bad because it's the way the react operates cause there's a change in the state 
  const usernameRef = useRef()

  This is one of the way through which you can get the form data using the object functions and eliminate the problem of re-rendering
  const data = new FormData(e.target)
  console.log(Object.fromEntries(data.entries()))
  */

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const onChange = (e) => {
    setValues({...values,[e.target.name] : e.target.value})
  }

  console.log(values)
  return (
    <>
   
    <div className="app">
    
      <form className='form_container' onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((item) => (
          <FormInput key={item.id} {...item} value={values[item.name]} onChange={onChange}/>
        ))}
        <button>Submit</button>
      </form>
    </div>
    </>
  );
}

export default App;
