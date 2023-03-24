
import React, {useState} from "react";
import {Link} from "react-router-dom";
import {companyitems} from "./FooterItems";


function Company(){


    return<>
        <ul className='Companymenuitem'>
            {companyitems.map(item => {
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
export default Company;