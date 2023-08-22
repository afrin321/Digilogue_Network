import React from 'react'

function RegisterPage() {
  const [creds, setCreds] = React.useState({
    username: '',
    password: ''
  })

  async function register(ev) {
    ev.preventDefault();
    const response = await fetch('http://localhost:4000/register', {
      method: 'POST',
      body: JSON.stringify(creds),
      headers: {'Content-Type': 'application/json'}
    })
    console.log(response)
    if (response.status === 200) {
      alert('Registration successful')   
      //console.log(JSON.stringify(creds))   
    } else {
      alert('Registration failed')
      console.log(response)
    }
  }

  return (
    <form className='register' onSubmit={register}>
        <h1>Register</h1>
        <input 
          type='text' 
          placeholder='username' 
          onChange={ev => setCreds(prev => ({...prev, username: ev.target.value}))} 
          value={creds.username}
        />
        <input 
          type='password' 
          placeholder='password' 
          onChange={ev => setCreds(prev => ({...prev, password: ev.target.value}))}
          value={creds.password}
        />
        <button>Register</button>
    </form>
  )
}

export default RegisterPage