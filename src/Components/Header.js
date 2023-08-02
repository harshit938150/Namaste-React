import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () =>{
    const [btnName,setBtnName] = useState("login");

    return(
        <div className="header">
            <div className="logo">
                <img className="logoImage" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/about"}>About Us</Link>
                    </li>
                    <li>
                        <Link to={"/contact"}>Contact Us</Link>
                    </li>
                    <li>
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