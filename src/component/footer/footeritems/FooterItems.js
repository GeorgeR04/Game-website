export  const footeritems=[
    {
        id:1,
        title: "Company",
        path: "./Company",
        className: "hover:bg-gradient-to-r from-textcolor  to-textcolor2 bg-clip-text hover:text-transparent ",
    },
    {
        id:2,
        title: "Community",
        path: "./Community",
        className: "hover:bg-gradient-to-r from-textcolor  to-textcolor2 bg-clip-text hover:text-transparent ",
    },

    {
        id:3,
        title: "Products & Services",
        path: "./Products & Services",
        className: "hover:bg-gradient-to-r from-textcolor  to-textcolor2 bg-clip-text hover:text-transparent ",
    },
]








    /*

    import React, {useState} from "react";
import {Link} from "react-router-dom";
import {commnunityitems} from "./FooterItems";



function Community(){


    return<>
        <ul className='Communitymenuitem'>
            {commnunityitems.map(item => {
                return (
                    <li key={item.id}>
                        <Link to={item.path} className={item.classname}>
                            {item.title}</Link>
                    </li>
                );
            })}
        </ul>
    </>;
}
export default Community;


     */
