import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Root from './MainLayout/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';

import AuthProvider from './AuthProvider/AuthProvider.jsx';
import About from './Components/About/About.jsx';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root> </Root>,
    children:[
      {
        path:'/',
        element:<Home>
       
          </Home>
      }, 
     {
      path:'/login',
      element:<Login></Login>
     }, 
     {
      path:"/register", 
      element:<Register></Register>
     },
     {
      path:'/about',
      element:<ProtectedRoute><About></About></ProtectedRoute>
     }
    ]
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <AuthProvider>
 <RouterProvider router={router} />
 </AuthProvider>
  </StrictMode>,
)
