import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


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

    return listOfRestaurants.length === 0 ? (
      <Shimmer />
     ) : (
        <div className="body">
            <div className="filter">
              <div className="search">
                <input 
                  type="text" 
                  className="search-box" 
                  value={ searchText } 
                  onChange={(e) => {
                    setSearchText(e.target.value);
                }}/>
                <button onClick={() => {
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
              <button 
                className="filter-btn" 
                onClick={() => {
                  const filteredList = listOfRestaurants.filter(
                    (res) => res.rating>4.5
                  );
                  setListOfRestaurant(filteredList);
                  
                }}>Top Rated Restaurants
              </button>
            </div>
            <div className="res-container">
                {
                  filteredRestaurant.map(restaurant => (
                    <RestaurantCard key={restaurant.id} resData={restaurant}/>  //not using key(not acceptable) <<<<< index as key <<<<< unique id
                  ))
                }
            </div>
        </div>
    )
}

export default Body;