import React, { useState } from 'react';
// import {
//     FaTh,
//     FaBars,
//     FaUserAlt,
//     FaRegChartBar,
//     FaCommentAlt,
//     FaShoppingBag,
//     FaThList
// }from "react-icons/fa";
import { NavLink, Route } from 'react-router-dom';
import {Sidebar} from 'react-pro-sidebar'
import { Menu } from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';
import { Link } from 'react-router-dom';

const SideNav = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    return (
        <Sidebar>
            <Menu>
                <MenuItem>
                     <Link to={"/add"}>Add Course</Link> 
                </MenuItem>
                <MenuItem>
                    <Link to={"/courses"}>View Courses</Link>
                </MenuItem>
                <MenuItem>Update</MenuItem>
                <MenuItem>Delete</MenuItem>
            </Menu>
        </Sidebar>
    );
};

export default SideNav;