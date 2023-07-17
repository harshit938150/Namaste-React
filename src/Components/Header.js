import { LOGO_URL } from "../utils/constants";
import { useState,useEffect } from "react";
const Header = () =>{
    const [btnName,setBtnName] = useState("login");

    return(
        <div className="header">
            <div className="logo">
                <img className="logoImage" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
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