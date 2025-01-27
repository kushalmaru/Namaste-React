import { useEffect, useState } from "react";
import restaurant_menu from "../utils/mockDataRestaurantMenu"; 

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        const restaurant = restaurant_menu.find((restaurantList) => restaurantList.restaurant_id === parseInt(resId));
        setResInfo(restaurant);
    }, [resId]);

    

    return resInfo;
}

export default useRestaurantMenu;