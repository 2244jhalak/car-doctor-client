import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Layout/Root';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './provider/AuthProvider';
import Bookings from './components/Bookings/Bookings';
import PrivateRoute from './Routes/PrivateRoute';
import MyOrder from './components/MyOrder/MyOrder';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/bookings/:id",
        element:<PrivateRoute><Bookings></Bookings></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/car/${params.id}`)
      },
      {
        path:"/my",
        element:<PrivateRoute>
          <MyOrder></MyOrder>
        </PrivateRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router}></RouterProvider></AuthProvider>
  </React.StrictMode>,
)
