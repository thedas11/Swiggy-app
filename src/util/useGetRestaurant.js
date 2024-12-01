import { useEffect, useState } from "react"

function useGetRestaurant () {
const [restData, setRestData ] = useState(null)

useEffect(()=>{

    getRest()
},[])

 const getRest= async ()=>{
    const data = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

    const json = await data.json()
console.log("fetched data: ",json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants)
    setRestData(json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants)

 }
    
 return restData;



} 

export default useGetRestaurant;