import React, { useContext } from 'react';
import { DataContext } from '../../AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
  const {user}=useContext(DataContext)
  if(user){
return children 
  }
  else{
   return  <Navigate to={'/login'}></Navigate>
  }
};

export default ProtectedRoute;