import React, { Fragment } from "react";
import Header from "../Header/Header";
import Sidebar from "../SidebarMenu/sidebar";
import "./index.css";

const ContainerWrapper = () => {

    return (
        <Fragment>
            <div className="outerContainer">
            <Header/>
                <div className="nestedContainer d-flex justify-content-between">
                   
                    <Sidebar/>
                    <div>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                     when an unknown printer took a galley of type and scrambled it to make a type
                      specimen book. It has survived not only five centuries, but also the leap into
                       electronic typesetting, remaining essentially unchanged. It was popularised 
                       in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including 
                        versions of Lorem Ipsum.
                    </div>
                  
                </div>
            </div>
        </Fragment>
    )
}
export default ContainerWrapper;