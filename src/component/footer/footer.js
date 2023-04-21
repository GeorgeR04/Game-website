import React from "react";
import {Link} from "react-router-dom";
import {FaCubes,FaYoutube,FaFighterJet} from "react-icons/fa";
import {footeritems} from "./footeritems/FooterItems";
import { useLocation } from "react-router-dom";

const Footer = () =>{
    const location = useLocation();
    const isTransparent = location.pathname === "/";
    const hasTopBorder = location.pathname !== "/";
    return(
        <nav
            className={`text-white h-footerhmain justify-center font-body  ${
                isTransparent ? "bg-transparent" : "bg-mainColor border-t-2"
            } ${hasTopBorder ? "border-t-2" : ""}`}
        >




            <ul className='relative top-footerhText ml-5 flex text-xl list-none w-textitems justify-start space-x-10    '>
                {footeritems.map(item =>{
                    return (
                        <li key={item.id} className={item.className}>
                            <Link to={item.path}>{item.title}</Link>
                        </li>
                    );

                })}

            </ul>
        </nav>
    );

}
/*



 */
export default Footer;