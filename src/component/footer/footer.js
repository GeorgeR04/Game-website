import React from "react";
import {Link} from "react-router-dom";
import {FaCubes,FaYoutube,FaTwitter,FaMailBulk} from "react-icons/fa";
import {footeritems} from "./footeritems/FooterItems";
import Company from "./footeritems/Company";
import Community from "./footeritems/Community";
import PandS from "./footeritems/PandS";

const Footer = () =>{
    return(
        <nav className='bg-mainColor text-white h-footerh border-t-4 justify-center font-body'>

            <Link to='/' className="text-white text-2xl flex justify-between w-fit hover:text-secondaryColor hover:bg-gradient-to-r from-textcolor  to-textcolor2 bg-clip-text hover:text-transparent ">
                <FaCubes/>Operation-Cold-War-2
            </Link>
            <nav className='w-fit'>
                <Link to='https://www.youtube.com/watch?v=jwtP8VT1_nk&t=7s'>
                    <FaYoutube/>
                </Link>
            </nav>
            <ul className='relative flex list-none text*center w-textitems h-20 justify-end  '>
                {footeritems.map(item =>{
                    if(item.title==="Company"){
                        return(
                            <li key={item.id} className={item.classname}>
                                {item.title}
                                {<Company/>}
                            </li>
                        );
                    }
                    if(item.title==="Community"){
                        return(
                            <li key={item.id} className={item.classname}>
                                {item.title}
                                {<Community/>}
                            </li>
                        );
                    }

                    if(item.title==="Products & Services"){
                        return(
                            <li key={item.id} className={item.classname}>
                                {item.title}
                                {<PandS/>}
                            </li>
                        );
                    }

                    return(
                        <li key={item.id} className={item.classname}>
                            {item.title}
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