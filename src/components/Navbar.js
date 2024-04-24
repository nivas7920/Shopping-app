import React from "react";
import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";


const Navbar =()=>
{

    
    return(
        <div >
            <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
                <NavLink to="/">
                    <div className="ml-5 ">
                    <img src="../logo.png" className="h-14"/>
                    </div>
               
                </NavLink>
               <div className="flex items-center font-medium text-slate-100 mr-5  space-x-6">
               <NavLink to="/">
               <div>
                <p>Home</p>
               </div>
               </NavLink>

               <NavLink to="/cart">
                <div className="relative">
                <TiShoppingCart  className="text-2xl"/>
            
               
                </div>
               </NavLink>

               </div>
               
            </nav>

          
        </div>
    );
}
export default Navbar;