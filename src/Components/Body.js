import RestaurantCard from "./RestrauntCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () =>{

    const [hotelLists,sethotelLists] = useState(resList);
    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
           const list = hotelLists.filter(
              (res) => res.data.avgRating > 4
            );
            sethotelLists(list);
          }}
                >Top Rated Restaurants</button>
            </div>
            <div className="res-container">
            {
                hotelLists.map((restaurant) => (
                 <RestaurantCard key ={restaurant.data.id} resData = {restaurant}/>))
            }
            </div>
        </div>
    );
};

export default Body;