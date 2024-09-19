import { useState } from "react";
import styles from "./NavBar.module.css"


const NavBar=(props)=>
{
    const {onSearchChange}=props;

    const handleChange = (event) => {
        let values=event.target.value;
        onSearchChange(event); // Pass the updated input value
      };
      
    return(
        <div className={styles.headnav}>
            <img className={styles.logo} src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png" alt="logo" />
            <div className={styles.search}>
               <img src="https://assets.ccbp.in/frontend/react-js/search-img.png " alt="search" /> 
               <input type="search" placeholder="Search history" onChange={handleChange}/>
            </div>
        </div>
    )
}
export default NavBar;
