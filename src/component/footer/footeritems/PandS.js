
import React, {useState} from "react";
import {Link} from "react-router-dom";
import {productsandserviceitems} from "./FooterItems";


function PandS(){


    return<>
        <ul className='PAndSmenuitem'>
            {productsandserviceitems.map(item => {
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
export default PandS;