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
// wrapping the whole app layout in UserCOntext so that whenever the value changes it gets uptated to all the component it is wrapping in
  return (

    <Provider store={appStore}>   {/**connected the redux store to the react application */} 

    <UserContext.Provider value={{LoggedInUser:userName, setUserName}}>
      {/** we can have nested Provider also and the ones that get nestes provided will get hte value specified on that value */} 
    <div className="App-body">
     <Header />
     <Outlet />
    </div>

     </UserContext.Provider >

     </Provider>
  );
}
 
// for routing to different pages we use: this will take us to the corresponding pages

// const appRouter1 = ([{

//   path:"/",
//   element: <Applayout />

// },
// {
//   path: "/about",
//   element: <About />

// },

// {
//   path: "/contact",
//   element: <ContactUs />
// }])

// this will act as a single page application when we want to show the different 
//pages to a single page by keeping something intact i.e. in the Applayout itself(Header intact).

//this is child routing
const appRouter2 = createBrowserRouter([
  {

    path: "/",
    element : <Applayout />, 
    errorElement: <Error />      ,                                 //parent and below all are child
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
