import { useEffect, useState } from "react"

function useGetRestaurant () {
const [restData, setRestData ] = useState(null)

useEffect(()=>{

    getRest()
},[])

 const getRest= async ()=>{
    const data = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

    const json = await data.json()
console.log("fetched data: ",json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants)
    setRestData(json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants)


 }
    
 return restData;



} 

export default useGetRestaurant;