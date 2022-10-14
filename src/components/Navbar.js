import React from "react";
import { Link} from "react-router-dom";
import "./Navbar.css";

export const Navbar = (props) => {
  
  // window.onload = ()=>{
  //   let navTag = document.getElementsByClassName("navBar")[0];
  //   if(!props.userFound){
  //     navTag.style.visibility = "hidden";
  //   }else{
  //     navTag.style.visibility = "visible";
  //   }
  // };
  let logoutBtn = (e)=>{
    document.getElementById("navBar").style.display = "none";
    // console.log(e.target);
  };
  return (
    <div id="navBarDiv">
      <div id="navBarContainer" className="flex items-center justify-right bg-slate-250 bg-gray-400" style={{height:"45px",display:"flex",justifyContent:"right",paddingRight:"1rem"}}>
        <nav  id="navBar" className="navBar flex justify-end">
          <Link
            to="/home"
             className="font-semibold text-2xl px-3 py-2 text-slate-700 rounded-lg  hover:text-slate-900">

            Home
          </Link>
          <Link
            to="/about"
             className="font-medium text-2xl px-3 py-2 text-slate-700 rounded-lg  hover:text-slate-900"
          >
            About
          </Link>
          <Link
            to="/contact"
             className="font-medium text-2xl px-3 py-2 text-slate-700 rounded-lg  hover:text-slate-900"
          >
            Contact
          </Link>
          <Link
           onClick={logoutBtn}
            to="/login"
             className="logoutButton text-2xl font-medium px-3 py-2 text-slate-700 rounded-lg  hover:text-orange-700"
          >
            Logout
          </Link>          
        </nav>
      </div>
    </div>
  );
};
export default Navbar;
