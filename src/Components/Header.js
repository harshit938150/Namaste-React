import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../index.css"
const Header = () =>{
    const [btnName,setBtnName] = useState("login");

    return(
        <div className="flex justify-between shadow-lg">
            <div className="logo">
                <img className="w-56" src={LOGO_URL}></img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to={"/about"}>About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to={"/contact"}>Contact Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to={"/grocery"}>Grocery</Link>
                    </li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{
                        btnName ==="login"?setBtnName("logout"): setBtnName("login");
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;