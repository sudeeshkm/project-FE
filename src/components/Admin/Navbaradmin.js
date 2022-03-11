import React from "react";
import "./Navbaradmin.css";

let nav = document.querySelector(".nav");
function toggle(){
    nav.classList.toggle("active");
}
const Navbaradmin = () => {
    return (
        <header>
            <div class="logo">
        <h3>ICTAK</h3>
    </div>
    <div class="nav">
        <ul>
            <li><a href="#">Batch Manager</a></li>
            <li><a href="#">Courses</a></li>
            
            <li><a href="#">Logout</a></li>
        </ul>
        <i class="fas fa-times" onClick="toggle()"></i>
    </div>
    <div class="toggle">
        <i class="fas fa-bars" onClick="toggle()"></i>
    </div>
        </header>
   
   

    );
};   

export default Navbaradmin;