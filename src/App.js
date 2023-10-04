import React, {lazy, Suspense} from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Restomenu from "./components/RestoMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { lazy } from "react";
import Shimmer from "./components/Shimmer";



const AppLayout = ()  => {
    return( 
        <div>
      <Header />
      <Outlet />
        </div>
    )    
    }

const  Contact = lazy(() => import("./components/Contact"));
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
      element:<Suspense fallback={<Shimmer/>}><Contact /></Suspense> ,
    },
    {
      path: "/restaurant",
      element: <Restomenu />,
    }
  ],
    errorElement: <Error />,
  },

]
);
    
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);