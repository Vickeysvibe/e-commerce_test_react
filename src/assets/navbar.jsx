import { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <div className="navbar">  
      <div className="nav-logo">logo</div>
      <div className="nav-menu">
        <ul>
          <li onClick={()=>{setMenu("home")}}><Link to='/'>Home</Link> {menu==="home"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("shop")}}><Link to='/shop'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("sell")}}><Link to='/sell'>Sell</Link>{menu==="sell"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("contact")}}><Link to='/contact'>Contact</Link>{menu==="contact"?<hr/>:<></>}</li>
        </ul>
      </div>
      <div className="nav-left"> <Link to={'/cart'} style={{textDecoration:'none', color:'black'}}> <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1V2m6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5H16Z"/></svg></Link><Link to={'/login'} style={{textDecoration:'none', color:'black'}}> <p>Login/Sign-up</p></Link></div>
    </div>
  );
};

