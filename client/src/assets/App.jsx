import { React, useState } from 'react'
import './App.css'

function App() {

  return (
    <main>
      <header>
        <a href='' className='logo'>MyBlog</a>
        <nav>
        <a href='' >Login</a>
        <a href='' >Register</a>
        </nav>
      </header>
      <div className='entries'>
        <div className='post'>
          <img src='https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=911&q=80' />
          <div className='texts'>
            <h2>Gateaway</h2>
            <p>Craving a vaaction. Cant wait to go back. Nature retreat.</p>
          </div>
          
        </div>
      </div>
    </main>
  )
}

export default App
