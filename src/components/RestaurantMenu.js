import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCatergory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
// const [resInfo, setResInfo] = useState(null);

const { resId } = useParams();

const data = "Dummy data"

const resInfo = useRestaurantMenu(resId);

const [showIndex, setShowIndex] = useState(null)

  
    // useEffect(() => { 
    //     // fetchMenu();
    //     const restaurant = restaurant_menu.find((restaurantList) => restaurantList.restaurant_id === parseInt(resId));
    //     setResInfo(restaurant);
    // }, [resId]);

    // const fetchMenu = async () => {
    //   const data = await fetch("../utils/mockDataRestaurantMenu.js");
    //   console.log(data);
    // }

    // const categories = Object.keys(resInfo?.menu || {});
    // console.log(categories);

    const categories = Object.entries(resInfo?.menu || {});
    // console.log(categories);


    if (!resInfo) {
      return <Shimmer />;
    }
    
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl"> { resInfo.name } </h1>
      <h2 className="font-bold text-lg">{ resInfo.cuisine }</h2>
      {/* <ul>
        {resInfo.menu.map((dish, index) => (
          <li key={index}>
            {dish.dish_name} - Rs {dish.price}
          </li>
        ))}
      </ul> */}
      {
        categories.map((catergory, index) => (
          <RestaurantCatergory 
            data={catergory} 
            key={catergory[0]} 
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}/> //controlled component
        ))
      }
    </div>
  );
}

export default RestaurantMenu;