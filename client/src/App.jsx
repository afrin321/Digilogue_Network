import { React, useState } from 'react'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Layout from './Layout'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { UserContextProvider } from './UserContext'
import CreatePost from './pages/CreatePost'
import PostPage from './pages/PostPage'
import EditPost from './pages/EditPost'

function App() {

  return (
      <UserContextProvider>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={
                <HomePage   />
            }>       
            </Route>
            <Route path='/login' element={
              <LoginPage/>
            }></Route>
            <Route path='/register' element={
              <RegisterPage/>
            }></Route>
            <Route path='/create' element={
              <CreatePost/>
            }></Route>
            <Route path='/post/:id' element={<PostPage/>}>
            </Route>
            <Route path='/edit/:id' element={<EditPost/>}>
            </Route>
          </Route>
          
        </Routes>
      </UserContextProvider>
    
    
    
  )
}

export default App
