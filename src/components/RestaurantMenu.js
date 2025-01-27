 import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
// const [resInfo, setResInfo] = useState(null);

const { resId } = useParams();

const resInfo = useRestaurantMenu(resId);

  
    // useEffect(() => { 
    //     // fetchMenu();
    //     const restaurant = restaurant_menu.find((restaurantList) => restaurantList.restaurant_id === parseInt(resId));
    //     setResInfo(restaurant);
    // }, [resId]);

    // const fetchMenu = async () => {
    //   const data = await fetch("../utils/mockDataRestaurantMenu.js");
    //   console.log(data);
    // }

    
    if (!resInfo) {
      return <Shimmer />;
    }
    
  return (
    <div className="menu">
      <h1> { resInfo.name } </h1>
      <h2>{ resInfo.cuisine }</h2>
      <ul>
        {resInfo.menu.map((dish, index) => (
          <li key={index}>
            {dish.dish_name} - Rs {dish.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RestaurantMenu;