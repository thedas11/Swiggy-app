// import resData from "../util/variable";
import CardComponent from "./CardComponent";
import { useState, useEffect}  from "react";
import ShimmerUI from "./Shim";
import { Link } from "react-router-dom";
import useGetRestaurant from "../util/usegetRestaurant";

const Body = () => {
   const [restData, setrestData] = useState([]);

   const[filtrest, setFiltrest] = useState([])


   const [searchvalue, setsearchvalue] = useState("");
 

  // const filterResturantData = restData;


  useEffect(() => {
    call();
  }, []);

  const call = async () => {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    let json = await data.json();
    setrestData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFiltrest(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  
  };
  
    if (filtrest?.length===0 )
    {

      return(
        <>

      {console.log(restData)}
        <ShimmerUI />
      </>
      )
    } 
    
       else {



    return (

      <div className="body-elem bg-green-50">
        {/* {console.log("body rendering")};{console.log(filtrest)} */}

        {console.log(restData)}
      
        <div className="filter flex ">

          <div className="top-rated p-8">
          <button className=" px-4 py-1 m-2 bg-gray-200 rounded-lg "
            onClick={() => {
              const filteredrest = restData.filter(
                (filrest) => filrest?.info?.avgRating > 4.3
              );

              setFiltrest(filteredrest);
            }}
          
          >
            Top rated restaurant
          </button>
          </div>
         <div className="search m-4 p-4 ">
          <input
            type="text"
            className=" border border-solid border-black"
            value={searchvalue}
            onChange={(e) => {
              setsearchvalue(e.target.value);
              const filtersearch = restData.filter((filterrest) => {
                return (filterrest?.info?.name
                  .toLowerCase()
                  .includes(searchvalue.toLowerCase())); // show restaursnts on the basis of the letters
              });
              setFiltrest(filtersearch);
            }}
          />
          <button className=" px-4 py-1 m-2 bg-green-100 "
            onClick={() => {
              const filtersearch = restData.filter((filterrest) => {
                return filterrest?.info?.name
                  .toLowerCase()
                  .includes(searchvalue.toLowerCase()); // converting name into lower case and then
                // checking for lower case includes
              });

              setFiltrest(filtersearch);
            }}
          >
            Search
          </button>
          </div>
        </div>
        <div className="res-card-cont flex flex-wrap">
          {filtrest?.map((restaurant) => (
            <Link
              to={"/restaurants/" + restaurant?.info?.id}
              
            >
              {console.log(restaurant)}

  
              <CardComponent name={restaurant} key={restaurant?.info?.id} id="restaurant?.info?.id" />
            </Link>
            //this link's id will be sent to the url and on the routing on it will see /restauants:resid and the component based on the path
            // will rendered and the param will have the id which will be sent to the api for fetching
          ))}
        </div>
      </div>
    );
  }
};
export default Body;
