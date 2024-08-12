
import './App.css';

import Home from './Components/Home/Home';
import LastestProject from './Components/Lastest Project/lastest Project';
import Layout from './Components/Layout/Layout';
import Login from './Components/Login/Login';
import MyProjects from './Components/My Projects/MyProjectes';
import Register from './Components/Register/Register';
import{createBrowserRouter, createHashRouter, Navigate, RouterProvider}from'react-router-dom'
import Updates from './Components/Updates/Updates';
import Profile from './Components/Profile/Profile';
import {AuthContextProvider} from './Contexts/AuthContext';
import ProtectedRoute from './Components/ProtectedRoutes/ProtectedRoute';
import AuthProtectedRoute from './Components/ProtectedRoutes/AuthProtectedRoute';


function App() {

  // * Create Routes
const router=createHashRouter([
  {path:'',element:<Layout/>,children:[
    {path:'register',element:<AuthProtectedRoute><Register/></AuthProtectedRoute>},
    {path:'login',element:<AuthProtectedRoute><Login/></AuthProtectedRoute>},
    {path:'',element:<Navigate to={'home'}/>},

    
    {path:'home',element:<ProtectedRoute><Home/></ProtectedRoute>},
    {path:'My Projectes',element:<ProtectedRoute><MyProjects/></ProtectedRoute>},
    {path:'lastest Project',element:<ProtectedRoute><LastestProject/></ProtectedRoute>},
    {path:'updates',element:<ProtectedRoute><Updates/></ProtectedRoute>},
    {path:'profile',element:<ProtectedRoute><Profile/></ProtectedRoute>}
  ]}
])


  return <>
  <AuthContextProvider>
  <RouterProvider router={router}></RouterProvider>
  </AuthContextProvider>
 
  </>
}

export default App;
