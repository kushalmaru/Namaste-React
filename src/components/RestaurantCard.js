const RestaurantCard = (props) => {
    const { resData } = props;
    return (
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-300">
            <img 
            className="rounded-lg" 
            alt="res-logo" 
            src={resData.image_url} />
            <h3 className="font-bold py-4 text-lg">{resData.name}</h3>
            <h4>{resData.cuisine}</h4>
            <h4>{resData.rating} stars</h4>
            <h4>{resData.delivery_time_minutes} minutes</h4>
            <h4>{resData.reviews_count} reviews</h4>
        </div>
    )
}

export default RestaurantCard;