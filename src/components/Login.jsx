import { useState, React } from 'react';
import './SingUpAndLogin.css'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { app } from './db';
const auth = getAuth(app)

function Login(props) {

  const [Acount, SetAcount] = useState({
    Gmail: "",
    Password: ""
  })
  const [error, SetError] = useState("")
  const Submit = (event) => {
    event.preventDefault()
    signInWithEmailAndPassword(auth, Acount.Gmail, Acount.Password)
      .then((userCredential) => {
        props.send(userCredential["user"].uid)
      })
      .catch(() => {
        SetError("No se ha podido acceder a tu cuenta verifica la contraseña y el mail")
      });

  }
  const Handle = (event) => {
    let name = event.target.name
    let value = event.target.value
    SetAcount({
      ...Acount, [name]: value
    })
  }
  return (
    <>
      <div className="popup">

        <div>
          <form onSubmit={Submit}>
            <h5 className="error">{error}</h5>
            <h3>Mail:</h3>
            <input className={"SignupInputs"}
              onChange={Handle}
              name='Gmail'
              type='email'
            ></input>
            <h3>Contraseña:</h3>
            <input className={"SignupInputs"}
              onChange={Handle}
              name='Password'
              type='password'
            ></input>
            <br></br>
            <button className="SignupButton" type='Submit'><b>→</b> Sign Up</button>
            <br></br>
            <br></br>
          </form>
        </div>
      </div>
    </>
  );
};


export default Login;