import { Card_LOGO } from "../util/logo";
import { useContext } from "react";
import UserContext from "../util/UserContext";

const CardComponent = (props) => {

  const {LoggedInUser}  = useContext(UserContext)

    const { name } = props;
    const{cloudinaryImageId} = name?.info

    return (
      <div className="m-4  w-[250px] h-[450px] bg-slate-100  hover:bg-slate-400 ">

          
        
        <img
          className="card-img rounded-lg px-1 py-1  "
          src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId } />
        <div className="Menu-details m-1 pr-5 ">
        <h2 className="font-bold text-lg">{name?.info?.name}</h2>
        <p className="text-md">{name?.info?.costForTwo}</p>
        <p className="text md">avgrating:{name?.info?.avgRating}</p>
        <p className="text-xs">{name?.info?.cuisines.join(",")}</p>
        <p className="text-sm">{name?.info?.sla?.deliveryTime} mins</p>
        <p>{LoggedInUser}</p>
        </div>
      </div>
    );
};

export default CardComponent;


export const withPromotedLabel = (CardComponent) =>{

  return()=>{

    <div>
    <label> Promoted </label>
    <CardComponent />
    </div>
  }
};