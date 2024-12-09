import { useState } from "react";
import { head_LOGO } from "../util/logo";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../util/UserContext";

import { useSelector } from "react-redux";   // to read the data fo the store

const Header = () => {

  const[login,setLogin] = useState("Login");
  
  const{LoggedInUser, setUserName} = useContext(UserContext);

  const cartItems = useSelector((store)=> store.cart.items)


  const handleClick = () => {

   if(login=== "Login") {
    setLogin("Logout")
    setUserName("hi User")   //controling the state variable of app.js

   }

   else {
   setLogin("Login") 
   setUserName(" ")    //controling the state variable of app.js



  }
}

    return (
      <div className="flex justify-between bg-pink-200 shadow-lg m-2 ">
        <div className="head-logo">
          <img
            className="w-40 "
            src={head_LOGO}
          />
        </div>
  
        <div className="flex items-center">
          <ul className="flex p-4 m-4 gap-4 ">
            <Link to ="/Body"><li>Home</li></Link>  {/** link is used so that when we click the whole page doesn't refresh just the page comes.  */} 
            <Link to="/about"><li>AboutUS</li></Link>
            <Link to="/contact"><li>ContactUs</li></Link>
           <Link to="/cart"> <li className="text-lg" >Cart({cartItems.length})items</li> </Link>
            <li> <button onClick={handleClick}> {login} </button> </li>

            <li>{LoggedInUser}</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;