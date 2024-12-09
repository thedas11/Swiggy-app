import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerUI from "./Shim";
import MenuCategory from "./MenuCategory";
import { Menu_API } from "../util/variable";
import useRestaurantfetch from "../util/useRestauantFetch";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const[showIndex, setShowIndex] =useState(null)

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

  if (restMenu === null) {
    return <ShimmerUI />;
  }

  // const {name, costForTwoMessage} = typemenus?.cards[2]?.card?.card?.info

  // const type = typemenus?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.slice(1)

  const { name, costForTwoMessage } = restMenu?.cards[2]?.card?.card?.info;
  const type =
    restMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (cat) => {
        return (
          cat?.card?.card?.["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

    console.log(type)


  return (


    <div className="text-center bg-cyan-50 ">



      {console.log(type)}

      <h2 className="font-bold my-6 text-3xl">{name}</h2>

      <p className="font-bold text-lg"> {restMenu?.cards[2]?.card?.card?.info.cuisines.join(',')} : {costForTwoMessage}</p>


      <div className="menu-box">
        {type?.map((types, index) => {
          return (
            <MenuCategory
              key={index}
              types={types}
              menu={types?.card?.card?.itemCards}

              // showItems = {index === showIndex ? "true":"false"}

              // ShowItemsfunc = {()=>setShowIndex(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
