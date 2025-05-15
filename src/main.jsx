import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from './component/Home.jsx';
import Roots from './pages/Roots.jsx';
import AddCoffee from './component/AddCoffee.jsx';
import UpdataCoffee from './component/UpdataCoffee.jsx';
import ErrorPage from './component/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    errorElement:<ErrorPage></ErrorPage>,
    children: [

      {

        path: "/",
        Component: Home,
        
      },
      {
        path: "/add-coffee",
        Component: AddCoffee
      },
      {
        path: "/update-coffee",
        Component: UpdataCoffee
      }


    ]

  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
