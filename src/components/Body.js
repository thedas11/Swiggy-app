// import resData from "../util/variable";
import CardComponent from "./CardComponent";
// import { useState, useEffect } from "react";
import ShimmerUI from "./Shim";
import { Link } from "react-router-dom";

import useGetRestaurant from "../util/usegetRestaurant";

const Body = () => {
  // const [restData, setrestData] = useState([]);
  // const [filtrest, setfiltrest] = useState([]);
  // const [searchvalue, setsearchvalue] = useState("");

  
   const restData = useGetRestaurant()

 

  // const filterResturantData = restData;


  // useEffect(() => {
  //   call();
  // }, []);

  // const call = async () => {
  //   let data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   );

  //   let json = await data.json();
  //   // console.log(json)

  //   let jsondata = [
  //     // extracted from the json
  //     {
  //       info: {
  //         id: "432976",
  //         name: "KFC",
  //         cloudinaryImageId:
  //           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUecPGGLxs-PX0vv_kH6PVykbvLXD1-TbY_g&s",
  //         locality: "Double Road",
  //         areaName: "Shanti Nagar",
  //         costForTwo: "₹400 for two",
  //         cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
  //         avgRating: 4.3,
  //         parentId: "547",
  //         avgRatingString: "4.3",
  //         totalRatingsString: "3.5K+",
  //         sla: {
  //           deliveryTime: 33,
  //           lastMileTravel: 1.9,
  //           serviceability: "SERVICEABLE",
  //           slaString: "30-35 mins",
  //           lastMileTravelString: "1.9 km",
  //           iconType: "ICON_TYPE_EMPTY",
  //         },
  //         availability: {
  //           nextCloseTime: "2024-11-12 23:00:00",
  //           opened: true,
  //         },
  //         badges: {},
  //         isOpen: true,
  //         type: "F",
  //         badgesV2: {
  //           entityBadges: {
  //             imageBased: {},
  //             textBased: {},
  //             textExtendedBadges: {},
  //           },
  //         },
  //         aggregatedDiscountInfoV3: {
  //           header: "ITEMS",
  //           subHeader: "AT ₹179",
  //         },
  //         loyaltyDiscoverPresentationInfo: {
  //           logoCtx: {
  //             text: "BENEFITS",
  //             logo: "v1634558776/swiggy_one/OneLogo_3x.png",
  //           },
  //           freedelMessage: "FREE DELIVERY",
  //         },
  //         differentiatedUi: {
  //           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //           differentiatedUiMediaDetails: {
  //             lottie: {},
  //             video: {},
  //           },
  //         },
  //         reviewsSummary: {},
  //         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //         restaurantOfferPresentationInfo: {},
  //         externalRatings: {
  //           aggregatedRating: {
  //             rating: "--",
  //           },
  //         },
  //         ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  //       },
  //       analytics: {
  //         context: "seo-data-4614ee4f-f01c-465a-b2e4-31f5787d0c76",
  //       },
  //       cta: {
  //         link: "https://www.swiggy.com/city/bangalore/kfc-double-road-shanti-nagar-rest432976",
  //         type: "WEBLINK",
  //       },
  //     },
  //     {
  //       info: {
  //         id: "77949",
  //         name: "Burger King",
  //         cloudinaryImageId:
  //           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfg9B6xzfanVTpi-C4uuDtjNfBxtZA9KA57w&s",
  //         locality: "Gandhi Bazar",
  //         areaName: "Basavanagudi",
  //         costForTwo: "₹350 for two",
  //         cuisines: ["Burgers", "American"],
  //         avgRating: 4.3,
  //         parentId: "166",
  //         avgRatingString: "4.3",
  //         totalRatingsString: "32K+",
  //         sla: {
  //           deliveryTime: 31,
  //           lastMileTravel: 3,
  //           serviceability: "SERVICEABLE",
  //           slaString: "30-35 mins",
  //           lastMileTravelString: "3.0 km",
  //           iconType: "ICON_TYPE_EMPTY",
  //         },
  //         availability: {
  //           nextCloseTime: "2024-11-12 23:59:00",
  //           opened: true,
  //         },
  //         badges: {
  //           imageBadges: [
  //             {
  //               imageId: "Rxawards/_CATEGORY-Burger.png",
  //               description: "Delivery!",
  //             },
  //           ],
  //         },
  //         isOpen: true,
  //         type: "F",
  //         badgesV2: {
  //           entityBadges: {
  //             imageBased: {
  //               badgeObject: [
  //                 {
  //                   attributes: {
  //                     description: "Delivery!",
  //                     imageId: "Rxawards/_CATEGORY-Burger.png",
  //                   },
  //                 },
  //               ],
  //             },
  //             textBased: {},
  //             textExtendedBadges: {},
  //           },
  //         },
  //         aggregatedDiscountInfoV3: {
  //           header: "60% OFF",
  //           subHeader: "UPTO ₹120",
  //         },
  //         loyaltyDiscoverPresentationInfo: {
  //           logoCtx: {
  //             text: "BENEFITS",
  //             logo: "v1634558776/swiggy_one/OneLogo_3x.png",
  //           },
  //           freedelMessage: "FREE DELIVERY",
  //         },
  //         differentiatedUi: {
  //           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //           differentiatedUiMediaDetails: {
  //             lottie: {},
  //             video: {},
  //           },
  //         },
  //         reviewsSummary: {},
  //         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //         restaurantOfferPresentationInfo: {},
  //         externalRatings: {
  //           aggregatedRating: {
  //             rating: "--",
  //           },
  //         },
  //         ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  //       },
  //       analytics: {
  //         context: "seo-data-4614ee4f-f01c-465a-b2e4-31f5787d0c76",
  //       },
  //       cta: {
  //         link: "https://www.swiggy.com/city/bangalore/burger-king-gandhi-bazar-basavanagudi-rest77949",
  //         type: "WEBLINK",
  //       },
  //     },
  //     {
  //       info: {
  //         id: "435405",
  //         name: "Chaayos Chai+Snacks=Relax",
  //         cloudinaryImageId:
  //           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq3XsodCK-lNfUHuHdxGZV--0mvmUFIiaSLQ&s",
  //         locality: "Cunningham Road",
  //         areaName: "RT Nagar",
  //         costForTwo: "₹250 for two",
  //         cuisines: [
  //           "Bakery",
  //           "Beverages",
  //           "Chaat",
  //           "Desserts",
  //           "Home Food",
  //           "Italian",
  //           "Maharashtrian",
  //           "Snacks",
  //           "Street Food",
  //           "Sweets",
  //         ],
  //         avgRating: 4.6,
  //         parentId: "281782",
  //         avgRatingString: "4.6",
  //         totalRatingsString: "1.7K+",
  //         sla: {
  //           deliveryTime: 27,
  //           lastMileTravel: 3.8,
  //           serviceability: "SERVICEABLE",
  //           slaString: "25-30 mins",
  //           lastMileTravelString: "3.8 km",
  //           iconType: "ICON_TYPE_EMPTY",
  //         },
  //         availability: {
  //           nextCloseTime: "2024-11-12 23:00:00",
  //           opened: true,
  //         },
  //         badges: {
  //           imageBadges: [
  //             {
  //               imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
  //               description: "Delivery!",
  //             },
  //           ],
  //         },
  //         isOpen: true,
  //         type: "F",
  //         badgesV2: {
  //           entityBadges: {
  //             imageBased: {
  //               badgeObject: [
  //                 {
  //                   attributes: {
  //                     description: "Delivery!",
  //                     imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
  //                   },
  //                 },
  //               ],
  //             },
  //             textBased: {},
  //             textExtendedBadges: {},
  //           },
  //         },
  //         aggregatedDiscountInfoV3: {
  //           header: "ITEMS",
  //           subHeader: "AT ₹169",
  //         },
  //         loyaltyDiscoverPresentationInfo: {
  //           logoCtx: {
  //             text: "BENEFITS",
  //             logo: "v1634558776/swiggy_one/OneLogo_3x.png",
  //           },
  //           freedelMessage: "FREE DELIVERY",
  //         },
  //         differentiatedUi: {
  //           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //           differentiatedUiMediaDetails: {
  //             lottie: {},
  //             video: {},
  //           },
  //         },
  //         reviewsSummary: {},
  //         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //         restaurantOfferPresentationInfo: {},
  //         externalRatings: {
  //           aggregatedRating: {
  //             rating: "4.1",
  //             ratingCount: "371",
  //           },
  //           source: "GOOGLE",
  //           sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
  //         },
  //         ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  //       },
  //       analytics: {
  //         context: "seo-data-4614ee4f-f01c-465a-b2e4-31f5787d0c76",
  //       },
  //       cta: {
  //         link: "https://www.swiggy.com/city/bangalore/chaayos-chai-snacks-relax-cunningham-road-rt-nagar-rest435405",
  //         type: "WEBLINK",
  //       },
  //     },
  //     {
  //       info: {
  //         id: "426730",
  //         name: "Theobroma",
  //         cloudinaryImageId:
  //           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRah67X3knPJyfy2uyPY0Y5lG2Cnl4-7rgd7w&s",
  //         locality: "Lavelle Road",
  //         areaName: "Ashok Nagar",
  //         costForTwo: "₹400 for two",
  //         cuisines: ["Desserts", "Bakery", "Beverages"],
  //         avgRating: 4.7,
  //         parentId: "1040",
  //         avgRatingString: "4.7",
  //         totalRatingsString: "4.9K+",
  //         sla: {
  //           deliveryTime: 21,
  //           lastMileTravel: 2.2,
  //           serviceability: "SERVICEABLE",
  //           slaString: "20-25 mins",
  //           lastMileTravelString: "2.2 km",
  //           iconType: "ICON_TYPE_EMPTY",
  //         },
  //         availability: {
  //           nextCloseTime: "2024-11-12 23:00:00",
  //           opened: true,
  //         },
  //         badges: {
  //           imageBadges: [
  //             {
  //               imageId: "Rxawards/_CATEGORY-Desserts.png",
  //               description: "Delivery!",
  //             },
  //           ],
  //         },
  //         isOpen: true,
  //         type: "F",
  //         badgesV2: {
  //           entityBadges: {
  //             imageBased: {
  //               badgeObject: [
  //                 {
  //                   attributes: {
  //                     description: "Delivery!",
  //                     imageId: "Rxawards/_CATEGORY-Desserts.png",
  //                   },
  //                 },
  //               ],
  //             },
  //             textBased: {},
  //             textExtendedBadges: {},
  //           },
  //         },
  //         aggregatedDiscountInfoV3: {
  //           header: "20% OFF",
  //           discountTag: "FLAT DEAL",
  //         },
  //         loyaltyDiscoverPresentationInfo: {
  //           logoCtx: {
  //             text: "BENEFITS",
  //             logo: "v1634558776/swiggy_one/OneLogo_3x.png",
  //           },
  //           freedelMessage: "FREE DELIVERY",
  //         },
  //         differentiatedUi: {
  //           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //           differentiatedUiMediaDetails: {
  //             lottie: {},
  //             video: {},
  //           },
  //         },
  //         reviewsSummary: {},
  //         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //         restaurantOfferPresentationInfo: {},
  //         externalRatings: {
  //           aggregatedRating: {
  //             rating: "4.1",
  //             ratingCount: "420",
  //           },
  //           source: "GOOGLE",
  //           sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
  //         },
  //         ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  //       },
  //       analytics: {
  //         context: "seo-data-4614ee4f-f01c-465a-b2e4-31f5787d0c76",
  //       },
  //       cta: {
  //         link: "https://www.swiggy.com/city/bangalore/theobroma-lavelle-road-ashok-nagar-rest426730",
  //         type: "WEBLINK",
  //       },
  //     },
  //     {
  //       info: {
  //         id: "124178",
  //         name: "Starbucks Coffee",
  //         cloudinaryImageId:
  //           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdG13mG4RcghESCMOt_zBAjhuheJRTXrafLQ&s",
  //         locality: "Lavelle Road",
  //         areaName: "Lavelle Road",
  //         costForTwo: "₹400 for two",
  //         cuisines: [
  //           "Beverages",
  //           "Cafe",
  //           "Snacks",
  //           "Desserts",
  //           "Bakery",
  //           "Ice Cream",
  //         ],
  //         avgRating: 4.6,
  //         parentId: "195515",
  //         avgRatingString: "4.6",
  //         totalRatingsString: "2.2K+",
  //         sla: {
  //           deliveryTime: 23,
  //           lastMileTravel: 2.3,
  //           serviceability: "SERVICEABLE",
  //           slaString: "20-25 mins",
  //           lastMileTravelString: "2.3 km",
  //           iconType: "ICON_TYPE_EMPTY",
  //         },
  //         availability: {
  //           nextCloseTime: "2024-11-12 23:59:00",
  //           opened: true,
  //         },
  //         badges: {
  //           textExtendedBadges: [
  //             {
  //               iconId: "guiltfree/GF_Logo_android_3x",
  //               shortDescription: "options available",
  //               fontColor: "#7E808C",
  //             },
  //           ],
  //         },
  //         isOpen: true,
  //         type: "F",
  //         badgesV2: {
  //           entityBadges: {
  //             imageBased: {},
  //             textBased: {},
  //             textExtendedBadges: {
  //               badgeObject: [
  //                 {
  //                   attributes: {
  //                     description: "",
  //                     fontColor: "#7E808C",
  //                     iconId: "guiltfree/GF_Logo_android_3x",
  //                     shortDescription: "options available",
  //                   },
  //                 },
  //               ],
  //             },
  //           },
  //         },
  //         aggregatedDiscountInfoV3: {
  //           header: "30% OFF",
  //           subHeader: "UPTO ₹75",
  //         },
  //         loyaltyDiscoverPresentationInfo: {
  //           logoCtx: {
  //             text: "BENEFITS",
  //             logo: "v1634558776/swiggy_one/OneLogo_3x.png",
  //           },
  //           freedelMessage: "FREE DELIVERY",
  //         },
  //         differentiatedUi: {
  //           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //           differentiatedUiMediaDetails: {
  //             lottie: {},
  //             video: {},
  //           },
  //         },
  //         reviewsSummary: {},
  //         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //         restaurantOfferPresentationInfo: {},
  //         externalRatings: {
  //           aggregatedRating: {
  //             rating: "4.5",
  //             ratingCount: "1.9K+",
  //           },
  //           source: "GOOGLE",
  //           sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
  //         },
  //         ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  //       },
  //       analytics: {
  //         context: "seo-data-4614ee4f-f01c-465a-b2e4-31f5787d0c76",
  //       },
  //       cta: {
  //         link: "https://www.swiggy.com/city/bangalore/starbucks-coffee-lavelle-road-rest124178",
  //         type: "WEBLINK",
  //       },
  //     },
  //     {
  //       info: {
  //         id: "69274",
  //         name: "Chai Point",
  //         cloudinaryImageId:
  //           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9_u653_nuHswM9-DUsqg6884eRT_zDGdUUQ&s",
  //         locality: "Ashok Nagar",
  //         areaName: "Ashok Nagar",
  //         costForTwo: "₹150 for two",
  //         cuisines: [
  //           "Bakery",
  //           "Beverages",
  //           "Maharashtrian",
  //           "Snacks",
  //           "Street Food",
  //           "South Indian",
  //           "Punjabi",
  //           "Chaat",
  //           "Indian",
  //           "American",
  //         ],
  //         avgRating: 4.6,
  //         parentId: "1607",
  //         avgRatingString: "4.6",
  //         totalRatingsString: "9.5K+",
  //         sla: {
  //           deliveryTime: 31,
  //           lastMileTravel: 3.5,
  //           serviceability: "SERVICEABLE",
  //           slaString: "30-35 mins",
  //           lastMileTravelString: "3.5 km",
  //           iconType: "ICON_TYPE_EMPTY",
  //         },
  //         availability: {
  //           nextCloseTime: "2024-11-12 23:00:00",
  //           opened: true,
  //         },
  //         badges: {
  //           imageBadges: [
  //             {
  //               imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
  //               description: "Delivery!",
  //             },
  //           ],
  //         },
  //         isOpen: true,
  //         type: "F",
  //         badgesV2: {
  //           entityBadges: {
  //             imageBased: {
  //               badgeObject: [
  //                 {
  //                   attributes: {
  //                     description: "Delivery!",
  //                     imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
  //                   },
  //                 },
  //               ],
  //             },
  //             textBased: {},
  //             textExtendedBadges: {},
  //           },
  //         },
  //         aggregatedDiscountInfoV3: {
  //           header: "ITEMS",
  //           subHeader: "AT ₹199",
  //         },
  //         loyaltyDiscoverPresentationInfo: {
  //           logoCtx: {
  //             text: "BENEFITS",
  //             logo: "v1634558776/swiggy_one/OneLogo_3x.png",
  //           },
  //           freedelMessage: "FREE DELIVERY",
  //         },
  //         differentiatedUi: {
  //           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //           differentiatedUiMediaDetails: {
  //             lottie: {},
  //             video: {},
  //           },
  //         },
  //         reviewsSummary: {},
  //         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //         restaurantOfferPresentationInfo: {},
  //         externalRatings: {
  //           aggregatedRating: {
  //             rating: "4.1",
  //             ratingCount: "1.5K+",
  //           },
  //           source: "GOOGLE",
  //           sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
  //         },
  //         ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  //       },
  //       analytics: {
  //         context: "seo-data-4614ee4f-f01c-465a-b2e4-31f5787d0c76",
  //       },
  //       cta: {
  //         link: "https://www.swiggy.com/city/bangalore/chai-point-ashok-nagar-rest69274",
  //         type: "WEBLINK",
  //       },
  //     },
  //     {
  //       info: {
  //         id: "822315",
  //         name: "Subway",
  //         cloudinaryImageId:
  //           "data:image/jpeg;base64,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",
  //         locality: "Langford Road",
  //         areaName: "Richmond Town",
  //         costForTwo: "₹350 for two",
  //         cuisines: ["Salads", "Snacks", "Desserts", "Beverages"],
  //         avgRating: 4.4,
  //         parentId: "2",
  //         avgRatingString: "4.4",
  //         totalRatingsString: "562",
  //         sla: {
  //           deliveryTime: 22,
  //           lastMileTravel: 2.1,
  //           serviceability: "SERVICEABLE",
  //           slaString: "20-25 mins",
  //           lastMileTravelString: "2.1 km",
  //           iconType: "ICON_TYPE_EMPTY",
  //         },
  //         availability: {
  //           nextCloseTime: "2024-11-13 01:00:00",
  //           opened: true,
  //         },
  //         badges: {
  //           imageBadges: [
  //             {
  //               imageId: "Rxawards/_CATEGORY-Sandwiches.png",
  //               description: "Delivery!",
  //             },
  //           ],
  //         },
  //         isOpen: true,
  //         type: "F",
  //         badgesV2: {
  //           entityBadges: {
  //             imageBased: {
  //               badgeObject: [
  //                 {
  //                   attributes: {
  //                     description: "Delivery!",
  //                     imageId: "Rxawards/_CATEGORY-Sandwiches.png",
  //                   },
  //                 },
  //               ],
  //             },
  //             textBased: {},
  //             textExtendedBadges: {},
  //           },
  //         },
  //         aggregatedDiscountInfoV3: {
  //           header: "ITEMS",
  //           subHeader: "AT ₹119",
  //         },
  //         loyaltyDiscoverPresentationInfo: {
  //           logoCtx: {
  //             text: "BENEFITS",
  //             logo: "v1634558776/swiggy_one/OneLogo_3x.png",
  //           },
  //           freedelMessage: "FREE DELIVERY",
  //         },
  //         differentiatedUi: {
  //           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //           differentiatedUiMediaDetails: {
  //             lottie: {},
  //             video: {},
  //           },
  //         },
  //         reviewsSummary: {},
  //         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //         restaurantOfferPresentationInfo: {},
  //         externalRatings: {
  //           aggregatedRating: {
  //             rating: "--",
  //           },
  //         },
  //         ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  //       },
  //       analytics: {
  //         context: "seo-data-4614ee4f-f01c-465a-b2e4-31f5787d0c76",
  //       },
  //       cta: {
  //         link: "https://www.swiggy.com/city/bangalore/subway-langford-road-richmond-town-rest822315",
  //         type: "WEBLINK",
  //       },
  //     },
  //     {
  //       info: {
  //         id: "12808",
  //         name: "A2B - Adyar Ananda Bhavan",
  //         cloudinaryImageId:
  //           "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExMWFRUXGR8XGRgYGB0eGxodIBsYHhoeHh8eHyggGx4lGyAdIjEhKCkrLi4xHR8zODMtNygtLisBCgoKDg0OGxAQGzAlICYtLS41LS4rLS0wLS0tLjItLy0yLTU1LTUyLystLS0tLS0tLS0rLy0vLS0tLy01LS0wLf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAFBgMEAAIHAQj/xABEEAACAQIEBAQDBAgEBQMFAAABAhEDIQAEEjEFIkFRBhNhcTKBkUKhsfAUI1JicsHR4QczgpJDU6KywqPS8RUWJHOD/8QAGgEAAgMBAQAAAAAAAAAAAAAAAgQAAwUBBv/EADIRAAEEAQMCAwcEAgMBAAAAAAEAAgMRIQQSMUFRE3HwBSJhgZGhwTKx0eEj8RRCUgb/2gAMAwEAAhEDEQA/AKlSijU/OpOtZNnanzKCdtStDITvzKPScQJnkH/Dg+kr/KD8sJuSqZjIVRXSGXZx9l0PxI46qR9N+k4ZuIKFraaTHy3VatMtN0dQygwCSQDpPqDiD4o7RijmaZ6VR7Gf/EY8q5hAbCq3zj/wwLSsJEOR6gzB6xyiJ7Yk/SQT/mD3c+ntiUpaINmVj4Kn+4/hpx5TzA3Ct7Fmn/txRfiDi3mg+2398T0s0zf8ZJ9v6Yilqx+lKN5/3P8AhGIauaHQz7yI+s41NZu6H2LfhNsaVWcWhj9f64ii0ALbKD6gk4mp8PqGeZQAJPoO5OwHqSBirmc3TpUzVqtUAFgJhna0qDJgCxLQQoIsSVVlTNeIMxm30LOieRFMAe0ydUfbJLX3iwFzqXMBNWaqUaX+ZmYjoEBJ9jIRvcMcUF41lSIFaovTU1BAPqtRj92FGrk5aHMuZHrMH5t3+cYspQommVMyZ0w0iY3gLPodunyq8UhctNNMhyPLqCtHRHhu3wMoc+4X543Ic20Hv8YH9zhcbhYcAUHBYsY1AA6hzMJBKmN/SDgpSzzoRTzROq6htV5j7V7jY6v+ojlxPH7crraJyrQoMJZgi9f2j+ffEcj90/8A8R/I4jTPAA064YwDpcRqVhsGGxE2PUbg9MaMzC41fT+hwbH7rsUUTm1xwvatbT1HypgR9xxouYc7Bj/pX+mNWuSb4tU69TRpWbel/T5YMoVVqM3VW+YH9MRFZ6D/AGx+GLdDK1KjBAGdz0AJPyAxcqpQoDTVq6m/YowzezPOhPkWPpgbrlGBaDjLHsP9x/pjalw+o9kpl/RZP1gYYuE5xqp00MrPYgeY3+ouNAP8Kri3xXiHkU9WcHSRTLlmNyLKZCCxvPQwDBGFjqs7Wgkq/wD4+LcaSmOB17zS0/xPp/7oxF/9Lq9FU+1VD+BOKHE/FtRzFFEor+6oLfNiJn1Gn2wGqcQrE81WofdmP4nDLd1ZS7tt0ExPkqg3R+35timyejfd/wC3A5syQA0me8meuJsrxIiBcjb89/uxLKLZRVk0uwb5t/bEbUvQ/X+2JhmUM6iRy8sKDqPrJEA3uNu2NRUJEjp+f5YgNoSKUBQ/kj+mM022+erEjud4+7GqEk7fcP546hWugDt9cF/C/Bxma4VrUlu5E3AvpB6E7T0EneJFOg7EfK2Ou/4ZcIpDJU80yam11SPXmC7bSCnXFOoe5sZLeVZEAXZThwwDzAqoAiLaOlgFA6AQdsWuJANpHSRPt1wM4VntfmFSogjV13+IWi9sXqdVHqAbACfw3xlxEFu3umngg2hH+IPh4ZvLwoHmLzUz2PbbYiRt69McOz+Tq0HNOsnluu4JHyIjcHvj6RqEbyesDufz/PCv4y8JfpqBpNOqgIQyCD1IbrBPa+HYn7Dng/ZUubuC4drnrP1xgb3+UYsZui9NyjrDLa8/Ig9QRcYhjDoNiwqCO6baqBlINxijx6vobL0ZvTytJW9CQ1QT7I64K5008onm5rtKUJh6p6W3Wn3c9J0ycCPDnBKueqVM5mWK03cszCA1QzcJNlUbathEAGDHJZWxt3ONALoaXGhyvclVLQqEsx2Agn5AXODtHguaifKrL2nkP0Yg4N5KqEBp5OkFQGG0CTIH2m3c+5O+CLcCzBEsyy1wN4MbdAYxize22sNBv1P4ynBo/wD05J+cyVakNVZaqD9pywUnpBiMV6OfpLJaqhm3x/1w7vwvN01L0zqaAIFib95iIvHynrgNn8qlSqaLL5NYD4kA0k9nAGkfxLEdQdxdpva8Uxo4+f8Ar+EL9KRlptBKefpdKin2qT+Jxvl3Sq6orrJt8SGN5J2MAXO9gcaV8m6sUZagZTBFrH6bR1GPQoSlmKl5Sk0Enq0A9OqF8a14tKJZ4/mjmapVPgTlpgkCFE3YREm7k9yekAQ8Gy8sFqjkkSViYM2APfefb1xBw1gqFn+0GK+4iLbxMmOsDbfDLl+D1HWEDamAeVAAAmTcjkkhjBMnsJGE5pA0EE/NDyifBamVy+XfOmktRl5AtjpnTE3gm+wHQz2wtJnamZc0qVJWLzrNOmSFn9kDpttv1mIxtkvDLO9Gm7EUWYAsAbCV1Ge8NF7Th9o8JoZCqauWesJACwFI9bnlIBOxE3+eM+SWKFxN248eXZG1pcKHCWeM8JShl/OqZhldv1Co6HUSPig6tVOD19YO+A/6JQrPpaqF5TDGRGkASbbcp6n5XxUz3EatetLMWJMyb7m5Mne204mrKozAV6rLAIBZZCkjUNdyPij2sb4aY1zRk559YVQcCtsypNIkhgyQCWBGtLhGH7QBUpMwYp9Zxrl8yukAttaLzbF7L5FP0gU5LmtQqBmgaSVVqiMpUkfEiG3Y4BUFSNl+ZH/uGHYjuG5HuxSMK4P2vxOCuVoIlPzqzaKRkKYBapBEimsjUQYBaQq9SDAxVyuWpUKS5iuoOqfJpAwanQsxBJWiDaQZYiB1ZR1WtWzlWd2gCYhUA2CgWAA2UQBgnvrARsZ1KvZ3jjOPJoJ5VM2KqSXf/wDY1tQ/dgL6dcarwoU18yudM/Cn2j8vsj1OCfC6FPLsFEGoTAJuZP52xt4o4eaGcpLU5tQSoQTynmYMs+6398KS31TDHdlHkeLmgjOVKU1U1CoJGsnlpr3g6XJI6KYgxKJxDP1c1VL1G1MxkzsNh7CwA+QFgAA9f4r8bapVoUSqg+SJWOUF5Ajtp3HbAejwjyFAStl3ZxDh1BZewuDH3YMFsQF8lUSSWcrbw/4RqVqYqKOQzzCDtYxcE3/A4XuLaS9hN97g79Ruf6YcslxHMZCktPzARMpR0MzNO+4BAHodz8sacX8NVWDVGFOloRq7EEmnZQYve/YH64qZO4PsnB4ROeNoBH0SrneGCmoY9to6kDrtP9MCHFzG2GfL8TDU2NY8kABAIFhE92NyYnA2qEe6pp7xc2HbqTi+N7hhwV00bHUWH5Up+BZlDFGrBVti32GOxnsTv069L2c7wcodSyIPXofxGAmdy7JHXqD1+nTbHS+GUVrUqdX/AJiBj21Rpb/qBn1nBmv1BVXXulJT11YkVRoqftheU/xKvr9pR8uuIMxRZG0soBgEdQQdmBFmU9CLYa+N+H9IJCzN4G1zutpBiPvnARUNNRSqhmokkowHNTaeYqD1kc1M2bcEGGBNcOqBzeyGaovB77Y+iOF8MOXyNGgACVQK525iJc/7p+uOF8PyLJnMvTcSr1aRDC6uhqKNSkgWNx3BBBggjH0Vl6mpCfQ/n1wvqjjaiiGbSxwBvLo1wF+1YnYgliD/APPpi3kaT0zqcyWBsBttfENBQj1jV+GBy7yFk9hBIO2LX/1hHVqlIhkVTIAm87el8ZTCAMnhOuBPA5VqgzuwKqQFkXmJjviZAVgEkgX7k4B0s9nqcPXA0sbafWYEfT6YYsvlWmSxmOu+GGPDzQu1U9hbylbxf4Qp5ylqVdFdQSrCw6nQw6ifoST1IPFa+WZGKOCjrYq1iDj6XbLxcCD9x7YWeM+CcnmqprVE5oAJV2WY7wbmLT6YbilLMHhUOaHZXCuAcKbOZoK7MQZeq8y2kfEZP2jZRPVhjruTyZqOKYASkgAhZhVEQouOkR1Ez7pvgigadLMVxzMStNSBeACzj2J8v/aMdH8I1hUN4OkCWjeTYfnrOMn23O+9reB+56/JNaVm1m/ujvCsuigDSQosA3X3ti/Wrj8+3T649MGQBMn649cgTNv5dseVskc/P+0ZybUQQLsD85Fx74FZnh6QzsoJMmbWn9km6me2CzOFMbyPu2xRdyzcm37wJnt9/wCOBYSD2Rttc+8S8McUfNdUapSgMx5QaZgLzMIJViBuYDRPLhfeGyuaUBV/VFjpqI1l32APXHS/EtB6ttEFqb0nseXUjFSbx8QBuOnrjmfh6izBWZhpqBk0tMMCIJ3iASD3MGLxj3HsvV+Jpv8AIcg1/Hrsk54/fsdcpf4TSQLTO5iSGWAAKh2boYmb9Vw21s8lBahWDXYgIlpIKgKoYsdZgjYWInfChlvKpA0qql6wqQqADUOh1MQdiAQB67TghlOM+SwJ8sMVGoRDGZkO+0AAcv73pi2aLeTYtJjBVWtmVauiBCkMQ66okg6WJC3JgC57E4J8c4wAHo0maG0tAMAMAoEALPSd7wARghx2rkXyTZmnop1yxXSrEkSym8X2JtYQDEYr5LhVKgn6Q7qUaNFhYGwLE9b9hB+WKi5ppxBxiu5wo8looL3w9wvLoorVmNV58woh5FO8Gd7/ACtgZnfJq5mpUpP5SmLEKCzXJAgWWADcjAfL1nLlaUwSSFki0mD1xc4VlOUkvzrzsAbrMxEAmYnoenyvLC0lzigANpooZJaWdRiWqGnSqVmqapUDyKhiOkco/wBQwseFsugDZiuv6mlEiApq1D8FIGJ5oJZh8KhjuRN6tqp5arUBL1c2VytISSSoKtWIne4p0/m/bFzIcI850yyGaVFSWYRDMf8AMef3iLHoiJO04vY7woxaYij3lUKFOvxDMF3vN2IHKij4VVRsAtlUbAYtZjOpTHl0eWBFhM/MdZ64O1KtGghp0rgTJkgE97EOwvY6kGxXUCDhWbi6FqmigmpfhASmS14ME0y2xm7HAtlb0yVa9rj8ApMlScsGZTM2gmNp6XII7f2x0fxXwetn8nQzOXAasilWXUAbi9zaVYTuN/rzrKcZbWR/ltsNaKLwCRyqh7fa7YLZDxTVoh1gKHIFmPlmerLIYfz2nYHkj2u81GNLcpd8cUn8/wAt3UaKdOWYyxPliea83nrvghwTL5cNTerUJqKNfKREwYiSL2xpx3hrZkCrU/V1I0q0fq2AuFbqh5viuNpA3CoC6t5bghqZIIJ2je3XEcPGbQdSIbY73Nu10GvxD9Kz1F2MooIVWKg9OY7zJG8/snHvj7xFXC/oxXy1I/WsYLVG3/0r7XvHphX4XxKlTXWilq3cm3qRJA+X1xa41xKjWRSCS6iCOnpN79/6YW2ObKMY4/v+02yOF0dDkZCF5vhoNMVDYSLfa7kgHp+Pa2MyHCHgPTOodQZA9jtipns2QoWWmZv2w1eG+J0/K01UDIJI7k7wZ3X0xfK6Rkd8rsMcMkpHw+6W+JJVYKrU2B1ELKET/qPxR74fvB1YLksqrG9TzAtiZiq07D97rhd4v4i86tFVopUgXVSoOpipCKdO4M37LO+G+hFNafKtOpTy5lVEBDVYVXAUdiyofbBtc4Q24UUpMAZqBusI1oXSJAK7YoZngFMhhplH3EAGeh9/6DCpxrxk+Wb9HopTcKPiYkwJMDSI0wIscVMj/iTmEtUo0nXsupT9ST+GDALhYVBeGmiia5M0qiZWqRAcVctVNtFSQRfojEAOvQw3S7jmvHDIWSlS80o4V6Kyakk3CxILC/Lf7jC3S4vluI0jTUlKollV91Pp0K9474h8EVdOYqJUJAqHmYfEtRYIPuGEg98VSYy4cKxueE/HMU8zTWvT5qbgyCIMbMpHRgZEHYjEvhfhS5ZWpapRm1JPUEe1zb78R5CvSZ6jBAruR56iNJqEhfMVZsGbQT1PnUz0OCCLpYIbjdJ9PU9f74SfH4cljgq5ryWUidPPamIiw640zXEVVSZ2N4En6CThezvEkVmYmAAJEwSel53JttjPPaoyhQ5vqaDAERJ9fbrBwPjOoovCHKYKeZdlkLM9j/W+IFre5v2J+ltsUM/SY0iPMqAfabm1aYvpiL+sYp8F4bURCqV4GrYoSdl7n83xDMcDqoIhRNpD8E1V8moN9NVWIN/jQj5DkOOicJzZNFWUqQF0mAd7jt0IIxzDgr6XamzALVXQDcAPINMk9BPKT0Dthy8K5Z/MVKuwkc0gg3JAHW9r3nbfCntzT+94iLTEGKuycqGbGkEXE736n78eOy/EzSCdgeg+d8R1EZYgco2UAXF4GIHBAUKATv6/jbtjzAAVoC0zHEbqiIQNo6gfOI98WuHEliXFhOm9wBbV2vfEapsZUiY1dT3j1kDG/EVbSVAKjcBDJ+g6yfW2CsXwiNcKpx7PlMs9aQQiO5Gr9mm5tHxcwAjbmHbHGeB56j+jmi7Q3mDTKwCHUhxMQIIBvvOGv/Fbi4o0f0RWl6xlrXWmGk+2pwAO4R+4xzrK1OWLG1wT/fbHsPY+j26X3v8AsbHl0SE8lSY6InnMiXq0wSRVtcAfrFH7OwZgBt1jvMz8Raiw1U6aK508iiY5SSSLkSx23EAHuR6Z0ooCoN78xhhaBBJCwLAjpHbHlLjdM1A2YpFiplaqEeYI21Ty1Y7mG25sajo3P56fdLOA6LV+DOpcFWaQCGZXAkkTFrndZ2k/PE/FKbov6OwKpZwsyz7WsTYTPT3wRq55K7Blz1GyQq1hVpMpGxMBqcgTfWf54mNGmu+byaL8RArF7iRYLTZgIOw9MVbJbBcEBAQTh7cvmaQFUkKFMGbBdQ3gCTYx0wWyHCjS1tUq6KCw1Spp+EmYCgmWrGOVfQMbA4rZ7jOTQk6qmaeANKKaVG3Us36xumyoT3wuca43VzLA1CAqyEpqIRAd9I7nqxljAknFzIicu+i4mM8QNdqmfddFKmP0fLJM6bEn1YqpLM3V6inrg/k0YU0ydN0TMV+di2wO4BtfSBZerTPwXDUMqpq5HJRyoqVKoI3apFapPro0Uz/Bghlch+l55ubmUSrdQ0mG9bqTG1zhbXPDQSTVA57V/v6J6AYpFch4Qp5XUa+ZWtVY6UplQQWdgJgklnJ2PqcM+Y4flMmmqnSp06rEB2YAMASJ3t22jGvDhl8vVC1PhSQztu9SBznv2Ha0bYI+IKNKsaC06m9QhiGklSrMwvPUDf1HXHlpZ3yOBe4kHnoCPIJ3ww0gUgdSsa7LTp01dT8UxOnSeYk73i25wn8a8KVqD1KupTRNwg+NVs3YwuoQwk29L4eamVXIUipqllc2LkB57CANXyH8sLHCGarm2NdoprdVqaldZBgkMO0kA7iMMaSVzNz4/wBAHbn++ij2tfSD5J9VJ6TPoKwVmdp0idydJbSf3Hm7IJV+KOoqSQZaDEwLSL/LDM2XpCv+j06y3YohSJhhbmFzAMRMWPfCrxEMXGuzRE/gfYzj0kJ3074eRSTjtBC1zWVZyAD03JAA+vuMaUskgbSawJ6adj/qO3vBxDmswxCqwBCiFI9fvOK61R2w01pDaVL3tL7RoeSNCLFR55iTIMWjpaIxYy9amtM+ZKpulNd2m99V4t6gW+YWnWnlRDrawIMncWAA3O3z6YI0+BeVz51zRG/lCDXf0Cf8MfvPHoG2wPhXyj8bb+lGPCwR6lXM1aCGgAoYPcvUkFKVMn7TkAnsuruAZ+O8f8lqmip5mYqGajyIU3JAjaGYxHW5vEAM1xQ1wwVRTpUqZ8qktwgLIrGd2dgeZzc+gAADIL32xDGDjoFS6WsjkqR3JJJM+pxsDb8MEOG10Vgw8uR9mohOo2sCJ72NtsEMnmMtVrPWqnSmv4DJOnpAggt1M29Mcc/b0wEm53cIBTdlYOpIZTII6HHTv8PMymZza64H6RTZG9KyiQV9SoLD2XCXxfM06yFqQKhTsY1EGOZiLEzaB+0BjOBuy0XdG0ujpUQjcOpYg/8ASPpgb3CyFdA88Jx8S8VqUH85LMA1CqOhg8pHqDLT+6vy6ZlKy5ijTcGzqrqRuJAI/HHJ/EfiDL8QoIVlc5UIV6YXl1QRrmIAk7+t+uH3wdmqa5alRFRXCKE1giGi0i/3dMJTN2NDT8fon2ZNhWKlBKjeSYSvGrqZgxNrXHXG9ShUpBU8xQWsRcuw9JP8sa8Z4XXZ1rUK2koCIImx3BgiRhQz3FAmdWvnEqg0l0qAQaZYFrzv1tb3woG9KTIo5tP2U1D4iQIgiZub/kWxXbKVizFazKpYwqhAAO3wyfc4D8N8c5VuXXELYagRH1N+l8aZnxHVZppaUToBUT3k9jjjiAMgrrGuJxSReM8OqINUsUG9oZf4hJETbUCRtMEgYN+F/FdNop5gxVUDRVqfA8fCKhNgw2DGx6kG7dL4hwVG6C/9I+kdMcQ8XcDOWzD0r6bMksTynp8jI+U9cbU8DJmbJFmskLDuauw8P4pWZilVGBgOGJhTFmm3L3iSD6Ys0s9lnGtalMgEAnULFiY62JP1nHBeHeIs5lRpo1mCf8tgHQeyuCF+UYuP/iBX0lTl8qQSCeWoJgyNqoG+PPTf/POLvcdj5j+U2NWzqK8l3Opm6RYfAWQ6btEMwB0x1c2OncA+olV8b+LaWXhNbVKxPLQQnWSQNIqFTKrf4TzG0Abjk2d8b519QWotBWuRQQJJ76hz7fvYu5amMism+aYGWm9L9pFO4cfbqC4MopBDkX6X2CyJwfK666dEJ1BcaYF7nuGs9R8zxGsRUcyaaQGBiArMQVpQABoVajqIlBiFvEFKkNOXoKv7zAO3/reYp9wie2K1DI1K9zttMdB0QCyr+bYO5PhCinFOkpLWLvYjvpk41n6hjMKyLRufx90HqeJ8wbchHYUaX4Gl/LFWpxFXEVsvT/iVfKb/ANIKgPujYZsnwTSymaWqYCsxZp76Uk27m344n4jwSnSUGpV1sdkCwYm+5MD5f3rGrarzoDwT9kj1circ1Fif3G+L2BFn9oVj+zgc6Rvh1z/D8vfyUekdPUyD3EEwR9MD8oppMXdG38skCbkAwC28yCJ9j0OGGagOuklNo3R5PCWNOLvB+HGvXpUZjzKiU57amCz9+DHEeH0inm0+WY5R8JneP2SOo27RsZvCC6M3ScgjRrce60qjL/1AYuZIHCwlnxlhoorwh2q8TbNBStI1ioJ2AJKj8x3GK3hnPZijnkXT8TMhkAG3mKL72Mn5Yt+GiDlkMwNTq/o0gyT05SIPecef/cFTL10zlLnDE06qG4D2LiPs64FQQerDvjPn3Sse3aDyPsmW+5tymfI5Gvnq584N5NOodaBD+s0yPiIjS3bqPfF7xXkabBRIy81KaUyDFywWdJEDSs9LxiWv4tcqj0gCtS6ae8bH1wG47xh8wgatSRhRcVNLKJcRDADrYzH7ox5tjZnSNJG0DFD1mzjK0TfKY63hmgoUnPM5A+2U6HUthAHNHScL/FaU5mnpqU4ZB5gqVAoI1wfeQzfkYt1aOUzNNGWKDj4StkcGOUiwJEjl3GAtPh6JmDm80D5NJVpqAJDm5EDqL7H+mLIjZJcTYvFdewU4HK1zXD8tT4qUorTCIBXJUCE0U9TqCOkAN/qxzlVLR+QB/bD5nTTSnWzaJ5T5wtTpoIGmlqHmtG3MVVP9TbxgZwHh2qVgTJsZB6CPebWx6LS2yIA3dDlZ0rbcgdDKlYJG41QYNrd4/JxdcoEDLSpkm5JAMRvvYd8NC+E9StpWSJkwZ6dOwj2398Cc/lKemHrITF2pAsdQ/aK/q+0gv9n1tfybtcBoVVqpTzFZaU02ZVY7UoSBefgCySQbXFr4BZqkYERBuSLL8vuvg/n89l2JZUaDIg6IAiI5XawER7YG5vMBp5YgRJZZ69yP6YMH4oHNPZG+GUcpVyiqqEZs/q+WeddxI2kMFv63woPT0kqRcb4Y/C3Fky1bzCIBDKJFoYRYiBNzsYtiPiWW89vh0ZjqpECr+8vcnt1uRIMLW0lriDx3VUzNzQ4c9kCyuUao4RFLMdgN/wA+uJ+JcPbL1Wo1QNQAnSdpAIvHyxPk+I5jKlhTY0mazEKur2DEEgexvirmK1Ss8uS7mBO7HoNtzsMH75d0r7pS1G776eVT0Bm29z1vhmoZE08mrEQXufbmj7mgj90484f4YZSHzGkAX8qZb2bovtczYgXwVr8ZoujUaj6HJMEg6PQSJIi1z8ziO4pMQsN7iFU/w/RXXN5dgDZaiyLiCVaOt1YfTEuQyWZytSaR5Cbq11Pv2MdRjPA1E0uIlWsHoVYNiGHlswIIsw5NwYthyqBWOiTNmFrRtv7YS1b9rvMJ2EWFpw/xvSjQ+qkx6N8JP7rbEe98Wa2UbMqajgAGdAa8jufT0GNF8HUmDq7GoHAgEfCPr3xRpcMzmVbyaFXzKcA6aikgD0adQ+/2wr7tdldWcINxPwYLu0C2wHXr1wtt4XPQfccdHPGqYcrmKFSmy/aps9RSOtgAfqPrioc5lHOrzI7AypA9jBwYmlbwcISxp5C6krao5YIJW/S/p0O/0xyf/HOiFr5V4u1N1PrpZCP+447PpAE9MfP/APjVxrzs+tFTIy6aT/E51EfJdI9wcbSz0n6AdlH0xqcnP2fuxcyVEEAmPz/qxcFEbDTPyn8cEpSg4DlQlQ12geVBWQP8wzoMddID1I6+XHXHmRyrZmtc8vWTMAbCfpJ6m/fE+eOmkFNtTEn1EAKfucfM4JcDc0UOkqD1J3NiLH0OEtVKWigtPQ6fflEKeTZRZW091WQO8n8cQ18s9TSgqaVkWki5t0tGL2b41VfSDp0j7C2X5gHri3WzhrCmTOlbJC29oFhf82xjucWm1vNbYoqWnkqOXUUqCmrW+217+gF4g39YE4HrSQAs4c1SSGLnYXtH4nBPgmYFLWVMVIO+422n1n7sDBmZZqtTSEBHM8kO1rWmfvxXuLiVwUwG+B19dFUZNREiB6YF+IOFOyirTMkQGWYkfkm/TDEK5qTWeOY8ipZQAIFukRHTY4xaPKbEqd7bCIMd974sbMY3gjoo9jJ467pRoIJqU6h0kzqHQOJDG1hNmt+0Rivwpgj6p2Ddf3W/Hb54izGWAWpfUUq6dR3IlgDPWbH5DGcLf9YAwEGV27ggfecb7G8uvleUkPDeyt+GnYLUKtADaoPwsbjm/wBJN+n1GLdNEVnemTTqEBjTLCAQZBF4PWDJjppxL4c4bNGsRc6ysfuwrD8Thfq5R3qaANTGdojuTcxG5JNuuKnRBxJBoohJQoi1ayGZq65pVmADawo6PsTp2M323nYWx0LJ+JqWZhGU0aoF4SRItqkS2/Rv745k6015KeqpUNtYYhFPZNi38RgenXBbLniKIHBlT+0qMRcj7YJ6HCms0cUtFxo9D6/Kvhke3oj3izxRmWKUMqKoPVlB1OQBsok/UYr5QPTOriNQvU3XLh9VU/xxy0RHfmiwHYNmeLcQI0mrUVeq04pg+4pgT88CqdEiQVIsR7Ttud/6Tg4NLDGwNaB5qOkfuvKYOJZ1szU1sBYBAoBC0wI0qsbRtciT64PZVqOSTzai8zA+XTB5mE2YkzoWbaiCTsoY7DuGU0pU/wBIdZghaaH/AIjgAy4H2UmSZm4UQWEL+Y4i1SoxqFjVLSZjUSLAn7MaYgbAAAQBi2l1o3Ht6480U4zxytmBzkeXMimLU1HQ6b6z+8+o9tO2F9ajElYLHcE3t/TFny9DSYOqy2MDa3brvt9+LuSo05WoQ1jEzAMnSlj1Jn8jAmShZymmxDFY7oYlVwCQpIG4/n/fGmYZgrEKYBg/Pf77YaDwF9TmwAbSYQmRcQxm4AH5tjalw1jdV5Q9zv6xJuFm/febYp/5UfIVrtM+uUsJln1CLRpBkRuLgDvuYxcy2eenCeWHp9aT8yzuSBvTMXlYPcNthgXIKWcI3mkRIFxrCgMx2Ebek4WcxlKtITOpWEl4MCSbT0kjBxTh5+iplg2DP+kVamuZhqamotpXWNdK8XkHWhNhUEDoQpIBYuK5CjkaNN6VEpmashSWDELYFltysSdIPQFjhIyTOrCtSOlwZAWLdDAnaJBBswkHDJxnioz2l62gQopiGK6GC3AkwQY1A73I3Vji8bQLHRJGP3huHzSdnOJ1XPxkD9kGw/rio7v9qT74Ys34bZBqRtaiZB5WEG8g7x6fTFTiGXLEdgOwEQADt+b4ISt6JgaVzhaIeDuL+VWQEahDhO6M9Nkt6GYI2Nj0GHjhrGrSV6JuCLNeZIJ69gfnhV8IeGWq1aZZYAqKG9gVLT7XntfG/gDjkV2olrM5enPX4pX6XxRqot7dw6Khp2O2ldUo5xaVPXVOk7ep9hiplM+9SroCaVF2Zug6fP0m33Yt5dhYnBCtT1qADpvewM4QLSRzwrQ4Dol3inDKaP8ApQYJAhyQWDA7T2vG2L+XyyaVg6hHxbz922J62W1gqx5Ootf7saU6lOmAiodIEDHAyzaIvxSr/wCIv+JtHJI9HLstXNERa60vVjtqH7P1gY+eaZZ3LMxLMSSzGSSbkkncz1xdocArmCyeWG28wqhPaFYhj8gcMLeCszRpec4CrIHxKDzbfERHsYPpjd3tHVZ209kMyjgW1x/on/yvi61QT8a/7DH/AHY0ZHpnS/nKegMLI73EEeoxucwzEKvnFiQoGsGSbAfDuTg7XFrniCisDMHTItfmYb4PZfLUmDCqYBAKmJEi9xgT5AaUZ4B0uHczBWzCwkgIWew+zHS5bhEZhQiXdDoY9LW1T1BAFx3xk603Txx3W77OoAsdyrfC8iK7OcsAygxLW1HrE42zeqi2mkGYTzgb6huQIsbXv0xZOb/RR5FMo4Elyh+KZkA2MgdsVMvXDsnlm8gAm2k/iMZxu/h8VqDd1Ua1WZg1NCSLQASSOsjf3GBHE8w3mBnkp9mBy/Rflb2w0pVZKrEPoIJEqd+9xvJG/WcBuL5UNWYqQJGt2IsJv8yd46es4t0xBdx0Wd7WdUGepCXnzeY+JNYBuIAgKNjEb4YfDnHHrVDTqKAVH2VK+h1A7H8b494DX0hjJ5137C1vpbBbLEAamMKLidgoF/547qpGkFhbnoVX7OicWiVryG9QUj8YUBczbR+uVVG0x2+Qn54EZaoQRFzuObtf6Rgj4srR5VNgNZ1V39DUIIWBtyBT8xihwbOtRqpVWJUzt0IIP3E43YxTAsaY7pCV0vwzw6Mw9Kx8yitQRca0hWAOx7z2IwD8YZYUX/RqMmpUALnrpJ5UHp1Psvrg7xnIjh+cy9bLlmy1ZBUQt7RUUwNwDMevocLOcdq+frMDp55Vj0ggDp0H4HC0jiyyVdGAaRrgfBUoKsJU8xm0tJj7JgCACJJF56DB1uAHSXfUt9i9go2N+szeT0x7laA1q4JYxZlnTqNuadvtRI7Y3zuZrwAAGZ3B0NaAI0kknmAiSABjzUs8kj+fXrqtFrA0YVSlwNGOj9kXMg36fXADM8ILVAqq0lkABAETuCZgwev4DByrxGuXqgMGAMMwFliBvtJ/piPN8VijXMbCAdt1gxN5CyZ74v0xl8QC+aUlraSUncZ4tT8wot6dIBKfSwMz6FjLn+ID7IxBn0AgTLGGR7gydUAdCBIk7GcUHywcywNlLuV7kixJ2uY/+MG+FZ7yatIMPMWRpuCVkRI6WB2+kY2JjXvNyeyGFpDadwt+H5Go+kuBAIIdQNoXUN7EC0/0webhq06asU1Ko5BIMNJLNG83AmBtsNzJTolUPlM2osZYQVUy1zcCYAHoWPtizQzNTUEqglyoWRTDEGN2IlVJ7bX+eMiWZzzY47evX1WoxgaP5RKl4fZ0cEFmNyVldII2kk3ixj1wCqcLlHemS1IVSrBSyGdgAeu0FtpxPWzmZQiGIBDMsPpaI+EqrC1jBGoz6Yp6M2WLMx0VTraJLEqtlVQPi0iSe8m5ABqjDhncPqh8R7T3HzUfEMsalJ/L1BknTT5RpZSQxMXYQT33HcYFZUuVValFTIAIHw2JvZgNUA27WtODmazgCU1WoPNbQ79oJUKD7+xkTjzOcOGlPNUchtzQrTqIO9xMncdMMRy7RTu+O/49ZXHtB47cJLzDrRc06cuTy6ysExIKkekbbRGN8tnHeoxq3QqquQPhUQAxi0qQG9YYfaOC3FaGUTXWamzEjUgLHyuY7i15MzqPTrY4BVuIFQ2ghadUCUFp0/ZgWiZHqD641tPJuFgHzPVZeoiLcEjHCM8Ty9SkjUnHONIkGbEDSJBuIiPSMScKydSqw0wWkEs6wNxv1b264H0WqA0ypALXllVgGRmRpVgQxOgNfuflgzmb8xjTrMljJSFN+i6QNJjtiwQi8nqhZrSxpAGSugeK+JJw/IvRpR57/qj3p+YrF2aNnK6oHTVJjlnjyOUKuhhlMixwV48PKWlltTFlBq1SNzUqQb94QL9cDle3xP8AT++GwBVLNc4l1ldg8HcRpVqQqpExpYXJB6g4ZkqwLH+WOAcH4vVylTzKLGD8SsLMPX+uOs+GvFOWzYH60U6nWmxj6dxjKn0xjPujCaZKHc8pqy7azBMKOv5/HETcUAJFKg9RQY1BQQT1uSJxJ5UKdUlYuRFx/IH64U+OeK1p1NIMAAQADA37YrYSMUiNFCvAfh+t57ZirT0qdtV2G839uvp64fc7V82iKdOkpvMk/CVYFGAjeb9IPfBZqiiUSmGteTEe4P4Yi4MBpJktfcjc9Y9ME691Xyul15XOON8LKLWrFTIDVGSDocwSSRPKx/bWDtM9Vrh2bBanUpjlLDeNSNax2BOxB2IvYyB2HjmXADVPiQKxZGAuINri04RfEvAKYofqqSJJAJVYnVZCdPappv0Vn74PTzGM7HEm+q49ocNw5CT8wzQrIBKncn6W6jcEfLrj3hebp0ldkcpr/VukEsi2Ksp2YQWHeIMYpZOvEQ6Edub7iRb87YpVuSoXWNM/D3G5HpfbDZhLm+G4YUbqGtf4jT5p78pQilCGESD3HcY9yXAa1RfMp020Mb7KCZgbmR7jC7wl6qjXlmD051Mh+zPRh9j363jVhro8TasogNIF1E2glbWAIt6GIsMZU0EkOeR3/lbkGsZNgYPx/CmyHCmliQzovLKyVkRae+/tiapw/UwikWZrGxvaPS0dcT0ePvTTQKYUAGBBEfI+uKSLmap1BWkwZ6AGYnoot6YV2uc73Ve7j/JQHxUYySUGKqsG0jePQen3YkzASnSqVq5PlqBK7atyEF/iciNrAMTYGLNahQyaedm6lzJC/ab+BZGq9tVlm5Ydeb+JfEL52oqwUop8FJbnpLHaWMDmI6CAAIxo6bQndvkWVqtc0M8OH7fhBOI5969V6tQjU5kxYDsAOgAsB0AGNqFIHb8R/XGzMFMCgP8AUXJn1ggfdi7Uy9dUFRqIVDFxPXb4id8axe0crFEbjeEycO8THyaGTr3Wm5ekSJKtYgTOzCVjvUnYYO8R4N+jZhlF1cCpTYbFT2PWP545mGWoIiPpv9MM/wD90vUydOlUJOYyjQkidVM2KmOg/wDb2wvqovEYWhXQP2Osp3zHF6KhUDOhIlgASFi8gtb1i+B2c4y2aGmgtQgPerGmFJkybRO2K3BuP5bMjS2lHNirffpPXB/K5EJZSNJ6d5/HHmXNbAae07h3Wu2ni2lUqHh6mNtfxE7m3eDvff54q+OKQXLrTBPwsfXov/ng9VrJSUvUZaNMbazHbYTLH0wl8f8AECZpmFPVpWnUKl93INJyY+yNNMwvae+GNA2aScSHgX+xVWoewN2j4fugmTyVQgw8ByAJsPn6dI9MGeBcNDVWbUFKxp0KdgLRym097WwJymZZ6ZphgpVjpcnYNPboCTPp7YZOHMuioDWk6RTLcssSJ00wOaLiWJ279HNS94BCbjqgf3VrN0KVMogXU5JKOZuZnTywVBIPTpBtuRen5YQGKgIM0xCgmw1HeLA+l2PUnFTiWcZKAK8yl9IvBYf5ZBEyoB1G17dDfGgzdNUZ8zVAS9TTSMhhI0JMWXaAImPpm05wB+Pnfr18GHOaBa3yfD8xVY1Gy1tQKxEqRLSWHQ9iY2teMe+TUy9RKMsiBdfMCFJ1E/G7gTPQkm3sMUM34mzdVdVN0yyMJQAEEgAGdriOpgfyr8Oz9GpfMeZVjmfzKhEiRAVV3HUr6XnF4hkP6qrsM18fkkZNWGZNd/NWv0ZHqGslBGADAszwjGYvG91F4F973xpxw1aqMBVokHmCqkMBINMNJmLWsJnFTj/Fp/V01SlSqkraAdEcwjSe4uCDItYTj1sktXSsuqGmdL2uwUnSQbtyANHqBg/DLCHOOBx1wPP8IhL4jfdFH+VEmVprUpvqFRRTVlptOkMxWJEGRqJAt27Yoccpo9RalTUpJgC8EzMXiN8XOG5enSU5hneEBFxzFSTddyplpmBv6ziHO8JWqlNqPMib6zzhZm8bgDp7wcXscGyWSe1/j9l2Ue7VC+y8oqfLDd6jkexWlNjJ+KT8/XF+adFC5MhBrcbEtNk9yfvONM24RVT4n3B/iAYQBa4I+nrhe4rmjUPlK0U6fNUc7atvnGwHU/XGmwXV9AP2WRIQ2yOpP7oTmq+t2qOTqYlj2v0HoNh8sWKWVZhanUPsh/kMQvnItRUr01kAufnsnsv1OK5y7NBZrk7sekTMnDFpWwFcrZcp8ass/tKV/HfFarQG8D64zK5mrTEpUKrMRMqf9JsR7jFzL1krWgU6vQAwlQ9o+w3b7J2tjtqc8LTh3G8zQP6us+nYqWlSO0G2NuMZ85ip5rDSYAhZi3v3N8RfI/U2+7GT7/U4gY291ZU3GqXeaOaKeatesNDsDqX7Pp6DB7K8Ry6IBTdHAE8pDW+XrgJmspr5QqFB9T7f1wvrVydDMJBPmagpGkiNRAOpjyxBnc4xGPPQLQLbTrXzYzCOumFI0idz3PtgFms3R/RXUvLin03EX+s4O5/iKUaLVHAEWCz8R6Ae+ObcQAp0Wrs4SpAqsgj4AQQGk21uVUdbnpccc1xc0XkqMqiegSLUygL1NOwdgLiLMfTFfMZNgO/tihlsww2n64t1SxUSQfeLfPG8s1QUmqU2DozI42ZSVYfMQRhg4f49zFO1RKVWOrKUb/0yk+7Tixw/hVKjTFbMBXcjUFb4E7alnnf934RsQTIUVm/FdeYpVWRRsqBUX/aqhfuwJ2uwRaJri3INJkP+KJsRlQT61Xj8Z+/AzP8A+Jedf/LFKj6ohZiOnNULER3EYAVM8KtqqKD/AMxECt8wsK49xPrihmaBRipjvI2IIkEehGI1jBwF0yvPJRBWqVT5tUmrUdra2JLRuzEm/YSe/bDBwjww/mBzYMJjeZ6Dv+RgTwM/rvgDaKcAdtpPqZJOHdMnmKqjzHC0bOAFhybHSADMxvPboZjO1k7mnaDS0NLE0t3HJU+WoUgzQmpoB0lCOUSCZOxO2NszwWm+lzUbyyQRS3UloAUSZgWAgdMQ8RrIKL0jWUaSSFVp00xpA1GAWjYLf6Yh4dRqZdHq1ucWNMgEmlYSwHqIG28bRGMoA/qDs/v5LQw4V6Hmq3iLwmlGi9WmXQJsLEDmkAkHUJ6G8R3nCV+lMriqpuhgEqPvtBHp646R4srf/jeWCVNRVd6bEqy04JgCOUmDuO2Eji9ai9FfL1AgFYMRymxt6Y0tFM+hvzZ+iR1ULSCW4ofVCMxSDhqiCBPMvaZMj0sfbHtHiFdRC1qq+gdgPxxWoVyrBhuME8kUYlgJ7rAG5jl6T6be3XUcBWRazGnKos7M01GZj3Ykn6nDZl6dOlTy1RgAh/zSRcrULI52vCGwxWrcGpuoZag99oP7LDcGbf1xcz1MGjToi7CiqsII5gzbSIYFYuJHMcLSO/SR0KYY3kfBUKIOXr+WIOkinUYiIYGGuQ1tU3G6npOLedZwFpCgilSCzKAWeIJAi7d9rTjSki1aYrs8VKYWlUETLCBTcmbaqYif26d/jGGPhGdXMFtIIcADSbczTLAr1iRAAgTthPVnw3b9tj1S09HUjKLl42YNRXpl9NVFJQ62DcpvJYnSpmwJsNibgR8UzXlkW0U2LsraiQA7ETN5hTaPT3xJ+hhKlRndVLBggfVzdSSRqBA1KsT9k3tgRxHVU0IvlFUp30kKkyQRvvIgdbqN74Rja1zh2/r191dqvF8Oo+Voc0K1xmNYnSRpI+9rxBPTeTjSlwpwbqVkgaibbTygTYdT6TGF6s5Rhop6et137GD9ZwzcBroUdqlbTVKsCyhi4lTpCxEd4Fz3AxoPj8MWDjyz9ljF8kxDHNs/dNnBcrSqvRy/LUQAl941ELpj2vJHTeML2b4VSpOjS8KessVaFmbzMgk/zwb4P4gyYpIiPmVqHlClVEMLgaunuOxtgDm3V3OZEU6g8xgVGpauk9bQCT6Cb7GZUp7X1x/frlO6IPv3hgcfW1pUNJFenFqjHWFUi4JWEY9NV42hSL9bjUNQFBIU1DoAYQZNgZFgsXNrRudsRcNYV2Pmg0nZBIBJVhbQwB+GAN7zfEfGM6aKPWdpMNQoKVi5EVXB3ICkpPdiR8BwcUZklDPmU3O8Rxl/Tog/iTi6h38rryoYulMWX2bTA9N+2A1RIUUQRNmYdSx2H+kW99XfFGhzVFBvqYT8zfFqrT1vy/E7GPfV09emNlwAXn7JVvguQ12cqqftN/ITLH0j59y36AgWo6AMabW66gVYzERAjrPbfALLFhfleNwxkH+c7WxuMwoBDD4jYITG3W4JvFvfFEjHuNgrgoIrn+EMaS1ltyjXBkdZi+3rc/yC1MlqMLpACjdo6esRJ74ucOfzCKK1SF1CEIJE9OoEfMY2zmVdEOZ5CjNpIAkahB7iflb0wLHOYdrjnp+FZIWEgsHRa1XDKH3YHRU9SByt7ssg+qE9cQFv3T9+NMvnNS1RpAGlWgWEhgtvkxx4G9/r/bDbbrKAldi4Hk67gutdOhOhrekwf5YuVvD9NmNVgJtJBgE/wxv7Y5xwbxnRoVzXOWdXIhxSqzSbsdDhmBH8eCPHP8S6bMBRp1PLgE8wQlv9rWXa3r6HGY7ROGBlNjUC7tMfGQBFM1NbqreVS3IMGJ6KB+01lEmQMcv4/wATGn9HSoastrrVZJFR+gWbmmt7/aMnYLEPFvE1aspS1Omd0Sea5POzEu9+hMDoBgOqzhvTabwhZNlUzT78DhS5eZsJwSQ3ExNrQPlbEGSyzE2E/T+eCdGiVZWamzBWBPw9CDF++G1QqfFs81UhdlHT8MQUcnOCua4V5dQpIMXU/tKRKsPdYOJcvQINxbCcku3AVbihJymNM+vIoO6kj/SeYD5HV9cMlHIlzCiY3/kPcmwGF3jjfrNHbf3/APjHYJC8qNKZfCHLUeqQUXSCznaIuL+o3GLD8To1a6w1Z1AgohvYcrbw3MfSegPRX4bWqGAjRpmVY8pQyTbrBJ+ow4cDqZbWXoKqEAEMxMkqZAHadpNtsJamPY8vNnHTp5ra07y9gaEWz3DqDMi0RSU0zqJrNLFgOVZHxgdrjbfoJXjhWrWrPV8wqxRUpGEPQQQJI7REkXwuvkWrViVpKhLEkF+5J21Hlj32wa4fQDFaSrDLDOAs3klTJtE9J6YpdE1jfeN/j55V7Du4Ffn9lrWytTy3au7gk6rqBqiYUBbsAJBsAIgY18RcFWnR82QTo1EmxmwFvn0wZzeUC1PLq3BJV3ZoMaJGiCAnMY7m+F3xzxVHCBDqLDTJFxTUmPfUQDt0PfE07nySt28cmhilyfZHGbSaMeqSDIMY2Q4mNMnp9DjeWErGS4uyGTf82/P4YZsvxqnWWH5j0vBF5LC0z06jcHfCW9PEeAdGCjbIQnqjl1DtVVwwZdDU2WFqqfiVmUwCQBcQQdLC64rvS/RyK9N2ZA36skAlW/5dQDaoPoQNS+ixlOJVKZBBmO98EafiRgSdAkiHBujjfS6ncTcGQRuCDfFLoiRtIwr45g07gj9XxA9flfkg3dLC5PKI77yT9m/fBnJtTp0PKqJ5n2tYgDYvBbabCDN4GFPh1fLswak3lMJPk1GtNyNNQ8pHo+ki13xnE6zKUCrU13LrJgnpAiG5eonphCXR5DGihz81qR60Fu4nPrp1R7L8E00aZKnmLRpbUFDlQCYmFW5PSx74lTLqlLzqfl3JDK5F0DBNencnUNtt8bcNd6jU/LCU2CM7q6CCpuARABbmmRH3HCzlsyWzDr8Sw9NReNLBjAE2WdgNiZwu1r5CbPGT5WceirZHtjoAc4RX9OVGNUlQxeYCoAFhfij4eXoOl5mcaJxISFRmbmMSwCEs0NJIBjobxacVuEUzUdkWj5ukkjQJtIIZokA78zQB3xJm81lqLM9UirUJkUKTgoCd/MqgafXSmo+q74abptxqv4S51IZkn+Va8im1Pz600aaEq1RG5n2inSXq8WvYA6jYCVTjvFmzNTWQEUAKiC4RB8Kgm56knqSx3Jxpxbi1XMMGqEQtkRRCIu8KvQeu53JJvig2NGGIRilmajUGZ19FlOpDBh0M/TBXzgrFpJZG1Kv2dBlpnvcYD4v5Yl1hfjURH7S9vUi9uo9sE9tqpjiDhHMhTNVjUlKUgfEYuJvboTaT2x5V4bTqIahrBmVypA2IAG20kwTPtgOdTReSBYzKxvj1uG1QmvRYdZvH9MKllH9VKxpLiXbb7/yrmTyYLLoNNiSDzsFUQJgi+/8AOMeZjiNZwKbHkQkaAqwBOwPWNt8QU6IRirQIH2gykHqL7EH06HGQagFGnDH4mbZQBuZOwHfB0CbOVWMKPLLFKo2mNTKgv252/BfqMR+W3b7x/XE+bqA6UQ8iDSJBlpuzH3PToAo6YiAPb7jhhq4VHXQ9QfmDisy4zGYJCsCeuJaaL3xmMxFFaoFZEgn6fzBwTWqkcqJ8lv8A9KD8cZjMRRZTzdMlVra9C/CyjmS5NgX5lm+m3cESQXbhp4Yyy+boN/EWRvmGpSfkTj3GYBzGu5U5VDjPjHJZcacmorVOjFSKS73hgGc+mlQepYWxzapWLMXYyzEsSepJkn64zGYINA4UUiVCIIsRt+Zwe8O8Wp02kny36H7JPr2+ePMZgJYmyN2lWxTOidYTW3HVpo1Y5emzTAIMAzv/AGicZQ8UN5TChl4YTBMGJn7Qg2ntjMZjHbo4jyOvcrXfO6gR2Sfn+IXLVmFSofsBiy+mtpIt2Uz6jAKvWZ2LMZJ6/nbHuMxssYGjCxnvLuV7TGLSra4+7+2MxmDQLHUdj9P7Ygen6fdjMZiKKJlxoRjMZiKLMS0s06iFYgdpt9MZjMRRTU+JVBB1G209B1A7YmXjVQGQtIMDOo01YzvPMDfGYzHNo7Ii9x6rTO8Xr1RpqVXZd9Ewg9lHKPkMUhjMZjqFbYwjGYzEUWhGPVJBkWI648xmIorpzSP/AJgIb9tIv/EtgT6gj1nFhqpNMUxmF0jYEOIuT+z/ADOMxmALAUQeQtuJ1aVSo1RqpfUZhVMn5sFA+hxC+aldCAIlpEyWjbUY5vawHbHmMxGsDQAoXWtCP4fz8sbAeqfUf0xmMwaG1//Z",
  //         locality: "Shanti Nagar",
  //         areaName: "Shanti Nagar",
  //         costForTwo: "₹300 for two",
  //         cuisines: ["South Indian", "North Indian", "Sweets", "Chinese"],
  //         avgRating: 4.6,
  //         parentId: "22",
  //         avgRatingString: "4.6",
  //         totalRatingsString: "29K+",
  //         sla: {
  //           deliveryTime: 29,
  //           lastMileTravel: 2.4,
  //           serviceability: "SERVICEABLE",
  //           slaString: "25-30 mins",
  //           lastMileTravelString: "2.4 km",
  //           iconType: "ICON_TYPE_EMPTY",
  //         },
  //         availability: {
  //           nextCloseTime: "2024-11-12 22:30:00",
  //           opened: true,
  //         },
  //         badges: {
  //           imageBadges: [
  //             {
  //               imageId: "Rxawards/_CATEGORY-South%20Indian.png",
  //               description: "Delivery!",
  //             },
  //           ],
  //         },
  //         isOpen: true,
  //         type: "F",
  //         badgesV2: {
  //           entityBadges: {
  //             imageBased: {
  //               badgeObject: [
  //                 {
  //                   attributes: {
  //                     description: "Delivery!",
  //                     imageId: "Rxawards/_CATEGORY-South%20Indian.png",
  //                   },
  //                 },
  //               ],
  //             },
  //             textBased: {},
  //             textExtendedBadges: {},
  //           },
  //         },
  //         aggregatedDiscountInfoV3: {
  //           header: "₹100 OFF",
  //           subHeader: "ABOVE ₹249",
  //           discountTag: "FLAT DEAL",
  //         },
  //         loyaltyDiscoverPresentationInfo: {
  //           logoCtx: {
  //             text: "BENEFITS",
  //             logo: "v1634558776/swiggy_one/OneLogo_3x.png",
  //           },
  //           freedelMessage: "FREE DELIVERY",
  //         },
  //         differentiatedUi: {
  //           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //           differentiatedUiMediaDetails: {
  //             lottie: {},
  //             video: {},
  //           },
  //         },
  //         reviewsSummary: {},
  //         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //         restaurantOfferPresentationInfo: {},
  //         externalRatings: {
  //           aggregatedRating: {
  //             rating: "4.1",
  //             ratingCount: "11K+",
  //           },
  //           source: "GOOGLE",
  //           sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
  //         },
  //         ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  //       },
  //       analytics: {
  //         context: "seo-data-4614ee4f-f01c-465a-b2e4-31f5787d0c76",
  //       },
  //       cta: {
  //         link: "https://www.swiggy.com/city/bangalore/a2b-adyar-ananda-bhavan-shanti-nagar-rest12808",
  //         type: "WEBLINK",
  //       },
  //     },
  //     {
  //       info: {
  //         id: "6924",
  //         name: "FreshMenu",
  //         cloudinaryImageId:
  //           "data:image/png;base64,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",
  //         locality: "Johnson Market",
  //         areaName: "Richmond Road",
  //         costForTwo: "₹250 for two",
  //         cuisines: [
  //           "Continental",
  //           "Chinese",
  //           "Oriental",
  //           "Asian",
  //           "Healthy Food",
  //           "Fast Food",
  //           "Indian",
  //           "Desserts",
  //         ],
  //         avgRating: 4.4,
  //         parentId: "398",
  //         avgRatingString: "4.4",
  //         totalRatingsString: "59K+",
  //         sla: {
  //           deliveryTime: 34,
  //           lastMileTravel: 2.7,
  //           serviceability: "SERVICEABLE",
  //           slaString: "30-35 mins",
  //           lastMileTravelString: "2.7 km",
  //           iconType: "ICON_TYPE_EMPTY",
  //         },
  //         availability: {
  //           nextCloseTime: "2024-11-12 23:59:00",
  //           opened: true,
  //         },
  //         badges: {
  //           textExtendedBadges: [
  //             {
  //               iconId: "guiltfree/GF_Logo_android_3x",
  //               shortDescription: "options available",
  //               fontColor: "#7E808C",
  //             },
  //           ],
  //         },
  //         isOpen: true,
  //         type: "F",
  //         badgesV2: {
  //           entityBadges: {
  //             imageBased: {},
  //             textBased: {},
  //             textExtendedBadges: {
  //               badgeObject: [
  //                 {
  //                   attributes: {
  //                     description: "",
  //                     fontColor: "#7E808C",
  //                     iconId: "guiltfree/GF_Logo_android_3x",
  //                     shortDescription: "options available",
  //                   },
  //                 },
  //               ],
  //             },
  //           },
  //         },
  //         aggregatedDiscountInfoV3: {
  //           header: "ITEMS",
  //           subHeader: "AT ₹100",
  //         },
  //         loyaltyDiscoverPresentationInfo: {
  //           logoCtx: {
  //             text: "BENEFITS",
  //             logo: "v1634558776/swiggy_one/OneLogo_3x.png",
  //           },
  //           freedelMessage: "FREE DELIVERY",
  //         },
  //         differentiatedUi: {
  //           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //           differentiatedUiMediaDetails: {
  //             lottie: {},
  //             video: {},
  //           },
  //         },
  //         reviewsSummary: {},
  //         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //         restaurantOfferPresentationInfo: {},
  //         externalRatings: {
  //           aggregatedRating: {
  //             rating: "--",
  //           },
  //         },
  //         ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  //       },
  //       analytics: {
  //         context: "seo-data-4614ee4f-f01c-465a-b2e4-31f5787d0c76",
  //       },
  //       cta: {
  //         link: "https://www.swiggy.com/city/bangalore/freshmenu-johnson-market-richmond-road-rest6924",
  //         type: "WEBLINK",
  //       },
  //     },
  //     {
  //       info: {
  //         id: "43836",
  //         name: "McDonald's",
  //         cloudinaryImageId:
  //           "data:image/jpeg;base64,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",
  //         locality: "MG Road",
  //         areaName: "Ashok Nagar",
  //         costForTwo: "₹400 for two",
  //         cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
  //         avgRating: 4.4,
  //         parentId: "630",
  //         avgRatingString: "4.4",
  //         totalRatingsString: "25K+",
  //         sla: {
  //           deliveryTime: 25,
  //           lastMileTravel: 2.5,
  //           serviceability: "SERVICEABLE",
  //           slaString: "20-25 mins",
  //           lastMileTravelString: "2.5 km",
  //           iconType: "ICON_TYPE_EMPTY",
  //         },
  //         availability: {
  //           nextCloseTime: "2024-11-13 02:45:00",
  //           opened: true,
  //         },
  //         badges: {
  //           imageBadges: [
  //             {
  //               imageId: "Rxawards/_CATEGORY-Burger.png",
  //               description: "Delivery!",
  //             },
  //           ],
  //         },
  //         isOpen: true,
  //         type: "F",
  //         badgesV2: {
  //           entityBadges: {
  //             imageBased: {
  //               badgeObject: [
  //                 {
  //                   attributes: {
  //                     description: "Delivery!",
  //                     imageId: "Rxawards/_CATEGORY-Burger.png",
  //                   },
  //                 },
  //               ],
  //             },
  //             textBased: {},
  //             textExtendedBadges: {},
  //           },
  //         },
  //         loyaltyDiscoverPresentationInfo: {
  //           logoCtx: {
  //             text: "BENEFITS",
  //             logo: "v1634558776/swiggy_one/OneLogo_3x.png",
  //           },
  //           freedelMessage: "FREE DELIVERY",
  //         },
  //         differentiatedUi: {
  //           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //           differentiatedUiMediaDetails: {
  //             lottie: {},
  //             video: {},
  //           },
  //         },
  //         reviewsSummary: {},
  //         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //         restaurantOfferPresentationInfo: {},
  //         externalRatings: {
  //           aggregatedRating: {
  //             rating: "--",
  //           },
  //         },
  //         ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  //       },
  //       analytics: {
  //         context: "seo-data-4614ee4f-f01c-465a-b2e4-31f5787d0c76",
  //       },
  //       cta: {
  //         link: "https://www.swiggy.com/city/bangalore/mcdonalds-mg-road-ashok-nagar-rest43836",
  //         type: "WEBLINK",
  //       },
  //     },
  //     {
  //       info: {
  //         id: "48230",
  //         name: "Kanti Sweets",
  //         cloudinaryImageId:
  //           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2MLzdrizSRdgARv5mdeOxt-hTEt-uLmOM-g&s",
  //         locality: "Brigade Road",
  //         areaName: "Central Bangalore",
  //         costForTwo: "₹150 for two",
  //         cuisines: ["Sweets"],
  //         avgRating: 4.7,
  //         parentId: "4700",
  //         avgRatingString: "4.7",
  //         totalRatingsString: "5.9K+",
  //         sla: {
  //           deliveryTime: 27,
  //           lastMileTravel: 3,
  //           serviceability: "SERVICEABLE",
  //           slaString: "25-30 mins",
  //           lastMileTravelString: "3.0 km",
  //           iconType: "ICON_TYPE_EMPTY",
  //         },
  //         availability: {
  //           nextCloseTime: "2024-11-12 22:00:00",
  //           opened: true,
  //         },
  //         badges: {
  //           imageBadges: [
  //             {
  //               imageId: "v1695133679/badges/Pure_Veg111.png",
  //               description: "pureveg",
  //             },
  //           ],
  //         },
  //         isOpen: true,
  //         type: "F",
  //         badgesV2: {
  //           entityBadges: {
  //             imageBased: {
  //               badgeObject: [
  //                 {
  //                   attributes: {
  //                     description: "pureveg",
  //                     imageId: "v1695133679/badges/Pure_Veg111.png",
  //                   },
  //                 },
  //               ],
  //             },
  //             textBased: {},
  //             textExtendedBadges: {},
  //           },
  //         },
  //         loyaltyDiscoverPresentationInfo: {
  //           logoCtx: {
  //             text: "BENEFITS",
  //             logo: "v1634558776/swiggy_one/OneLogo_3x.png",
  //           },
  //           freedelMessage: "FREE DELIVERY",
  //         },
  //         differentiatedUi: {
  //           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //           differentiatedUiMediaDetails: {
  //             lottie: {},
  //             video: {},
  //           },
  //         },
  //         reviewsSummary: {},
  //         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //         restaurantOfferPresentationInfo: {},
  //         externalRatings: {
  //           aggregatedRating: {
  //             rating: "4.1",
  //             ratingCount: "1.9K+",
  //           },
  //           source: "GOOGLE",
  //           sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
  //         },
  //         ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  //       },
  //       analytics: {
  //         context: "seo-data-4614ee4f-f01c-465a-b2e4-31f5787d0c76",
  //       },
  //       cta: {
  //         link: "https://www.swiggy.com/city/bangalore/kanti-sweets-brigade-road-central-bangalore-rest48230",
  //         type: "WEBLINK",
  //       },
  //     },
  //     {
  //       info: {
  //         id: "396753",
  //         name: "Wendy's Burgers",
  //         cloudinaryImageId:
  //           "data:image/jpeg;base64,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",
  //         locality: "KMK Towers",
  //         areaName: "Residency Road",
  //         costForTwo: "₹200 for two",
  //         cuisines: ["Burgers", "American", "Fast Food", "Snacks"],
  //         avgRating: 4.3,
  //         parentId: "972",
  //         avgRatingString: "4.3",
  //         totalRatingsString: "2.3K+",
  //         sla: {
  //           deliveryTime: 29,
  //           lastMileTravel: 1.3,
  //           serviceability: "SERVICEABLE",
  //           slaString: "25-30 mins",
  //           lastMileTravelString: "1.3 km",
  //           iconType: "ICON_TYPE_EMPTY",
  //         },
  //         availability: {
  //           nextCloseTime: "2024-11-12 23:59:00",
  //           opened: true,
  //         },
  //         badges: {
  //           textExtendedBadges: [
  //             {
  //               iconId: "guiltfree/GF_Logo_android_3x",
  //               shortDescription: "options available",
  //               fontColor: "#7E808C",
  //             },
  //           ],
  //         },
  //         isOpen: true,
  //         type: "F",
  //         badgesV2: {
  //           entityBadges: {
  //             imageBased: {},
  //             textBased: {},
  //             textExtendedBadges: {
  //               badgeObject: [
  //                 {
  //                   attributes: {
  //                     description: "",
  //                     fontColor: "#7E808C",
  //                     iconId: "guiltfree/GF_Logo_android_3x",
  //                     shortDescription: "options available",
  //                   },
  //                 },
  //               ],
  //             },
  //           },
  //         },
  //         aggregatedDiscountInfoV3: {
  //           header: "ITEMS",
  //           subHeader: "AT ₹89",
  //         },
  //         loyaltyDiscoverPresentationInfo: {
  //           logoCtx: {
  //             text: "BENEFITS",
  //             logo: "v1634558776/swiggy_one/OneLogo_3x.png",
  //           },
  //           freedelMessage: "FREE DELIVERY",
  //         },
  //         differentiatedUi: {
  //           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //           differentiatedUiMediaDetails: {
  //             lottie: {},
  //             video: {},
  //           },
  //         },
  //         reviewsSummary: {},
  //         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //         restaurantOfferPresentationInfo: {},
  //         externalRatings: {
  //           aggregatedRating: {
  //             rating: "--",
  //           },
  //         },
  //         ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  //       },
  //       analytics: {
  //         context: "seo-data-4614ee4f-f01c-465a-b2e4-31f5787d0c76",
  //       },
  //       cta: {
  //         link: "https://www.swiggy.com/city/bangalore/wendys-burgers-kmk-towers-residency-road-rest396753",
  //         type: "WEBLINK",
  //       },
  //     },
  //     {
  //       info: {
  //         id: "593",
  //         name: "Anand Sweets & Savouries",
  //         cloudinaryImageId:
  //           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhZ4Z7WehU35yZ04HRRMB9H0uQilYnWy4P9Q&s",
  //         locality: "Jayanagar",
  //         areaName: "Jayanagar",
  //         costForTwo: "₹300 for two",
  //         cuisines: ["Sweets", "Chaat", "Snacks", "Desserts", "North Indian"],
  //         avgRating: 4.7,
  //         parentId: "53",
  //         avgRatingString: "4.7",
  //         totalRatingsString: "24K+",
  //         sla: {
  //           deliveryTime: 33,
  //           lastMileTravel: 4,
  //           serviceability: "SERVICEABLE",
  //           slaString: "30-35 mins",
  //           lastMileTravelString: "4.0 km",
  //           iconType: "ICON_TYPE_EMPTY",
  //         },
  //         availability: {
  //           nextCloseTime: "2024-11-12 22:00:00",
  //           opened: true,
  //         },
  //         badges: {
  //           imageBadges: [
  //             {
  //               imageId: "Rxawards/_CATEGORY-Mithai.png",
  //               description: "Delivery!",
  //             },
  //           ],
  //         },
  //         isOpen: true,
  //         type: "F",
  //         badgesV2: {
  //           entityBadges: {
  //             imageBased: {
  //               badgeObject: [
  //                 {
  //                   attributes: {
  //                     description: "Delivery!",
  //                     imageId: "Rxawards/_CATEGORY-Mithai.png",
  //                   },
  //                 },
  //               ],
  //             },
  //             textBased: {},
  //             textExtendedBadges: {},
  //           },
  //         },
  //         loyaltyDiscoverPresentationInfo: {
  //           logoCtx: {
  //             text: "BENEFITS",
  //             logo: "v1634558776/swiggy_one/OneLogo_3x.png",
  //           },
  //           freedelMessage: "FREE DELIVERY",
  //         },
  //         differentiatedUi: {
  //           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //           differentiatedUiMediaDetails: {
  //             lottie: {},
  //             video: {},
  //           },
  //         },
  //         reviewsSummary: {},
  //         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //         restaurantOfferPresentationInfo: {},
  //         externalRatings: {
  //           aggregatedRating: {
  //             rating: "--",
  //           },
  //         },
  //         ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  //       },
  //       analytics: {
  //         context: "seo-data-4614ee4f-f01c-465a-b2e4-31f5787d0c76",
  //       },
  //       cta: {
  //         link: "https://www.swiggy.com/city/bangalore/anand-sweets-and-savouries-jayanagar-rest593",
  //         type: "WEBLINK",
  //       },
  //     },
  //     {
  //       info: {
  //         id: "32059",
  //         name: "Cafe Coffee Day",
  //         cloudinaryImageId:
  //           "data:image/jpeg;base64,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",
  //         locality: "2ND BLOCK",
  //         areaName: "Jayanagar",
  //         costForTwo: "₹400 for two",
  //         cuisines: [
  //           "Beverages",
  //           "Cafe",
  //           "Snacks",
  //           "Desserts",
  //           "Burgers",
  //           "Ice Cream",
  //           "Bakery",
  //           "Fast Food",
  //         ],
  //         avgRating: 4.5,
  //         parentId: "1",
  //         avgRatingString: "4.5",
  //         totalRatingsString: "1.3K+",
  //         sla: {
  //           deliveryTime: 34,
  //           lastMileTravel: 3,
  //           serviceability: "SERVICEABLE",
  //           slaString: "30-35 mins",
  //           lastMileTravelString: "3.0 km",
  //           iconType: "ICON_TYPE_EMPTY",
  //         },
  //         availability: {
  //           nextCloseTime: "2024-11-12 23:45:00",
  //           opened: true,
  //         },
  //         badges: {
  //           textExtendedBadges: [
  //             {
  //               iconId: "guiltfree/GF_Logo_android_3x",
  //               shortDescription: "options available",
  //               fontColor: "#7E808C",
  //             },
  //           ],
  //         },
  //         isOpen: true,
  //         type: "F",
  //         badgesV2: {
  //           entityBadges: {
  //             imageBased: {},
  //             textBased: {},
  //             textExtendedBadges: {
  //               badgeObject: [
  //                 {
  //                   attributes: {
  //                     description: "",
  //                     fontColor: "#7E808C",
  //                     iconId: "guiltfree/GF_Logo_android_3x",
  //                     shortDescription: "options available",
  //                   },
  //                 },
  //               ],
  //             },
  //           },
  //         },
  //         aggregatedDiscountInfoV3: {
  //           header: "₹125 OFF",
  //           subHeader: "ABOVE ₹299",
  //           discountTag: "FLAT DEAL",
  //         },
  //         loyaltyDiscoverPresentationInfo: {
  //           logoCtx: {
  //             text: "BENEFITS",
  //             logo: "v1634558776/swiggy_one/OneLogo_3x.png",
  //           },
  //           freedelMessage: "FREE DELIVERY",
  //         },
  //         differentiatedUi: {
  //           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //           differentiatedUiMediaDetails: {
  //             lottie: {},
  //             video: {},
  //           },
  //         },
  //         reviewsSummary: {},
  //         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //         restaurantOfferPresentationInfo: {},
  //         externalRatings: {
  //           aggregatedRating: {
  //             rating: "4.0",
  //             ratingCount: "2.2K+",
  //           },
  //           source: "GOOGLE",
  //           sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
  //         },
  //         ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  //       },
  //       analytics: {
  //         context: "seo-data-4614ee4f-f01c-465a-b2e4-31f5787d0c76",
  //       },
  //       cta: {
  //         link: "https://www.swiggy.com/city/bangalore/cafe-coffee-day-2nd-block-jayanagar-rest32059",
  //         type: "WEBLINK",
  //       },
  //     },
  //     {
  //       info: {
  //         id: "396746",
  //         name: "Sweet Truth Cake,Desserts",
  //         cloudinaryImageId:
  //           "data:image/jpeg;base64,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",
  //         locality: "Residency Road",
  //         areaName: "Shantinagar",
  //         costForTwo: "₹450 for two",
  //         cuisines: ["Desserts", "Bakery", "Ice Cream", "Snacks"],
  //         avgRating: 4.3,
  //         parentId: "4444",
  //         avgRatingString: "4.3",
  //         totalRatingsString: "222",
  //         sla: {
  //           deliveryTime: 32,
  //           lastMileTravel: 1.5,
  //           serviceability: "SERVICEABLE",
  //           slaString: "30-35 mins",
  //           lastMileTravelString: "1.5 km",
  //           iconType: "ICON_TYPE_EMPTY",
  //         },
  //         availability: {
  //           nextCloseTime: "2024-11-12 23:59:00",
  //           opened: true,
  //         },
  //         badges: {},
  //         isOpen: true,
  //         type: "F",
  //         badgesV2: {
  //           entityBadges: {
  //             imageBased: {},
  //             textBased: {},
  //             textExtendedBadges: {},
  //           },
  //         },
  //         aggregatedDiscountInfoV3: {
  //           header: "60% OFF",
  //           subHeader: "UPTO ₹110",
  //         },
  //         loyaltyDiscoverPresentationInfo: {
  //           logoCtx: {
  //             text: "BENEFITS",
  //             logo: "v1634558776/swiggy_one/OneLogo_3x.png",
  //           },
  //           freedelMessage: "FREE DELIVERY",
  //         },
  //         differentiatedUi: {
  //           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //           differentiatedUiMediaDetails: {
  //             lottie: {},
  //             video: {},
  //           },
  //         },
  //         reviewsSummary: {},
  //         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //         restaurantOfferPresentationInfo: {},
  //         externalRatings: {
  //           aggregatedRating: {
  //             rating: "--",
  //           },
  //         },
  //         ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  //       },
  //       analytics: {
  //         context: "seo-data-4614ee4f-f01c-465a-b2e4-31f5787d0c76",
  //       },
  //       cta: {
  //         link: "https://www.swiggy.com/city/bangalore/sweet-truth-cake-and-desserts-residency-road-shantinagar-rest396746",
  //         type: "WEBLINK",
  //       },
  //     },
  //     {
  //       info: {
  //         id: "396750",
  //         name: "The Biryani Life",
  //         cloudinaryImageId:
  //           "data:image/jpeg;base64,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",
  //         locality: "Residency Road",
  //         areaName: "Shantinagar",
  //         costForTwo: "₹250 for two",
  //         cuisines: [
  //           "Biryani",
  //           "Mughlai",
  //           "Lucknowi",
  //           "Hyderabadi",
  //           "Kebabs",
  //           "Desserts",
  //           "Beverages",
  //         ],
  //         avgRating: 3.8,
  //         parentId: "8496",
  //         avgRatingString: "3.8",
  //         totalRatingsString: "359",
  //         sla: {
  //           deliveryTime: 33,
  //           lastMileTravel: 1.5,
  //           serviceability: "SERVICEABLE",
  //           slaString: "30-35 mins",
  //           lastMileTravelString: "1.5 km",
  //           iconType: "ICON_TYPE_EMPTY",
  //         },
  //         availability: {
  //           nextCloseTime: "2024-11-12 23:59:00",
  //           opened: true,
  //         },
  //         badges: {},
  //         isOpen: true,
  //         type: "F",
  //         badgesV2: {
  //           entityBadges: {
  //             imageBased: {},
  //             textBased: {},
  //             textExtendedBadges: {},
  //           },
  //         },
  //         aggregatedDiscountInfoV3: {
  //           header: "ITEMS",
  //           subHeader: "AT ₹159",
  //         },
  //         loyaltyDiscoverPresentationInfo: {
  //           logoCtx: {
  //             text: "BENEFITS",
  //             logo: "v1634558776/swiggy_one/OneLogo_3x.png",
  //           },
  //           freedelMessage: "FREE DELIVERY",
  //         },
  //         differentiatedUi: {
  //           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //           differentiatedUiMediaDetails: {
  //             lottie: {},
  //             video: {},
  //           },
  //         },
  //         reviewsSummary: {},
  //         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //         restaurantOfferPresentationInfo: {},
  //         externalRatings: {
  //           aggregatedRating: {
  //             rating: "--",
  //           },
  //         },
  //         ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  //       },
  //       analytics: {
  //         context: "seo-data-4614ee4f-f01c-465a-b2e4-31f5787d0c76",
  //       },
  //       cta: {
  //         link: "https://www.swiggy.com/city/bangalore/the-biryani-life-residency-road-shantinagar-rest396750",
  //         type: "WEBLINK",
  //       },
  //     },
  //     {
  //       info: {
  //         id: "396748",
  //         name: "The Good Bowl",
  //         cloudinaryImageId:
  //           "data:image/jpeg;base64,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",
  //         locality: "Residency Road",
  //         areaName: "Shantinagar",
  //         costForTwo: "₹400 for two",
  //         cuisines: ["Biryani", "Pastas", "Punjabi", "Desserts", "Beverages"],
  //         avgRating: 4.3,
  //         parentId: "7918",
  //         avgRatingString: "4.3",
  //         totalRatingsString: "785",
  //         sla: {
  //           deliveryTime: 44,
  //           lastMileTravel: 1.5,
  //           serviceability: "SERVICEABLE",
  //           slaString: "40-45 mins",
  //           lastMileTravelString: "1.5 km",
  //           iconType: "ICON_TYPE_EMPTY",
  //         },
  //         availability: {
  //           nextCloseTime: "2024-11-12 23:59:00",
  //           opened: true,
  //         },
  //         badges: {
  //           textExtendedBadges: [
  //             {
  //               iconId: "guiltfree/GF_Logo_android_3x",
  //               shortDescription: "options available",
  //               fontColor: "#7E808C",
  //             },
  //           ],
  //         },
  //         isOpen: true,
  //         type: "F",
  //         badgesV2: {
  //           entityBadges: {
  //             imageBased: {},
  //             textBased: {},
  //             textExtendedBadges: {
  //               badgeObject: [
  //                 {
  //                   attributes: {
  //                     description: "",
  //                     fontColor: "#7E808C",
  //                     iconId: "guiltfree/GF_Logo_android_3x",
  //                     shortDescription: "options available",
  //                   },
  //                 },
  //               ],
  //             },
  //           },
  //         },
  //         aggregatedDiscountInfoV3: {
  //           header: "ITEMS",
  //           subHeader: "AT ₹149",
  //         },
  //         loyaltyDiscoverPresentationInfo: {
  //           logoCtx: {
  //             text: "BENEFITS",
  //             logo: "v1634558776/swiggy_one/OneLogo_3x.png",
  //           },
  //           freedelMessage: "FREE DELIVERY",
  //         },
  //         differentiatedUi: {
  //           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //           differentiatedUiMediaDetails: {
  //             lottie: {},
  //             video: {},
  //           },
  //         },
  //         reviewsSummary: {},
  //         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //         restaurantOfferPresentationInfo: {},
  //         externalRatings: {
  //           aggregatedRating: {
  //             rating: "--",
  //           },
  //         },
  //         ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  //       },
  //       analytics: {
  //         context: "seo-data-4614ee4f-f01c-465a-b2e4-31f5787d0c76",
  //       },
  //       cta: {
  //         link: "https://www.swiggy.com/city/bangalore/the-good-bowl-residency-road-shantinagar-rest396748",
  //         type: "WEBLINK",
  //       },
  //     },
  //     {
  //       info: {
  //         id: "393107",
  //         name: "EatFit",
  //         cloudinaryImageId:
  //           "data:image/jpeg;base64,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",
  //         locality: "VASANTHA NAGAR",
  //         areaName: "Cunningham Road",
  //         costForTwo: "₹270 for two",
  //         cuisines: [
  //           "Chinese",
  //           "Healthy Food",
  //           "Tandoor",
  //           "Pizzas",
  //           "North Indian",
  //           "Thalis",
  //           "Biryani",
  //         ],
  //         avgRating: 4.5,
  //         parentId: "76139",
  //         avgRatingString: "4.5",
  //         totalRatingsString: "5.3K+",
  //         sla: {
  //           deliveryTime: 27,
  //           lastMileTravel: 4.1,
  //           serviceability: "SERVICEABLE",
  //           slaString: "25-30 mins",
  //           lastMileTravelString: "4.1 km",
  //           iconType: "ICON_TYPE_EMPTY",
  //         },
  //         availability: {
  //           nextCloseTime: "2024-11-13 01:00:00",
  //           opened: true,
  //         },
  //         badges: {},
  //         isOpen: true,
  //         type: "F",
  //         badgesV2: {
  //           entityBadges: {
  //             imageBased: {},
  //             textBased: {},
  //             textExtendedBadges: {},
  //           },
  //         },
  //         aggregatedDiscountInfoV3: {
  //           header: "ITEMS",
  //           subHeader: "AT ₹199",
  //         },
  //         loyaltyDiscoverPresentationInfo: {
  //           logoCtx: {
  //             text: "BENEFITS",
  //             logo: "v1634558776/swiggy_one/OneLogo_3x.png",
  //           },
  //           freedelMessage: "FREE DELIVERY",
  //         },
  //         differentiatedUi: {
  //           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //           differentiatedUiMediaDetails: {
  //             lottie: {},
  //             video: {},
  //           },
  //         },
  //         reviewsSummary: {},
  //         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //         restaurantOfferPresentationInfo: {},
  //         externalRatings: {
  //           aggregatedRating: {
  //             rating: "--",
  //           },
  //         },
  //         ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  //       },
  //       analytics: {
  //         context: "seo-data-4614ee4f-f01c-465a-b2e4-31f5787d0c76",
  //       },
  //       cta: {
  //         link: "https://www.swiggy.com/city/bangalore/eatfit-vasantha-nagar-cunningham-road-rest393107",
  //         type: "WEBLINK",
  //       },
  //     },
  //     {
  //       info: {
  //         id: "39376",
  //         name: "Frozen Bottle",
  //         cloudinaryImageId:
  //           "data:image/jpeg;base64,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",
  //         locality: "Brigade Road",
  //         areaName: "Ashok Nagar",
  //         costForTwo: "₹250 for two",
  //         cuisines: ["Beverages", "Ice Cream", "Desserts"],
  //         avgRating: 4.3,
  //         parentId: "5655",
  //         avgRatingString: "4.3",
  //         totalRatingsString: "3.2K+",
  //         sla: {
  //           deliveryTime: 28,
  //           lastMileTravel: 3.6,
  //           serviceability: "SERVICEABLE",
  //           slaString: "25-30 mins",
  //           lastMileTravelString: "3.6 km",
  //           iconType: "ICON_TYPE_EMPTY",
  //         },
  //         availability: {
  //           nextCloseTime: "2024-11-13 01:00:00",
  //           opened: true,
  //         },
  //         badges: {
  //           imageBadges: [
  //             {
  //               imageId: "v1695133679/badges/Pure_Veg111.png",
  //               description: "pureveg",
  //             },
  //           ],
  //         },
  //         isOpen: true,
  //         type: "F",
  //         badgesV2: {
  //           entityBadges: {
  //             imageBased: {
  //               badgeObject: [
  //                 {
  //                   attributes: {
  //                     description: "pureveg",
  //                     imageId: "v1695133679/badges/Pure_Veg111.png",
  //                   },
  //                 },
  //               ],
  //             },
  //             textBased: {},
  //             textExtendedBadges: {},
  //           },
  //         },
  //         aggregatedDiscountInfoV3: {
  //           header: "50% OFF",
  //           subHeader: "UPTO ₹100",
  //         },
  //         loyaltyDiscoverPresentationInfo: {
  //           logoCtx: {
  //             text: "BENEFITS",
  //             logo: "v1634558776/swiggy_one/OneLogo_3x.png",
  //           },
  //           freedelMessage: "FREE DELIVERY",
  //         },
  //         differentiatedUi: {
  //           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //           differentiatedUiMediaDetails: {
  //             lottie: {},
  //             video: {},
  //           },
  //         },
  //         reviewsSummary: {},
  //         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //         restaurantOfferPresentationInfo: {},
  //         externalRatings: {
  //           aggregatedRating: {
  //             rating: "3.8",
  //             ratingCount: "130",
  //           },
  //           source: "GOOGLE",
  //           sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
  //         },
  //         ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  //       },
  //       analytics: {
  //         context: "seo-data-4614ee4f-f01c-465a-b2e4-31f5787d0c76",
  //       },
  //       cta: {
  //         link: "https://www.swiggy.com/city/bangalore/frozen-bottle-milkshakes-desserts-and-ice-cream-brigade-road-ashok-nagar-rest39376",
  //         type: "WEBLINK",
  //       },
  //     },
  //     {
  //       info: {
  //         id: "49840",
  //         name: "Ibaco",
  //         cloudinaryImageId:
  //           "data:image/jpeg;base64,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",
  //         locality: "Basavanagudi",
  //         areaName: "Basavanagudi",
  //         costForTwo: "₹800 for two",
  //         cuisines: ["Desserts"],
  //         avgRating: 4.7,
  //         parentId: "3481",
  //         avgRatingString: "4.7",
  //         totalRatingsString: "628",
  //         sla: {
  //           deliveryTime: 25,
  //           lastMileTravel: 2,
  //           serviceability: "SERVICEABLE",
  //           slaString: "25-30 mins",
  //           lastMileTravelString: "2.0 km",
  //           iconType: "ICON_TYPE_EMPTY",
  //         },
  //         availability: {
  //           nextCloseTime: "2024-11-12 23:00:00",
  //           opened: true,
  //         },
  //         badges: {
  //           imageBadges: [
  //             {
  //               imageId: "newg.png",
  //               description: "Gourmet",
  //             },
  //           ],
  //         },
  //         isOpen: true,
  //         type: "F",
  //         badgesV2: {
  //           entityBadges: {
  //             imageBased: {
  //               badgeObject: [
  //                 {
  //                   attributes: {
  //                     description: "Gourmet",
  //                     imageId: "newg.png",
  //                   },
  //                 },
  //               ],
  //             },
  //             textBased: {},
  //             textExtendedBadges: {},
  //           },
  //         },
  //         loyaltyDiscoverPresentationInfo: {
  //           logoCtx: {
  //             text: "BENEFITS",
  //             logo: "v1634558776/swiggy_one/OneLogo_3x.png",
  //           },
  //           freedelMessage: "FREE DELIVERY",
  //         },
  //         differentiatedUi: {
  //           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //           differentiatedUiMediaDetails: {
  //             lottie: {},
  //             video: {},
  //           },
  //         },
  //         reviewsSummary: {},
  //         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //         restaurantOfferPresentationInfo: {},
  //         externalRatings: {
  //           aggregatedRating: {
  //             rating: "4.1",
  //             ratingCount: "403",
  //           },
  //           source: "GOOGLE",
  //           sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
  //         },
  //         ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  //       },
  //       analytics: {
  //         context: "seo-data-4614ee4f-f01c-465a-b2e4-31f5787d0c76",
  //       },
  //       cta: {
  //         link: "https://www.swiggy.com/city/bangalore/ibaco-basavanagudi-rest49840",
  //         type: "WEBLINK",
  //       },
  //     },
  //   ];

  //   console.log(jsondata);

  //   // setrestData(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  //   // setfiltrest(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  //   setfiltrest(jsondata);
  //   setrestData(jsondata);
  // };
  
    if (restData === null)
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

      <div className="body-elem">
        {/* {console.log("body rendering")};{console.log(filtrest)} */}

        {console.log(restData)}
        {restData.cards.length}
        <div className="filter">
          <button
            onClick={() => {
              const filteredrest = restData.filter(
                (filrest) => filrest?.info?.avgRating > 4.3
              );

              setfiltrest(filteredrest);
            }}
            className="top-rated"
          >
            Top rated restaurant
          </button>

          <input
            type="text"
            className="search-bar"
            //value={searchvalue}
            onChange={(e) => {
              setsearchvalue(e.target.value);
              const filtersearch = restData.filter((filterrest) => {
                return filterrest?.info?.name
                  .toLowerCase()
                  .includes(searchvalue.toLowerCase()); // show restaursnts on the basis of the letters
              });
              setfiltrest(filtersearch);
            }}
          />
          <button
            onClick={() => {
              const filtersearch = restData.filter((filterrest) => {
                return filterrest?.info?.name
                  .toLowerCase()
                  .includes(searchvalue.toLowerCase()); // converting name into lower case and then
                // checking for lower case includes
              });

              setfiltrest(filtersearch);
            }}
          >
            Search
          </button>
        </div>
        <div className="res-card-cont">
          {restData?.map((restaurant) => (
            <Link
              to={"/restaurants/" + restaurant?.info?.id}
              
            >
              <CardComponent name={restaurant} key={restaurant?.info?.id} />
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
