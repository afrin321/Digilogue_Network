import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { UserContext } from '../UserContext';



function LoginPage() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [redirect, setRedirect] = React.useState(false)
  const {setUserInfo} = useContext(UserContext)

  async function login(ev) {
    ev.preventDefault();
    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({ username: username, password: password}),
      headers: {'Content-Type': 'application/json'},
      credentials: 'include',
    })
    console.log(response)
      if (response.ok) {
      response.json().then((userInfo) => {
        setUserInfo(userInfo)
        setRedirect(true)
      })
      
      //console.log(JSON.stringify(creds))   
    } else {
      alert('Wrong credentials')
    }

  }

  if (redirect) {
    return <Navigate to="/" />
  }

  return (
      <form className='login' onSubmit={login}>
        <h1>Login</h1>
        <input 
          type='text' 
          placeholder='username' 
          value={username} 
          onChange={ev => setUsername(ev.target.value)}
        />
        <input 
          type='password' 
          placeholder='password' 
          value={password} 
          onChange={ev => setPassword(ev.target.value)}
        />
        <button>Login</button>
      </form>
  )
}

export default LoginPage