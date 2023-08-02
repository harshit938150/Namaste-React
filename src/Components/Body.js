import RestaurantCard from "./RestrauntCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () =>{

    const [hotelLists,sethotelLists] = useState([]);
    const [filteredHotelLists,setFilteredHotelLists] = useState([]);
    const [searchText, setSearchText] = useState("");
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json(data)
        sethotelLists(json.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredHotelLists(json.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false){
        return (
            <h1>Looks like you are offline!! Check your internet connection</h1>
        );
    };

    return hotelLists.length ===0 ?<Shimmer/> :(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value)
                        searchedItem = searchText;
                        }}></input>
                    <button onClick={()=>{
                        let filterData = hotelLists.filter((hotel)=> 
                            hotel.info.name.toLowerCase().includes(searchText) 
                        );
                        setFilteredHotelLists(filterData);
                        
                    }}>search</button>
                </div>
                <button className="filter-btn" onClick={() => {
           const list = hotelLists.filter(
              (res) => res.data.avgRating > 4
            );
            setFilteredHotelLists(list);
          }}
                >Top Rated Restaurants</button>
            </div>
            <div className="res-container">
            {     
                filteredHotelLists.map((restaurant) => (
                <Link to={"/restaurants/" + restaurant?.info.id} key ={restaurant?.info.id}><RestaurantCard resData = {restaurant}/></Link>
                
                ))}
            </div>
        </div>
    );
};

export default Body;