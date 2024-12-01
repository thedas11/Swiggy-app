 import { useEffect, useState } from"react";
import { useParams } from "react-router-dom";
import ShimmerUI from "./Shim";
import Menu from "./Menu"
import { Menu_API } from "../util/variable";
import useRestaurantfetch from "../util/useRestauantFetch";


const RestaurantMenu = () => {
const {resId} = useParams();

// using custom Hook
const restMenu = useRestaurantfetch(resId);


// without using custom hook
// const [typemenus, settypemenus] = useState([])

// useEffect(() => {
//   callmenu();
// }, []);

// const callmenu = async () => {
//   let data = await fetch (Menu_API + resId)
    
//   let json = await data.json();

//   let json2 = json.data

//   settypemenus(json2);
// }
 /////// WIthout using custom Hooks
 

 

    // const menu = (json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
    // setmenus(menu)
   
    // const type = (json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.slice(1));
    // settypemenus(type);
    // setrestdetails(json?.data?.cards[2])

   ///////// Without Using custom Hooks

  if (restMenu === null ) {
    return <ShimmerUI />;
  }

  

  // const {name, costForTwoMessage} = typemenus?.cards[2]?.card?.card?.info

  // const type = typemenus?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.slice(1)

const {name,costForTwoMessage} =restMenu?.cards[2]?.card?.card?.info
const type = restMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.slice(1)

  return(

    
  
   
    <div className="res-menus">
    <h2>{name}</h2>
    <p>{costForTwoMessage}</p>
      <div className="menu-box">
        
      {type?.map((types,index) => {
       return <Menu key={index} types = {types}  menu={types?.card?.card?.itemCards} />
        
        })
      }

      
      </div>
    </div>
  );
  }

export default RestaurantMenu
