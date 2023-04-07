import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Order from './Orders/Order';
import Inventory from './Inventory/Inventory';
import Login from './Login/Login';
import cartProductsLoaeer from './Loaders/CartProductsLoader';
import Checkout from './Orders/Checkout/Checkout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path: "/",
        element:<Shop></Shop>
      },
      {
        path:"order",
        element:<Order></Order>,
        loader: cartProductsLoaeer
      },
      {
        path:"inventory",
        element:<Inventory></Inventory>
      },
      {
        path:"checkout",
        element:<Checkout></Checkout>
      },
      {
        path:"login",
        element:<Login></Login>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
