import './SingUpAndLogin.css'
import Login from "./Login";
import { useState } from 'react';
import Signup from "./Signup";
function SignupAndLogin() {
    const [SignupIsOpen,SetSignupIsOpen]=useState(false);
    const [LoginIsOpen,SetLoginIsOpen]=useState(false);
    const [IdAcount,SetIdAcount]=useState("")
        return (
            <>
            {SignupIsOpen &&  <div className='background' onClick={()=>SetSignupIsOpen(false)}>
          .
          </div>}
          {LoginIsOpen &&  <div className='background' onClick={()=>SetLoginIsOpen(false)}>
          .
          </div>}
{SignupIsOpen && <Signup send={SetIdAcount}></Signup>}
{LoginIsOpen && <Login send={SetIdAcount}></Login>}
<div style={{display:"flex"}}>
<button onClick={()=>{SetSignupIsOpen(true)}}>Signup</button>
<button onClick={()=>SetLoginIsOpen(true)}>Login</button>
</div>
            </>
        );
    }
export default SignupAndLogin;
