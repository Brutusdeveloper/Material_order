import React, { Fragment } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { sidebarData } from "./jsonSidebar";
import './sidebar.css';

const Sidebar = () => {

    return (
        <Fragment>
            <div className="d-block sidebar_Wrapper">
                {sidebarData.map((item, key) => {
                    return (
                        <Fragment>
                            <div className="d-flex sidebarOptions" key={key}>
                                <span class="material-icons pe-2">{item.Icon}</span>
                                <span>{item.Name}</span>
                            </div>
                        </Fragment>
                    )
                })}

            </div>
        </Fragment>
    )
}
export default Sidebar;