import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCatergory = ({data, showItems, setShowIndex}) => {

    const handleClick = () => {
        setShowIndex();
    };
    return <div>
        {/* Header */}

        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">{data[0]}</span>
                <span>⬇️</span>
            </div>

            {showItems && <ItemList items={data[1]}/>}
        </div>

        {/* Body */}
        
    </div>
}

export default RestaurantCatergory;