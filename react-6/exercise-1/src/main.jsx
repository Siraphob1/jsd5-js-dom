import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/style/index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from './ErrorPage'
import SignupPage from './Signup'
import LoginPage from './LoginPage'


const router = createBrowserRouter([
  // insert your path here
  {
    path: "/",
    element: <App />,    
   
  }, 
  {
    path: "/signup",
    element: <SignupPage/>,       
  },
  {
    path: "/login",
    element: <LoginPage/>,       
  },
  {
    path: "/error",
    element: <ErrorPage/>,       
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
