import {useState} from 'react'
import {connect} from "react-redux";
import { Button } from '../../utils'
import { login } from '../../redux/actions/auth-action';

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginUser = (e) => {
    e.preventDefault();
    props.login({email, password});
  }

  return (
    <div className='auth-form-container'>
        <h2>Login</h2>
        <form className='auth-form' onSubmit={handleLoginUser}>
        <input type="email" placeholder='Your email'  value={email} onChange={e => setEmail(e.target.value)} />
          <input type="password" placeholder='Your password'  value={password} onChange={e => setPassword(e.target.value)}  />
          <Button text={"Login"} type={"submit"} isloading={false} appearence={"success"} />
        </form>
    </div>
  )
}

export default connect (null , { login }) (Login)