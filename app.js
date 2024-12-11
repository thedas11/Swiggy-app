import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

import Body from "./src/components/Body";
import Header from "./src/components/Header";
import ContactUs from "./src/components/ContactUs";
import Error from "./src/components/Error";

import Menu from "./src/components/MenuCategory";

import RestaurantMenu from "./src/components/RestaurantMenu";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/components/About";

import UserContext from "./src/util/UserContext";
import { Provider } from "react-redux";
import appStore from "./src/util/appStore";
import Cart from "./src/components/Cart";

function Applayout() {
  const [userName, setUserName] = useState("")

  return (

    <Provider store={appStore}>   

    <UserContext.Provider value={{LoggedInUser:userName, setUserName}}>
  
    <div className="App-body">
     <Header />
     <Outlet />
    </div>

     </UserContext.Provider >

     </Provider>
  );
}
 

const appRouter2 = createBrowserRouter([
  {

    path: "/",
    element : <Applayout />, 
    errorElement: <Error />      ,                                 
    children: [{ 
      
      path: "/Body",
      element: <Body />
    },
    {

      path: "/about",
      element : <About />
    },
    {

    path: "/restaurants/:resId",
    element:<RestaurantMenu />
    },
    {
path:"/menu",
element:<Menu />
    },
  {

    path:"/contact",
    element:<ContactUs />
  },
{

  path: "/cart",
  element:<Cart />
}],


    
  }
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter2} />);
