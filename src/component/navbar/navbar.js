import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCubes, FaBiohazard, FaDatabase, FaFighterJet } from "react-icons/fa";
import { NavItems } from "./Navbaritems/NavbarItems";
import Dropdownmenu from "./Navbaritems/Dropdown";
import Signup from "./Navbaritems/Signeup";

function Navbar() {
    const [Dropdown, setDropdown] = useState(false);
    const location = useLocation();

    const isTransparent = location.pathname === "/";
    const hasBottomBorder = location.pathname !== "/";

    return (
        <>
            <nav
                className={`font-body h-24 flex justify-center text-white items-center ${
                    isTransparent ? "bg-transparent" : "bg-mainColor border-b-2"
                } ${hasBottomBorder ? "border-b-2" : ""}`}
            >
                <Link
                    to="/"
                    className="font-body text-white text-2xl flex w-56 justify-between hover:bg-gradient-to-r from-textcolor to-textcolor2 bg-clip-text hover:text-transparent"
                >
                    <FaFighterJet /> Operation-Cold-War-2
                </Link>

                <ul className="flex list-none text-center w-textitems justify-end mr-2 ">
                    {NavItems.map((item) => {
                        if (item.title === "Information") {
                            return (
                                <li
                                    key={item.id}
                                    className={item.className}
                                    onMouseEnter={() => setDropdown(true)}
                                    onMouseLeave={() => setDropdown(false)}
                                >
                                    <Link to={item.path}>{item.title}</Link>
                                    {Dropdown && <Dropdownmenu />}
                                </li>
                            );
                        }

                        return (
                            <li key={item.id} className={item.className}>
                                <Link to={item.path}>{item.title}</Link>
                            </li>
                        );
                    })}
                </ul>
                <Signup />
            </nav>
        </>
    );
}

export default Navbar;