const RestaurantCard = (props) => {
    const { resData } = props;
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img 
            className="res-logo" 
            alt="res-logo" 
            src={resData.image_url} />
            <h3>{resData.name}</h3>
            <h4>{resData.cuisine}</h4>
            <h4>{resData.rating} stars</h4>
            <h4>{resData.delivery_time_minutes} minutes</h4>
            <h4>{resData.reviews_count} reviews</h4>
        </div>
    )
}

export default RestaurantCard;