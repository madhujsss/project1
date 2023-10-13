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
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import UserContext from "./utils/UserContext";
import { useCallback, useEffect, useState } from "react";

const AppLayout = ()  => {

  const [userName, setUserName] = useState();

  //authentication
  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      name: "Madhu",
    };
    setUserName(data.name);
  }, []);
    return( 
      <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
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
    },
    {
      path: "/cart",
        element: <Cart />,
    },
    {
      path: "/payment",
      element: <PaymentPage />,
    }
  ],
    errorElement: <Error />,
  },

]
);
    
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);