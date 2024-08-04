import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="navbarContainer shadow p-3">
      <div className="title">
        <h2>Shoppify<img src={"https://img.freepik.com/free-photo/shopping-cart-3d-render-icon_460848-6902.jpg?size=626&ext=jpg&ga=GA1.1.1077738577.1714454738&semt=ais"} style={{height:"70px" , width:"100px", borderRadius:"25%" ,backgroundColor:"transparent",marginRight:"0px"}} /></h2> 
      </div>
      <div className="menus">
        <Link  to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/users">Users</Link>
        <Link to="/products">Products</Link>
        <Link to="/signin">LogIn</Link>
        <Link to="/signup">Register</Link>
        
      </div>
    </div>
  );
}

export default Nav;
