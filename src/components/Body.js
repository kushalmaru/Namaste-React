import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
  // Local State Variable - Super powerful variable 
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const[searchText, setSearchText] = useState("");
  // Whenever state variable updates, react triggers a reconciliation cycle(re-renders the component)


  useEffect(() => {
    setListOfRestaurant(resList);
    setFilteredRestaurant(resList);
  }, []);

  // const fetchData = () => {
  //   const data = fetch();
  // }


  //Normal JS variable
  // let listOfRestaurantsJs = [
  //   {
  //     "id": 1,
  //     "name": "Koshy's",
  //     "cuisine": "Indian",
  //     "rating": 3.5,
  //     "reviews_count": 124,
  //     "delivery_time_minutes": 30,
  //     "image_url": "https://tse3.mm.bing.net/th?id=OIP.W9RFknwcGfgpMFJFhQurjgHaEK&pid=Api"
  //   },
  //   {
  //     "id": 2,
  //     "name": "Vidyarthi Bhavan",
  //     "cuisine": "South Indian",
  //     "rating": 4.8,
  //     "reviews_count": 89,
  //     "delivery_time_minutes": 25,
  //     "image_url": "https://tse1.mm.bing.net/th?id=OIP.aE3mmRnS1fF1W3nbpLNABwHaHa&pid=Api"
  //   },
  //   {
  //     "id": 3,
  //     "name": "Sushi Zen",
  //     "cuisine": "Japanese",
  //     "rating": 4.8,
  //     "reviews_count": 89,
  //     "delivery_time_minutes": 45,
  //     "image_url": "https://tse3.mm.bing.net/th?id=OIP.W9RFknwcGfgpMFJFhQurjgHaEK&pid=Api"
  //   },
  // ];

  // Conditional Rendering
  // if(listOfRestaurants.length === 0){
  //   return <Shimmer />
  // }


    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false){
      return <h1> You are Offline. Please check your internet connection </h1>
    }

    return listOfRestaurants.length === 0 ? (
      <Shimmer />
     ) : (
        <div className="body">
            <div className="filter flex">
              <div className="search m-4 p-4">
                <input 
                  type="text" 
                  className="border-solid border-black" 
                  value={ searchText } 
                  onChange={(e) => {
                    setSearchText(e.target.value);
                }}/>
                <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={() => {
                  //Filter the restaurant cards and update the UI
                  const filteredRestaurant = listOfRestaurants.filter((res) => res.name.toLowerCase().includes(searchText.toLocaleLowerCase()));

                  setFilteredRestaurant(filteredRestaurant);
                }}
                // value={listOfRestaurants}
                // onChange={(e) => {setListOfRestaurant(e.target.value)}}
                >
                  Search
                </button>
              </div>
              <div className="search m-4 p-4 flex items-center">
              <button 
                className="px-4 py-2 bg-gray-100 rounded-lg" 
                onClick={() => {
                  const filteredList = listOfRestaurants.filter(
                    (res) => res.rating>4.5
                  );
                  setListOfRestaurant(filteredList);
                  
                }}>Top Rated Restaurants
              </button>
              </div>
            </div>
            <div className="flex flex-wrap">
                {
                  filteredRestaurant.map(restaurant => (
                    <Link key={restaurant.id} to={"/restaurants/" + restaurant.id}><RestaurantCard resData={restaurant}/></Link>  //not using key(not acceptable) <<<<< index as key <<<<< unique id
                  ))
                }
            </div>
        </div>
    )
}

export default Body;