import React, {lazy, Suspense} from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Restomenu from "./components/RestoMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Shimmer from "./components/Shimmer";
import CartDetails from "./components/CartDetails.js";
import PaymentPage from "./components/PaymentPage";
import Contact from "./components/Header";



const AppLayout = ()  => {
    return( 
        <p>
      <Header />
      <Outlet />
      </p>
    )    
    }

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [ 
      {
        path: "/",
        element: <Body />,
      },
      {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element:<Contact />,
    },
    {
      path: "/restaurant",
      element: <Restomenu />,
    },
    {
      path: "/restaurant/next",
      element: <CartDetails />,
    },
    {
      path: "/restaurant/next/payment",
      element: <PaymentPage />,
    }
  ],
    errorElement: <Error />,
  },

]
);
    
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);