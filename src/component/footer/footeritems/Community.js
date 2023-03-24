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