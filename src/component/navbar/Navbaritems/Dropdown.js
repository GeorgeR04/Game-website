import React, {useState} from "react";
import { Link } from "react-router-dom"
import {Informationdropmenu} from "./NavbarItems";

function Dropdownmenu(){
    const [dropdown ,setdropdown]= useState(false);



    return(<>
            <ul className={dropdown ?"none" : "w-10 absolute list-none text-start top-dropdown"} onClick={() => setdropdown(!dropdown)}>
                {Informationdropmenu.map((item) =>{
                    return(
                        <li key={item.id} >
                            <Link to={item.path} className={item.className}
                                  onClick={() => setdropdown(!dropdown)}
                            >{item.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
export default Dropdownmenu;